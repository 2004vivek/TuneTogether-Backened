const multer=require('multer')
const path=require('path')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const filefilter=(req,file,cb)=>{
    const filetype=/jpg|png|jpeg/
    const value=filetype.test(path.extname(file.originalname))
    if(value){
        cb(null,true)

    }
    else{
        cb("please upload the correct format")
    }
}
const upload=multer({
    storage:storage,
    fileFilter:filefilter,
    limits:{
        fileSize:1000000
    }
})
// const fileupload = async (req, res) => {
//     upload(req, res, async (err) => {
//         if (err) {
//             return res.status(500).json({ message: "File upload error", error: err });
//         }
//         if (!req.file) {
//             return res.status(400).json({ message: "No file uploaded" });
//         }

//         try {
//             console.log("Uploaded File:", req.file.filename);
//             const fileUrl = `http://localhost:5000/${req.file.filename}`;

//             // Save to MongoDB
//             const newUser = await user.create({ imageurl:fileUrl });
            
//             return res.status(200).json({
//                 message: "Image uploaded successfully", 
//                 fileUrl: newUser.fileUrl
//             });
//         } catch (error) {
//             console.error("Database Error:", error);
//             return res.status(500).json({ message: "Database error", error: error.message });
//         }
//     });
// };

module.exports=upload