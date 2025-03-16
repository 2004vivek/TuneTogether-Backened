const cloudinary = require("cloudinary").v2;

const uploadingimagetocloudinary = async (file, folder, quality) => {
    try {
        const options = { folder };

        if (quality) {
            options.quality = quality;
        }

        // Validate that Base64 data exists
        if (!file.base64) {
            throw new Error("Invalid file format. Expected Base64 string.");
        }

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(`data:image/jpeg;base64,${file.base64}`, options);
        return result.secure_url; 

    } catch (error) {
        console.error("Cloudinary Upload Error:", error.message);
        throw new Error("Failed to upload image to Cloudinary.");
    }
};

exports.uploadingimagetocloudinary = uploadingimagetocloudinary;
