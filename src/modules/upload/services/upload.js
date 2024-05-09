
// import { upload } from "../db/index.js";
import { v2 as cloudinary } from 'cloudinary';
import ENV from "../../../constants/index.js"
import fsExtra from 'fs-extra';


cloudinary.config({
    cloud_name:ENV.CLOUD_NAME, 
    api_key:ENV.API_KEY, 
    api_secret: ENV.API_SECRET
});


const uploadFile = async (file) => {
    return new Promise((resolve, reject) => {
        const filepath = `src/modules/upload/files/${file.filename}`;
        sharp(filepath)
        .jpeg({quality : 40 })
        .toFile(`resize-${filepath}`, async(err, info)=> {

        })
                cloudinary.uploader.upload(filepath,
                    { 
                        folder:"store_images",
                        public_id:file.filename
                    },
                    function (error , result) { 
                        if(error){
                            reject(error)
                            return;
                        }
                        fsExtra.removeSync(filepath)
                            resolve(result)  
                    });
    });




}

export default uploadFile;