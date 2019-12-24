const Developer = require("../models/Developer");

module.exports = {
  async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Developer.findById(user);
    const targetDev = await Developer.findById(devId);

    if (!targetDev) {
      return res.status(400).json({ error: "Developer does not exists!" });
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      console.log("MATCH! <3");
    }

    loggedDev.likes.push(targetDev._id);
    await loggedDev.save();

    return res.json(loggedDev);
  }
};
