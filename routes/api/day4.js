const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Profile = require("../../models/Profiles");

// @route   PUT api/day4/pop
// @desc   Add  day4Pop object
// @access  Private
router.put("/pop", auth, async (req, res) => {
  const { popJob, popChemist, popEngineer, popMath1, popMath2 } = req.body;

  const profileFields = {};
  const popFields = {
    popJob,
    popChemist,
    popEngineer,
    popMath1,
    popMath2
  };

  profileFields.day4Pop = popFields;

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

// @route   PUT api/day4/pop-data
// @desc   Add  day4PopData object
// @access  Private
router.put("/pop-data", auth, async (req, res) => {
  const {
    popHypothesis,
    teamA1,
    teamA2,
    teamA3,
    teamAMean,
    teamB1,
    teamB2,
    teamB3,
    teamBMean
  } = req.body;

  const profileFields = {};
  const popDataFields = {
    popHypothesis,
    teamA1,
    teamA2,
    teamA3,
    teamAMean,
    teamB1,
    teamB2,
    teamB3,
    teamBMean
  };

  profileFields.day4PopData = popDataFields;

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

// @route   PUT api/day4/pop-results
// @desc   Add  day4PopResults object
// @access  Private
router.put("/pop-results", auth, async (req, res) => {
  const {
    popBanneker,
    popEasley,
    popDouglas,
    popKrafft,
    popMerian,
    popMirz,
    popMolina,
    popWu,
    popMean1,
    popMean2,
    popConclusion
  } = req.body;

  const profileFields = {};
  const popResultsFields = {
    popBanneker,
    popEasley,
    popDouglas,
    popKrafft,
    popMerian,
    popMirz,
    popMolina,
    popWu,
    popMean1,
    popMean2,
    popConclusion
  };

  profileFields.day4PopResults = popResultsFields;

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

// @route   PUT api/day4/pop/draw
// @desc   Add day4PopDraw object
// @access  Private
router.put("/pop/draw", auth, async (req, res) => {
  const { day4PopDraw } = req.body;

  const profileFields = { day4PopDraw };

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

// @route   PUT api/day4/fom
// @desc   Add  day4Phases object
// @access  Private
router.put("/fom", auth, async (req, res) => {
  const { plasma, gas, liquid, solid, heat, kinetic, emitsLight } = req.body;

  const profileFields = {};
  const phasesFields = {
    plasma,
    gas,
    liquid,
    solid,
    heat,
    kinetic,
    emitsLight
  };

  profileFields.day4Phases = phasesFields;

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

// @route   PUT api/day4/solubility
// @desc   Add  day4Solubility object
// @access  Private
router.put("/solubility", auth, async (req, res) => {
  const {
    bank1,
    bank2,
    bank3,
    bank4,
    corn1,
    corn2,
    corn3,
    corn4,
    oil1,
    oil2,
    oil3,
    kool
  } = req.body;

  const profileFields = {};
  const solubilityFields = {
    bank1,
    bank2,
    bank3,
    bank4,
    corn1,
    corn2,
    corn3,
    corn4,
    oil1,
    oil2,
    oil3,
    kool
  };

  profileFields.day4Solubility = solubilityFields;

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

// @route   PUT api/day4/chromatography
// @desc   Add  day4Chroma object
// @access  Private
router.put("/chromatography", auth, async (req, res) => {
  const {
    solvent,
    solute,
    paper,
    crayola,
    lePlume,
    visAVis,
    sketch,
    whoNote,
    suspectMarker,
    guilty,
    pigmentSoluble,
    pigmentLeast
  } = req.body;

  const profileFields = {};
  const chromaFields = {
    solvent,
    solute,
    paper,
    crayola,
    lePlume,
    visAVis,
    sketch,
    whoNote,
    suspectMarker,
    guilty,
    pigmentSoluble,
    pigmentLeast
  };

  profileFields.day4Chroma = chromaFields;

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

// @route   PUT api/day4/kinetic
// @desc   Add  day4Kinetic object
// @access  Private
router.put("/kinetic", auth, async (req, res) => {
  const { oneSOM, twoSOM, threeSOM, matterChange } = req.body;

  const profileFields = {};
  const kineticFields = {
    oneSOM,
    twoSOM,
    threeSOM,
    matterChange
  };

  profileFields.day4Kinetic = kineticFields;

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

// @route   PUT api/day4/kin-solid/draw
// @desc   Add day4oneSOMPic object
// @access  Private
router.put("/kin-solid/draw", auth, async (req, res) => {
  const { day4oneSOMPic } = req.body;

  const profileFields = { day4oneSOMPic };

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

// @route   PUT api/day4/kin-liquid/draw
// @desc   Add day4twoSOMPic object
// @access  Private
router.put("/kin-liquid/draw", auth, async (req, res) => {
  const { day4twoSOMPic } = req.body;

  const profileFields = { day4twoSOMPic };

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

// @route   PUT api/day4/kin-gas/draw
// @desc   Add day4threeSOMPic object
// @access  Private
router.put("/kin-gas/draw", auth, async (req, res) => {
  const { day4threeSOMPic } = req.body;

  const profileFields = { day4threeSOMPic };

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
