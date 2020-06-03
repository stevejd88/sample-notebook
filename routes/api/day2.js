const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Profile = require("../../models/Profiles");

// @route   PUT api/day2/launch/mass
// @desc   Add day2Mass object
// @access  Private
router.put("/launch/mass", auth, async (req, res) => {
  const {
    longerIsChecked,
    mass1eraser,
    mass2eraser,
    mass3eraser,
    distance1eraser,
    distance2eraser,
    distance3eraser
  } = req.body;

  const profileFields = {};
  const launcMassFields = {
    longerIsChecked,
    mass1eraser,
    mass2eraser,
    mass3eraser,
    distance1eraser,
    distance2eraser,
    distance3eraser
  };

  profileFields.day2Mass = launcMassFields;

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

// @route   PUT api/day2/launch/mass/graph
// @desc   Add day2MassLaunch object
// @access  Private
router.put("/launch/mass/graph", auth, async (req, res) => {
  const {
    massIndependent,
    massDependent,
    massConstant,
    massConclusion,
    massThoughts
  } = req.body;

  const profileFields = {};
  const launcMassDataFields = {
    massIndependent,
    massDependent,
    massConstant,
    massConclusion,
    massThoughts
  };

  profileFields.day2MassLaunch = launcMassDataFields;

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

// @route   PUT api/day2/launch/mass/graph/rocket
// @desc   Add day2MassLaunch object
// @access  Private
router.put("/launch/mass/graph/rocket", auth, async (req, res) => {
  const { day2MassRocket } = req.body;

  const profileFields = { day2MassRocket };

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

// @route   PUT api/day2/launch/displacement
// @desc   Add day2Displacement object
// @access  Private
router.put("/launch/displacement", auth, async (req, res) => {
  const {
    longerIsChecked,
    mass1,
    mass2,
    mass3,
    distance1,
    distance2,
    distance3
  } = req.body;

  const profileFields = {};
  const launchDisplacementFields = {
    longerIsChecked,
    mass1,
    mass2,
    mass3,
    distance1,
    distance2,
    distance3
  };

  profileFields.day2Displacement = launchDisplacementFields;

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

// @route   PUT api/day2/launch/displacement/graph
// @desc   Add day2DisplacementLaunch object
// @access  Private
router.put("/launch/displacement/graph", auth, async (req, res) => {
  const {
    disIndependent,
    disDependent,
    disConstant,
    displacementConclusion,
    displacementThoughts
  } = req.body;

  const profileFields = {};
  const launchDisDataFields = {
    disIndependent,
    disDependent,
    disConstant,
    displacementConclusion,
    displacementThoughts
  };

  profileFields.day2DisplacementLaunch = launchDisDataFields;

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

// @route   PUT api/day2/launch/displacement/graph/rocket
// @desc   Add day2MassLaunch object
// @access  Private
router.put("/launch/displacement/graph/rocket", auth, async (req, res) => {
  const { day2DisRocket } = req.body;

  const profileFields = { day2DisRocket };

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

// @route   PUT api/day2/newtons1
// @desc   Add day2NewtonsLaw1 object
// @access  Private
router.put("/newtons1", auth, async (req, res) => {
  const { day2NewtonsLaw1 } = req.body;

  const profileFields = { day2NewtonsLaw1 };

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

// @route   PUT api/day2/newtons2
// @desc   Add day2NewtonsLaw2 object
// @access  Private
router.put("/newtons2", auth, async (req, res) => {
  const { day2NewtonsLaw2 } = req.body;

  const profileFields = { day2NewtonsLaw2 };

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

// @route   PUT api/day2/newtons3
// @desc   Add day2NewtonsLaw3 object
// @access  Private
router.put("/newtons3", auth, async (req, res) => {
  const { day2NewtonsLaw3 } = req.body;

  const profileFields = { day2NewtonsLaw3 };

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

// @route   PUT api/day2/newtonsAR
// @desc   Add day2NewtonsAR object
// @access  Private
router.put("/newtonsAR", auth, async (req, res) => {
  const { action, reaction } = req.body;

  const profileFields = {};
  const newtonsARFields = {
    action,
    reaction
  };

  profileFields.day2NewtonsAR = newtonsARFields;

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

// @route   PUT api/day2/littleCircuit
// @desc   Add day2LittleCircuit object
// @access  Private
router.put("/littleCircuit", auth, async (req, res) => {
  const { day2LittleCircuit } = req.body;

  const profileFields = { day2LittleCircuit };

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

// @route   PUT api/day2/littleChallenge
// @desc   Add day2LittleChal object
// @access  Private
router.put("/littleChallenge", auth, async (req, res) => {
  const {
    problem,
    product,
    solve,
    probPresenter,
    soluPresenter,
    demonstrators
  } = req.body;

  const profileFields = {};
  const littleChallengeFields = {
    problem,
    product,
    solve,
    probPresenter,
    soluPresenter,
    demonstrators
  };

  profileFields.day2LittleChal = littleChallengeFields;

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

// @route   PUT api/day2/littleDraw
// @desc   Add day2LittleDraw object
// @access  Private
router.put("/littleDraw", auth, async (req, res) => {
  const { day2LittleDraw } = req.body;

  const profileFields = { day2LittleDraw };

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
