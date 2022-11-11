const express = require('express');
const router  = express.Router();


// include CLOUDINARY:
const uploader = require('../config/cloudinary.config');

router.post('/upload', uploader.single("image"), (req, res, next) => {
     console.log('file is: ', req.file)
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
    return res.json({imageUrl: req.file.path})
})

module.exports = router;