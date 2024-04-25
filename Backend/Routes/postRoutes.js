const express = require('express');
const router=express.Router();
const post = require('../model/post');
const postModel = require('../model/post');


router.use(express.json())
router.post('/addblog',async(req,res)=>{
    const blog =req.body;
    try{
        const data = await post(req.body).save();
        res.status(200).json({message:"blog added",blog})
    
    }catch (error){
        console.log(error);
        res.json({message:"unable to add blog"})
    }
})
// to view all blog
router.get('/viewall',async(req,res)=>{
    try{
        const data =await post.find();
        res.status(200).json(data)

    }catch(error){
        console.log(error)

    }
})

//
router.delete('/remove/:id',async(req,res)=>{
    try{
        const data =await postModel.findByIdAndDelete(req.params.id);
        res.status(200).send({message:"Blog deleted"})

    }catch(error){
        res.status(404).send({message:"Blog not found"});
       
    }

})
// UPDATE
// router.put('/edit/:id'),async(req,res)=>{
//     try{
//         var userid=req.params.id;
//         var item =req.body;
//         const data =await postModel.findByIdAndUpdate(userid,item)
//         res.status(200).send({message:"blog updated successfully"})

//     }catch(error){
   
//        console.log((error))
//     }
// }

router.put('/edit/:id', async (req, res) => {
    try {
        var userid = req.params.id;
        var item = req.body;
        const data = await postModel.findByIdAndUpdate(userid, item);
        if (!data) {
            return res.status(404).send({ message: "Blog not found" });
        }
        res.status(200).send({ message: "Blog updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error" });
    }
});





module.exports= router;