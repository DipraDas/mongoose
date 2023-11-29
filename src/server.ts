import mongoose from 'mongoose';
import app from './app';

const port: number = 5300

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practise');
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
    catch (err) {
        console.log('Errror here', err)
    }
}

main();
