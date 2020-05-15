const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    total_rooms: {
        type: Number
    },
    room_link: {
        type: [String],
        required: true,
    },
    room_photo: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model("Rooms", roomSchema )