const { Storage } = require('@google-cloud/storage');
const storage = new Storage({
    projectId: 'avian-axis-452917-a1',
    keyFilename: 'C:\Users\USER\Downloads\avian-axis-452917-a1-29d0c6c05b68.json',
});

module.exports = storage;
