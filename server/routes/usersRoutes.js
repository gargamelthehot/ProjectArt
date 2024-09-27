const express = require("express");
const router = express.Router();

const User = require("../models/User");

//הרשמת משתמש
router.post("/register", async (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    let user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).send({ error: "User already exists" });
    }
    user = new User({
      firstName,
      lastName,
      email,
    });

    await user.save();
    res.status(200).send({ user:user, message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});

router.post("/login", async (req, res) => {
  const { email } = req.body;

  try {
    let user = await User.findOne({ email : email });
    if (!user) {
      return res.status(400).send({ error: "User does not exist" });
    }

    res.status(200).send({ user: user });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});


router.put("/update/:id", async (req, res) => {
    const id = req.params.id;
    const update = req.body;

    try {
    const user = await User.findByIdAndUpdate(id, update);
    if (!user) {
      return res.status(404).send({ error: "User does not exist" });
    }

    return res.status(200).send({
      message: "User updated successfully",
      user: { id: user._id, firstName: user.firstName,lastName:user.lastName, email: user.email },
    });

  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});


router.delete("/delete/:id", async (req, res) => {
    const id = req.param.id;
  try {
    const user = await User.findByIdAndDelete(id);
    if(!user)
        return res.status(404).send({ error: "User does not exist" });

    res.status(200).send({ message: "User deleted successfully", user: user });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Something went wrong" });
  }
});

module.exports = router;