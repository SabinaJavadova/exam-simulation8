const goodModel = require("../model/index");

const getAllData = async (req, res) => {
  try {
    const getdata = await goodModel.find();
    if (!getdata) {
      res.status(404).json({ message: "data not found!" });
    }
    res.status(200).json(getdata);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getAllDataByIy = async (req, res) => {
  const id = req.params.id;
  try {
    const getdataById = await goodModel.findById(id);
    if (!getdataById) {
      res.status(404).json({ message: "data not found!" });
    }
    res.status(200).json(getdataById);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const deleteData = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await goodModel.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: "data not found!" });
    }
    res.status(200).json({ message: "deleted!", deleted: deleted });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const postData = async (req, res) => {
  try {
    const created = goodModel({ ...req.body });
    await created.save();
    if (!created) {
      res.status(404).json({ message: "data not found!" });
    }
    res.status(200).json({ message: "created!", created: created });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllData,
  getAllDataByIy,
  deleteData,
  postData,
};
