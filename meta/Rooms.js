const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    total_rooms: {
        type: Number
    },
    room_link: {
        type: [String ]
    },
    room_photo: {
        type: [String]
    }
});

module.exports = mongoose.model("Rooms", roomSchema )