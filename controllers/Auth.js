const upload = require("../controllers/uploadMiddleware");
const User=require('../models/user')


exports.Signup = async (req, res) => {
    console.log("Inside Signup Route"); 
  
    try {
      const { email, password, confirmpassword, languages, username } = req.body;
  
      if (!email || !password || !confirmpassword || !username) {
        return res.status(400).json({ error: 'All fields are required.' });
      }
  
      if (password !== confirmpassword) {
        return res.status(400).json({ error: 'Passwords do not match.' });
      }
  
      // Handle file upload
      let image = null;
      if (req.file) {
        image = req.file.path; // Save the path of the uploaded file
        console.log("This is image url:", image);
      }
  
      // Save user to the database
      const user = new User({
        email,
        password,
        username,
        languages: (languages), // Parse the languages if sent as a JSON string
        image, // Store the uploaded image path if available
      });
  
      await user.save();
  
      res.status(201).json({ message: 'User registered successfully!', user });
  
    } catch (error) {
      console.log("Error occurred:", error.message);
      res.status(500).json({ message: "Error occurred", error: error.message });
    }
  };


// exports.Signup = async (req, res) => {
//     console.log("hjfdkjkmx")
  
//   try {
//     // upload(req, res, async (err) => {
    
//     //   if (err) {
//     //     return res
//     //       .status(500)
//     //       .json({ message: "File upload error", error: err });
//     //   }

//     //   if (!req.image) {
//     //     return res.status(400).json({ message: "No file uploaded" });
//     //   }

//       const {email,password,confirmpassword,languages,username}=req.body

//     //   const image= req.image ? req.image.path : null;
//     //   console.log("this is image url",image)
            
//             if (!email || !password || !confirmpassword|| !username ) {
//                 return res.status(400).json({ error: 'All fields are required.' });
//             }

//             if (password !== confirmpassword) {
//                 return res.status(400).json({ error: 'Passwords do not match.' });
//             }

//             // Save user to the database
//             const user = new User({
//                 email,
//                 password,
//                 username,
//                 languages: (languages),
               
//             });

//             await user.save();

//             res.status(201).json({ message: 'User registered successfully!', user });

//     // });
//   } catch (error) {
//     console.log("error occured",error.message);
//     res.status(500).json({message:"error occured",error:error.message})
//   }
// };
