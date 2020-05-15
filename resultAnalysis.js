const data = require('./data');
const { mongoURI } = data;

const mongoose = require('mongoose');
mongoose
.connect(mongoURI, {useNewUrlParser: true})
.then(()=> console.log("Mongoose ti wa honlyn!"))
.catch(err => console.log(err))

const compareAndSaveResults = dataObj => {
    try {
        const Rooms = require('./Rooms')

        const newRooms = new Rooms(dataObj);
        return newRooms.save().catch(err=>console.error(err))
    } catch (err){
        console.error(err);
    }
};

module.exports = compareAndSaveResults