const mongoose= require('mongoose');
const db= process.env.DATABASE;

//DB connection
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then( () =>{
    console.log(`DB connection succ....`);
}).catch( () =>{
        console.log(`DB no connection...`);
})