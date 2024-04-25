const mongoose =require('mongoose')
mongoose.connect("mongodb+srv://PRAT:rat@cluster0.2buaiuq.mongodb.net/lol?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
})
.catch((error)=>{
    console.log(error)
})