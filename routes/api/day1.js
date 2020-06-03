const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Profile = require("../../models/Profiles");

// @route   PUT api/day1/obq/define
// @desc   Add day1 define object
// @access  Private
router.put("/obq/define", auth, async (req, res) => {
  const { location, problem, mission } = req.body;

  const profileFields = {};
  const definefields = { location, problem, mission };

  profileFields.day1Def = definefields;

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

// @route   PUT api/day1/obq/edp
// @desc   Add day1DesignProcess object
// @access  Private
router.put("/obq/edp", auth, async (req, res) => {
  const { step1, step2, step3, step4, step5, step6, step7, step8 } = req.body;

  const profileFields = {};
  const edpfields = { step1, step2, step3, step4, step5, step6, step7, step8 };

  profileFields.day1DesignProcess = edpfields;

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

// @route   PUT api/day1/obq/figure-that
// @desc   Add day1FigureThat object
// @access  Private
router.put("/obq/figure-that", auth, async (req, res) => {
  const {
    fractionA,
    percentA,
    decimalA,
    fractionB,
    percentB,
    decimalB,
    fractionC,
    percentC,
    decimalC,
    fractionD,
    percentD,
    decimalD,
    eliminateCompany,
    companyToSelect,
    solveProblem
  } = req.body;

  const profileFields = {};
  const figurefields = {
    fractionA,
    percentA,
    decimalA,
    fractionB,
    percentB,
    decimalB,
    fractionC,
    percentC,
    decimalC,
    fractionD,
    percentD,
    decimalD,
    eliminateCompany,
    companyToSelect,
    solveProblem
  };

  profileFields.day1FigureThat = figurefields;

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

// @route   PUT api/day1/obq/research
// @desc   Add day1Rsrch object
// @access  Private
router.put("/obq/research", auth, async (req, res) => {
  const {
    bSpan,
    bLoad,
    bTime,
    bTemp,
    sSpan,
    sLoad,
    sTime,
    sTemp,
    aSpan,
    aLoad,
    aTime,
    aTemp,
    fSpan,
    fLoad,
    fTime,
    fTemp
  } = req.body;

  const profileFields = {};
  const researchfields = {
    bSpan,
    bLoad,
    bTime,
    bTemp,
    sSpan,
    sLoad,
    sTime,
    sTemp,
    aSpan,
    aLoad,
    aTime,
    aTemp,
    fSpan,
    fLoad,
    fTime,
    fTemp
  };

  profileFields.day1Rsrch = researchfields;

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

// @route   PUT api/day1/obq/dev-choose
// @desc   Add day1 define object
// @access  Private
router.put("/obq/dev-choose", auth, async (req, res) => {
  const {
    beamIsChecked,
    suspensionIsChecked,
    archIsChecked,
    floatingIsChecked,
    bridge,
    whyThis
  } = req.body;

  const profileFields = {};
  const devfields = {
    beamIsChecked,
    suspensionIsChecked,
    archIsChecked,
    floatingIsChecked
  };
  const solutionfields = { bridge, whyThis };

  profileFields.day1Dev = devfields;
  profileFields.day1Solution = solutionfields;

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

// @route   PUT api/day1/obq/prototype
// @desc   Add day1Prototype object
// @access  Private
router.put("/obq/prototype", auth, async (req, res) => {
  const { day1Prototype } = req.body;

  const profileFields = { day1Prototype };

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

// @route   PUT api/day1/obq/test-eval
// @desc   Add day1 define object
// @access  Private
router.put("/obq/test-eval", auth, async (req, res) => {
  const {
    parallelIsChecked,
    clearedIsChecked,
    supportsIsChecked,
    successIsChecked,
    successExplain
  } = req.body;

  const profileFields = {};
  const testfields = {
    parallelIsChecked,
    clearedIsChecked,
    supportsIsChecked,
    successIsChecked,
    successExplain
  };

  profileFields.day1Tsteval = testfields;

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

// @route   PUT api/day1/obq/comm-redesign
// @desc   Add day1 comm and redesign objects
// @access  Private
router.put("/obq/comm-redesign", auth, async (req, res) => {
  const { success, criteria, notMet, one, two, think } = req.body;

  const profileFields = {};
  const commfields = { success, criteria, notMet };
  // BUILD REDESIGN OBJECT
  profileFields.day1Redesign = {};
  profileFields.day1Redesign.improve = {};

  if (one) profileFields.day1Redesign.improve.one = one;
  if (two) profileFields.day1Redesign.improve.two = two;
  if (think) profileFields.day1Redesign.think = think;

  profileFields.day1Comm = commfields;

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

// @route   PUT api/day1/obq/ceiling-fly
// @desc   Add day1Prototype object
// @access  Private
router.put("/obq/ceiling-fly", auth, async (req, res) => {
  const { day1CeilingFly } = req.body;

  const profileFields = { day1CeilingFly };

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
