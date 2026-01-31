const express = require('express');
const router = express.Router();
const Hostel = require('../models/Hostel');
const Room = require('../models/room');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

// Get all hostels
router.get('/', async (req, res) => {
    try {
        const hostels = await Hostel.find().populate('rooms');
        res.json(hostels);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get single hostel
router.get('/:id', async (req, res) => {
    try {
        const hostel = await Hostel.findById(req.params.id).populate('rooms');
        if (!hostel) {
            return res.status(404).json({ message: 'Hostel not found' });
        }
        res.json(hostel);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create hostel (Admin only)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const hostel = new Hostel(req.body);
        await hostel.save();
        res.status(201).json(hostel);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update hostel (Admin only)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const hostel = await Hostel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!hostel) {
            return res.status(404).json({ message: 'Hostel not found' });
        }
        res.json(hostel);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get rooms for a hostel
router.get('/:id/rooms', async (req, res) => {
    try {
        const rooms = await Room.find({ hostel: req.params.id });
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Add room to hostel (Admin only)
router.post('/:id/rooms', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const hostel = await Hostel.findById(req.params.id);
        if (!hostel) {
            return res.status(404).json({ message: 'Hostel not found' });
        }

        const room = new Room({
            ...req.body,
            hostel: req.params.id
        });

        await room.save();
        
        // Add room to hostel
        hostel.rooms.push(room._id);
        await hostel.save();

        res.status(201).json(room);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;