import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const fileUploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const resource = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("Content of file are:", resource.url);

    return resource;
  } catch (error) {
    if (localFilePath && fs.existsSync(localFilePath)) {
      try {
        fs.unlinkSync(localFilePath);
      } catch (e) {
        console.warn("Failed to remove local file:", e);
      }
    }
    console.log("File Upload Error!!!!", error);
    return null;
  }
};

export { fileUploadCloudinary };
