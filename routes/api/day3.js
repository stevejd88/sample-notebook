const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Profile = require("../../models/Profiles");

// @route   PUT api/day3/robotics
// @desc   Add  day3Robotics object
// @access  Private
router.put("/robotics", auth, async (req, res) => {
  const {
    robot,
    robotFunc,
    instructions,
    common1,
    common2,
    common3
  } = req.body;

  const profileFields = {};
  const roboticsFields = {
    robot,
    robotFunc,
    instructions,
    common1,
    common2,
    common3
  };

  profileFields.day3Robotics = roboticsFields;

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/robotics/draw
// @desc   Add day3RoboticsDraw object
// @access  Private
router.put("/robotics/draw", auth, async (req, res) => {
  const { day3RoboticsDraw } = req.body;

  const profileFields = { day3RoboticsDraw };

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/energy
// @desc   Add day3Energy object
// @access  Private
router.put("/energy", auth, async (req, res) => {
  const { energyIs, heat, light, mech, electrical, sound } = req.body;

  const profileFields = {};
  const energyFields = {
    energyIs,
    heat,
    light,
    mech,
    electrical,
    sound
  };

  profileFields.day3Energy = energyFields;

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/energy
// @desc   Add day3Sound object
// @access  Private
router.put("/sound", auth, async (req, res) => {
  const { soundIs } = req.body;

  const profileFields = {};
  const soundFields = {
    soundIs
  };

  profileFields.day3Sound = soundFields;

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/mechanical
// @desc   Add day3Mechanical object
// @access  Private
router.put("/mechanical", auth, async (req, res) => {
  const { moveHow, threeWinds, sixWinds, distanceWhy } = req.body;

  const profileFields = {};
  const mechFields = {
    moveHow,
    threeWinds,
    sixWinds,
    distanceWhy
  };

  profileFields.day3Mechanical = mechFields;

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/mechanical/draw
// @desc   Add day3mechDraw object
// @access  Private
router.put("/mechanical/draw", auth, async (req, res) => {
  const { day3mechDraw } = req.body;

  const profileFields = { day3mechDraw };

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/electrical
// @desc   Add day3Electrical object
// @access  Private
router.put("/elecrtical", auth, async (req, res) => {
  const {
    energyToBulb,
    bandOffIsChecked,
    bandOnIsChecked,
    wireOffIsChecked,
    wireOnIsChecked,
    whySuccess,
    wireCI,
    RubberCI
  } = req.body;

  const profileFields = {};
  const electricalFields = {
    energyToBulb,
    bandOffIsChecked,
    bandOnIsChecked,
    wireOffIsChecked,
    wireOnIsChecked,
    whySuccess,
    wireCI,
    RubberCI
  };

  profileFields.day3Electrical = electricalFields;

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/electrical/draw
// @desc   Add day3ElectricalDraw object
// @access  Private
router.put("/electrical/draw", auth, async (req, res) => {
  const { day3ElectricalDraw } = req.body;

  const profileFields = { day3ElectricalDraw };

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/light
// @desc   Add day3Light object
// @access  Private
router.put("/light", auth, async (req, res) => {
  const {
    woodIsChecked,
    woodIsNotChecked,
    filterIsChecked,
    filterIsNotChecked,
    glassIsChecked,
    glassIsNotChecked,
    mirrorsIsChecked,
    mirrorsIsNotChecked,
    waterIsChecked,
    waterIsNotChecked,
    woodAR,
    woodChange,
    filterAR,
    filterChange,
    mirrorsAR,
    mirrorsChange,
    waterAR,
    waterChange
  } = req.body;

  const profileFields = {};
  const lightFields = {
    woodIsChecked,
    woodIsNotChecked,
    filterIsChecked,
    filterIsNotChecked,
    glassIsChecked,
    glassIsNotChecked,
    mirrorsIsChecked,
    mirrorsIsNotChecked,
    waterIsChecked,
    waterIsNotChecked,
    woodAR,
    woodChange,
    filterAR,
    filterChange,
    mirrorsAR,
    mirrorsChange,
    waterAR,
    waterChange
  };

  profileFields.day3Light = lightFields;

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/light/wood-draw
// @desc   Add day3LightWoodDraw object
// @access  Private
router.put("/light/wood-draw", auth, async (req, res) => {
  const { day3LightWoodDraw } = req.body;

  const profileFields = { day3LightWoodDraw };

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/light/filter-draw
// @desc   Add day3LightFilterDraw object
// @access  Private
router.put("/light/filter-draw", auth, async (req, res) => {
  const { day3LightFilterDraw } = req.body;

  const profileFields = { day3LightFilterDraw };

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/light/mirrors-draw
// @desc   Add day3LightMirrorsDraw object
// @access  Private
router.put("/light/mirrors-draw", auth, async (req, res) => {
  const { day3LightMirrorsDraw } = req.body;

  const profileFields = { day3LightMirrorsDraw };

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/light/water-draw
// @desc   Add day3LightWaterDraw object
// @access  Private
router.put("/light/water-draw", auth, async (req, res) => {
  const { day3LightWaterDraw } = req.body;

  const profileFields = { day3LightWaterDraw };

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/electrical
// @desc   Add day3Electrical object
// @access  Private
router.put("/elecrtical", auth, async (req, res) => {
  const {
    energyToBulb,
    bandOffIsChecked,
    bandOnIsChecked,
    wireOffIsChecked,
    wireOnIsChecked,
    whySuccess,
    wireCI,
    RubberCI
  } = req.body;

  const profileFields = {};
  const electricalFields = {
    energyToBulb,
    bandOffIsChecked,
    bandOnIsChecked,
    wireOffIsChecked,
    wireOnIsChecked,
    whySuccess,
    wireCI,
    RubberCI
  };

  profileFields.day3Electrical = electricalFields;

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/matter
// @desc   Add day3Thermal object
// @access  Private
router.put("/thermal", auth, async (req, res) => {
  const {
    preColorRoom,
    preColorCold,
    preColorWarm,
    ColorRoomTxt,
    ColorColdTxt,
    ColorWarmTxt
  } = req.body;

  const profileFields = {};
  const thermalFields = {
    preColorRoom,
    preColorCold,
    preColorWarm,
    ColorRoomTxt,
    ColorColdTxt,
    ColorWarmTxt
  };

  profileFields.day3Thermal = thermalFields;

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/themal/room-draw
// @desc   Add day3HeatRoomDraw object
// @access  Private
router.put("/themal/room-draw", auth, async (req, res) => {
  const { day3HeatRoomDraw } = req.body;

  const profileFields = { day3HeatRoomDraw };

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/themal/cold-draw
// @desc   Add day3HeatColdDraw object
// @access  Private
router.put("/themal/cold-draw", auth, async (req, res) => {
  const { day3HeatColdDraw } = req.body;

  const profileFields = { day3HeatColdDraw };

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/themal/warm-draw
// @desc   Add day3HeatWarmDraw object
// @access  Private
router.put("/themal/warm-draw", auth, async (req, res) => {
  const { day3HeatWarmDraw } = req.body;

  const profileFields = { day3HeatWarmDraw };

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/day3/matter
// @desc   Add day3Matter object
// @access  Private
router.put("/matter", auth, async (req, res) => {
  const { matter, atomBond, sameAtoms, difAtoms } = req.body;

  const profileFields = {};
  const matterFields = {
    matter,
    atomBond,
    sameAtoms,
    difAtoms
  };

  profileFields.day3Matter = matterFields;

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
