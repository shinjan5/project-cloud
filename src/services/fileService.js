const { Storage } = require('@google-cloud/storage');
const storage = require('../config/cloudStorage');

        const bucketName = 'DefaultBucketName';
        async function uploadFile( filename, file) {
    try {
        await storage.bucket(bucketName).upload(file, {
            destination: filename,
        });
        return 'File uploaded successfully';
    } catch (err) {
        throw err;
    }
}

module.exports = { uploadFile };
