const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 5300

async function main() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practise');
    }
    catch (err) {
        console.log('Errror here', err)
    }
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})