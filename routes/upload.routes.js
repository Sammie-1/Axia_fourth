const express = require('express');
const multer = require('multer');
const { storage } = require('../utils/cloudinary');
const {
  uploadSingle,
  uploadMultiple,
  uploadFields,
} = require('../controllers/upload.controller');

const router = express.Router();
const upload = multer({ storage });

router.post('/upload/single', upload.single('file'), uploadSingle);
router.post('/upload/multiple', upload.array('files', 10), uploadMultiple);
router.post(
  '/upload/fields',
  upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'gallery', maxCount: 5 },
  ]),
  uploadFields
);

module.exports = router;
