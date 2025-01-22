const express = require("express")

const { getAllData, getAllDataByIy, deleteData, postData }= require ("../controller/index")

const router = express.Router();

router.get("/",getAllData)
router.get("/:id",getAllDataByIy)
router.delete("/:id",deleteData)
router.post("/",postData)

module.exports = router;