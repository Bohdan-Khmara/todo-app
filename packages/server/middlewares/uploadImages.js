const multer = require('multer');
const path = require('path');

const imagesDestination = path.join(process.env.STATIC_CONTENT_PATH, '/images');
const imageMimetypeRegExp = /image\/(?:a?png|bmp|x-icon|jpeg||svg\+xml|tiff|webp)/;

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(imagesDestination);
    },
    filename: (req, file, callback) => {
      callback(`${Date.now()}_${file.originalname.replace(/\s+/, '_')}`);
    },
  }),
  fileFilter: (req, file, callback) => {
    callback(imageMimetypeRegExp.test(file.mimetype));
  },
});

module.exports = upload;
