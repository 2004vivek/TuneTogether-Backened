const {uploadingimagetocloudinary}=require('../utils/imageuploader')
exports.Signup=async(req,res)=>{
    try {
        const {email,password,cpassword,languages,images,username}=req.body;
       
        console.log(req.body)
        const formDataArray = req.body.formData._parts;
        const imageObject = formDataArray.find(item => item[0] === 'image')?.[1];
        
        console.log(imageObject);

        const imageurl=await uploadingimagetocloudinary(imageObject,"TuneTogether")
        console.log(imageurl)
       

       
    } catch (error) {
        console.log(error)
    }
}
