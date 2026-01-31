const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Room = require('../models/room');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

// Create booking
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { hostelId, roomId, bedNumber, checkInDate, checkOutDate, totalAmount } = req.body;

        // Check if bed is available
        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        const bed = room.beds.find(b => b.bedNumber === bedNumber);
        if (!bed || bed.status !== 'available') {
            return res.status(400).json({ message: 'Bed is not available' });
        }

        // Create booking
        const booking = new Booking({
            user: req.user.id,
            hostel: hostelId,
            room: roomId,
            bedNumber,
            checkInDate: new Date(checkInDate),
            checkOutDate: new Date(checkOutDate),
            totalAmount
        });

        await booking.save();

        // Update bed status
        bed.status = 'booked';
        bed.bookedBy = req.user.id;
        await room.save();

        // Update user's bookings
        const User = require('/models/User');
        await User.findByIdAndUpdate(req.user.id, {
            $push: { bookings: booking._id }
        });

        res.status(201).json(booking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get user's bookings
router.get('/my-bookings', authMiddleware, async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id })
            .populate('hostel')
            .populate('room')
            .sort({ createdAt: -1 });
        res.json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all bookings (Admin only)
router.get('/', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate('user', 'username email fullName')
            .populate('hostel')
            .populate('room')
            .sort({ createdAt: -1 });
        res.json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Cancel booking
router.put('/:id/cancel', authMiddleware, async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        // Check if user owns the booking or is admin
        if (booking.user.toString() !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized' });
        }

        // Update booking status
        booking.bookingStatus = 'cancelled';
        await booking.save();

        // Make bed available again
        const room = await Room.findById(booking.room);
        if (room) {
            const bed = room.beds.find(b => b.bedNumber === booking.bedNumber);
            if (bed) {
                bed.status = 'available';
                bed.bookedBy = null;
                await room.save();
            }
        }

        res.json(booking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;