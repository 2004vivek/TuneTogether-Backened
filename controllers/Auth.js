const upload = require("../controllers/uploadMiddleware");
const User=require('../models/user')
exports.Signup = async (req, res) => {
    console.log("hjfdkjkmx")
  
  try {
    upload(req, res, async (err) => {
    
      if (err) {
        return res
          .status(500)
          .json({ message: "File upload error", error: err });
      }

      if (!req.image) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const {email,password,cpassword,languages,username}=req.body

      const image= req.image ? req.image.path : null;
      console.log("this is image url",image)
            
            if (!email || !password || !cpassword || !username) {
                return res.status(400).json({ error: 'All fields are required.' });
            }

            if (password !== cpassword) {
                return res.status(400).json({ error: 'Passwords do not match.' });
            }

            // Save user to the database
            const user = new User({
                username,
                email,
                password,
                languages: languages ? languages.split(',') : [],
                image,
            });

            await user.save();

            res.status(201).json({ message: 'User registered successfully!', user });

    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error.message})
  }
};
