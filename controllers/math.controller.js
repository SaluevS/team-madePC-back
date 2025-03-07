const Math = require("../models/Math.model");

module.exports.math = {
  getMath: async (req, res) => {
    const data = await Math.find().populate(
      "ram videocard hardcard ssd processor frame"
    );
    res.json(data);
  },
  addMath: async (req, res) => {
    const {
      name,
      type,
      ram,
      currentRam,
      videocard,
      hardCard,
      currentHardCard,
      ssd,
      currentSsd,
      processor,
      frame,
    } = req.body;
    const data = await Math.create({
      name,
      type,
      ram,
      currentRam,
      videocard,
      hardCard,
      currentHardCard,
      ssd,
      currentSsd,
      processor,
      frame,
    });
    const result = await data.populate(
      "ram videocard hardcard ssd processor frame"
    );
    res.json(result);
  },
  updateMath: async (req, res) => {
    const {
      name,
      type,
      ram,
      currentRam,
      videocard,
      hardCard,
      currentHardCard,
      ssd,
      currentSsd,
      processor,
      frame,
    } = req.body;
    const data = await Math.findByIdAndUpdate(req.params.id, {
      name,
      type,
      ram,
      currentRam,
      videocard,
      hardCard,
      currentHardCard,
      ssd,
      currentSsd,
      processor,
      frame,
    });
    res.json(data);
  },
  deleteMath: async (req, res) => {
    const data = await Math.findByIdAndDelete(req.params.id);
    res.json(data);
  },
};
