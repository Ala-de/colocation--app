const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,"public/images");
    },
    filename: function (req, file, cb) {
        var ext = file.originalname.substring(file.originalname.lastIndexOf("."));
        cb(null, file.filename + "-" + Date.now() + ext);
    },
});
const store = multer({ storage: storage });
module.exports = store.single("image");