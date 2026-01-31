const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    hostel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hostel',
        required: true
    },
    roomNumber: {
        type: String,
        required: true
    },
    floorNumber: {
        type: Number,
        required: true
    },
    roomType: {
        type: String,
        enum: ['single', 'double', 'dormitory', 'suite'],
        default: 'dormitory'
    },
    capacity: {
        type: Number,
        required: true,
        min: 1
    },
    pricePerBed: {
        type: Number,
        required: true,
        min: 0
    },
    beds: [{
        bedNumber: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['available', 'booked', 'maintenance'],
            default: 'available'
        },
        bookedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    amenities: [{
        type: String
    }],
    isAvailable: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Room', roomSchema);