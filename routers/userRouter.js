const express = require ("express");
const router = express.Router();
const {createUser, getoneUser, getallUsers, updateUser, deleteUser} = require("../controller/useRcontroller");



router.post("/createuser", createUser);
router.get("/getallusers", getallUsers);
router.get("/getoneuser/:id", getoneUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);


module.exports = router;