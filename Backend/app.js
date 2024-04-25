const express =require('express');
const morgon=require('morgan');
const cors =require('cors');
PORT =3008;
require('./db/connection')
const userRoutes =require('./Routes/userRoute')
const postRoutes =require('./Routes/postRoutes')
const app = express();
app.use(morgon('dev'));
app.use(cors());
app.use('/api',userRoutes)
app.use('/api',postRoutes)




app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
})