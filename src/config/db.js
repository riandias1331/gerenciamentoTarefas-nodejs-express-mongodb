const mongoose = require('mongoose')

const connectDB = (app) => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Connected to database')
            app.emit('Database')
        })
        .catch((e) => console.log(e))
}

module.exports = connectDB