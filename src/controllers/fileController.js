const express = require('express');
const router = express.Router();
const { Storage } = require('@google-cloud/storage');
const storage = require('../config/cloudStorage');

router.post('/upload', async (req, res) => {
    try {
        const file = req.body.file;
        const bucketName = 'DefaultBucketName';
        const filename = 'default.txt';

        await storage.bucket(ImportantFiles).upload(file, {
            destination: filename,
        });
        res.send('File uploaded successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
