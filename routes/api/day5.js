const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Profile = require("../../models/Profiles");

// @route   PUT api/day5/phys-chem
// @desc   Add  day5PhysChem object
// @access  Private
router.put("/phys-chem", auth, async (req, res) => {
  const {
    physChange,
    physIs,
    physExamples,
    chemChange,
    chemIs,
    chemExamples,
    fireworksPhysIs,
    fireworksChemIs,
    fireworksWhy,
    chocoPhysIs,
    chocoChemIs,
    chocoWhy,
    eggsPhysIs,
    eggsChemIs,
    eggsWhy,
    braidPhysIs,
    braidChemIs,
    braidWhy
  } = req.body;

  const profileFields = {};
  const physChemFields = {
    physChange,
    physIs,
    physExamples,
    chemChange,
    chemIs,
    chemExamples,
    fireworksPhysIs,
    fireworksChemIs,
    fireworksWhy,
    chocoPhysIs,
    chocoChemIs,
    chocoWhy,
    eggsPhysIs,
    eggsChemIs,
    eggsWhy,
    braidPhysIs,
    braidChemIs,
    braidWhy
  };

  profileFields.day5PhysChem = physChemFields;

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

// @route   PUT api/day5/fluids
// @desc   Add  day5Fluids object
// @access  Private
router.put("/fluids", auth, async (req, res) => {
  const {
    solidIs,
    solidIsNot,
    liquidIs,
    liquidIsNot,
    gasIs,
    gasIsNot,
    liftPredict,
    blowerOff,
    blowerSlow,
    blowerHigh,
    scaleChange,
    liftSurprised
  } = req.body;

  const profileFields = {};
  const fluidFields = {
    solidIs,
    solidIsNot,
    liquidIs,
    liquidIsNot,
    gasIs,
    gasIsNot,
    liftPredict,
    blowerOff,
    blowerSlow,
    blowerHigh,
    scaleChange,
    liftSurprised
  };

  profileFields.day5Fluids = fluidFields;

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

// @route   PUT api/day5/fluid-stations
// @desc   Add  day5FluidStations object
// @access  Private
router.put("/fluid-stations", auth, async (req, res) => {
  const {
    poolPredict,
    poolObserve,
    poolSurprised,
    bridgePredict,
    bridgeObserve,
    bridgeSurprised,
    shipsPredict,
    shipsObserve,
    shipsSurprised
  } = req.body;

  const profileFields = {};
  const fluidStationFields = {
    poolPredict,
    poolObserve,
    poolSurprised,
    bridgePredict,
    bridgeObserve,
    bridgeSurprised,
    shipsPredict,
    shipsObserve,
    shipsSurprised
  };

  profileFields.day5FluidStations = fluidStationFields;

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

// @route   PUT api/day5/fluid-pool/draw
// @desc   Add day5PoolDraw object
// @access  Private
router.put("/fluid-pool/draw", auth, async (req, res) => {
  const { day5PoolDraw } = req.body;

  const profileFields = { day5PoolDraw };

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

// @route   PUT api/day5/fluid-bridge/draw
// @desc   Add day5bridgeDraw object
// @access  Private
router.put("/fluid-bridge/draw", auth, async (req, res) => {
  const { day5bridgeDraw } = req.body;

  const profileFields = { day5bridgeDraw };

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

// @route   PUT api/day5/fluid-ships/draw
// @desc   Add day5ShipsDraw object
// @access  Private
router.put("/fluid-ships/draw", auth, async (req, res) => {
  const { day5ShipsDraw } = req.body;

  const profileFields = { day5ShipsDraw };

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

// @route   PUT api/day5/fluid-stations/contd
// @desc   Add  day5FluidCont object
// @access  Private
router.put("/fluid-stations/contd", auth, async (req, res) => {
  const {
    stickyPredict,
    stickyDirection,
    stickyAir,
    stickyBehave,
    bernouli1,
    bernouli2
  } = req.body;

  const profileFields = {};
  const fluidStationContFields = {
    stickyPredict,
    stickyDirection,
    stickyAir,
    stickyBehave,
    bernouli1,
    bernouli2
  };

  profileFields.day5FluidCont = fluidStationContFields;

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

// @route   PUT api/day5/fluid-sticky/draw
// @desc   Add day5StickyDraw object
// @access  Private
router.put("/fluid-sticky/draw", auth, async (req, res) => {
  const { day5StickyDraw } = req.body;

  const profileFields = { day5StickyDraw };

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

// @route   PUT api/day5/fluid-bernouli/draw
// @desc   Add day5BernouliDraw object
// @access  Private
router.put("/fluid-bernouli/draw", auth, async (req, res) => {
  const { day5BernouliDraw } = req.body;

  const profileFields = { day5BernouliDraw };

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

// @route   PUT api/day5/eggbert/define
// @desc   Add day5EggbertDefine object
// @access  Private
router.put("/eggbert/define", auth, async (req, res) => {
  const { define } = req.body;

  const profileFields = {};
  const eggbertDefineFields = {
    define
  };

  profileFields.day5EggbertDefine = eggbertDefineFields;

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

// @route   PUT api/day5/eggbert/design
// @desc   Add day5EggbertDesign object
// @access  Private
router.put("/eggbert/design", auth, async (req, res) => {
  const { day5EggbertDesign } = req.body;

  const profileFields = { day5EggbertDesign };

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

// @route   PUT api/day5/eggbert/trial1
// @desc   Add day5EggbertTrial1 object
// @access  Private
router.put("/eggbert/trial1", auth, async (req, res) => {
  const {
    bannekerBefore,
    bannekerAfter,
    easleyBefore,
    easleyAfter,
    douglasBefore,
    douglasAfter,
    krafftBefore,
    krafftAfter,
    merianBefore,
    merianAfter,
    mirzBefore,
    mirzAfter,
    molinaBefore,
    molinaAfter,
    wuBefore,
    wuAfter
  } = req.body;

  const profileFields = {};
  const eggbertTrial1Fields = {
    bannekerBefore,
    bannekerAfter,
    easleyBefore,
    easleyAfter,
    douglasBefore,
    douglasAfter,
    krafftBefore,
    krafftAfter,
    merianBefore,
    merianAfter,
    mirzBefore,
    mirzAfter,
    molinaBefore,
    molinaAfter,
    wuBefore,
    wuAfter
  };

  profileFields.day5EggbertTrial1 = eggbertTrial1Fields;

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

// @route   PUT api/day5/eggbert/trial2
// @desc   Add day5EggbertTrial2 object
// @access  Private
router.put("/eggbert/trial2", auth, async (req, res) => {
  const {
    bannekerBefore2,
    bannekerAfter2,
    easleyBefore2,
    easleyAfter2,
    douglasBefore2,
    douglasAfter2,
    krafftBefore2,
    krafftAfter2,
    merianBefore2,
    merianAfter2,
    mirzBefore2,
    mirzAfter2,
    molinaBefore2,
    molinaAfter2,
    wuBefore2,
    wuAfter2
  } = req.body;

  const profileFields = {};
  const eggbertTrial2Fields = {
    bannekerBefore2,
    bannekerAfter2,
    easleyBefore2,
    easleyAfter2,
    douglasBefore2,
    douglasAfter2,
    krafftBefore2,
    krafftAfter2,
    merianBefore2,
    merianAfter2,
    mirzBefore2,
    mirzAfter2,
    molinaBefore2,
    molinaAfter2,
    wuBefore2,
    wuAfter2
  };

  profileFields.day5EggbertTrial2 = eggbertTrial2Fields;

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

// @route   PUT api/day5/eggbert/evaluate
// @desc   Add day5EggbertEval object
// @access  Private
router.put("/eggbert/evaluate", auth, async (req, res) => {
  const { evaluate } = req.body;

  const profileFields = {};
  const eggbertEvaluateFields = {
    evaluate
  };

  profileFields.day5EggbertEval = eggbertEvaluateFields;

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

// @route   PUT api/day5/eggbert/redesign
// @desc   Add day5RedesignDraw object
// @access  Private
router.put("/eggbert/redesign", auth, async (req, res) => {
  const { day5RedesignDraw } = req.body;

  const profileFields = { day5RedesignDraw };

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
