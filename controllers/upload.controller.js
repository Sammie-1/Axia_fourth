const uploadSingle = async (req, res) => {
  try {
    return res.status(200).json({ file: req.file });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const uploadMultiple = async (req, res) => {
  try {
    return res.status(200).json({ files: req.files });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const uploadFields = async (req, res) => {
  try {
    return res.status(200).json({
      avatar: req.files.avatar,
      gallery: req.files.gallery,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { uploadSingle, uploadMultiple, uploadFields };
