const crypto = require('crypto');

function encryptFile(file) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', 'your-secret-key', iv);
    const encrypted = Buffer.concat([cipher.update(file), cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

module.exports = { encryptFile };
