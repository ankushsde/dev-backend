const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://ankushs5252:BLNS6Hywkbm7D9nU@cluster0.jmnmdss.mongodb.net/swapMate"
    );
}
module.exports = connectDB;


