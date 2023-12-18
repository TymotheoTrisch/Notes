let express = require("express");
let registerUser = require("../public/models/user.js");

const router = express.Router();

// router.get("/", getUsers);

router.post("/", registerUser);

// router.put("/:id", updateUser)

// router.delete("/:id", deleteUser)

module.exports = router;