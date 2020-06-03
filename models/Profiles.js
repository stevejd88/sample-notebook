const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  callSign: {
    type: String,
    required: true
  },
  day1Def: {
    location: String,
    problem: String,
    mission: String
  },
  day1Rsrch: {
    bSpan: {
      type: Boolean,
      default: false
    },
    bLoad: {
      type: Boolean,
      default: false
    },
    bTime: {
      type: Boolean,
      default: false
    },
    bTemp: {
      type: Boolean,
      default: false
    },
    sSpan: {
      type: Boolean,
      default: false
    },
    sLoad: {
      type: Boolean,
      default: false
    },
    sTime: {
      type: Boolean,
      default: false
    },
    sTemp: {
      type: Boolean,
      default: false
    },
    aSpan: {
      type: Boolean,
      default: false
    },
    aLoad: {
      type: Boolean,
      default: false
    },
    aTime: {
      type: Boolean,
      default: false
    },
    aTemp: {
      type: Boolean,
      default: false
    },
    fSpan: {
      type: Boolean,
      default: false
    },
    fLoad: {
      type: Boolean,
      default: false
    },
    fTime: {
      type: Boolean,
      default: false
    },
    fTemp: {
      type: Boolean,
      default: false
    }
  },
  day1Dev: {
    beamIsChecked: {
      type: Boolean,
      default: false
    },
    suspensionIsChecked: {
      type: Boolean,
      default: false
    },
    archIsChecked: {
      type: Boolean,
      default: false
    },
    floatingIsChecked: {
      type: Boolean,
      default: false
    }
  },
  day1Solution: {
    bridge: String,
    whyThis: String
  },
  day1Prototype: String,
  day1Tsteval: {
    parallelIsChecked: {
      type: Boolean,
      default: false
    },
    clearedIsChecked: {
      type: Boolean,
      default: false
    },
    supportsIsChecked: {
      type: Boolean,
      default: false
    },
    successIsChecked: {
      type: Boolean,
      default: false
    },
    successExplain: String
  },
  day1Comm: {
    success: String,
    criteria: String,
    notMet: String
  },
  day1Redesign: {
    improve: {
      one: String,
      two: String
    },
    think: String
  },
  day1FigureThat: {
    fractionA: String,
    percentA: String,
    decimalA: String,
    fractionB: String,
    percentB: String,
    decimalB: String,
    fractionC: String,
    percentC: String,
    decimalC: String,
    fractionD: String,
    percentD: String,
    decimalD: String,
    eliminateCompany: String,
    companyToSelect: String,
    solveProblem: String
  },
  day1DesignProcess: {
    step1: String,
    step2: String,
    step3: String,
    step4: String,
    step5: String,
    step6: String,
    step7: String,
    step8: String
  },
  day1CeilingFly: String,
  day2Mass: {
    longerIsChecked: {
      type: Boolean,
      default: false
    },
    mass1eraser: String,
    mass2eraser: String,
    mass3eraser: String,
    distance1eraser: String,
    distance2eraser: String,
    distance3eraser: String
  },
  day2MassLaunch: {
    massIndependent: String,
    massDependent: String,
    massConstant: String,
    massConclusion: String,
    massThoughts: String
  },
  day2MassRocket: String,
  day2Displacement: {
    longerIsChecked: {
      type: Boolean,
      default: false
    },
    mass1: String,
    mass2: String,
    mass3: String,
    distance1: String,
    distance2: String,
    distance3: String
  },
  day2DisplacementLaunch: {
    disIndependent: String,
    disDependent: String,
    disConstant: String,
    displacementConclusion: String,
    displacementThoughts: String
  },
  day2DisRocket: String,
  day2NewtonsLaw1: String,
  day2NewtonsLaw2: String,
  day2NewtonsLaw3: String,
  day2NewtonsAR: {
    action: String,
    reaction: String
  },
  day2LittleCircuit: String,
  day2LittleChal: {
    problem: String,
    product: String,
    solve: String,
    probPresenter: String,
    soluPresenter: String,
    demonstrators: String
  },
  day2LittleDraw: String,
  day3Matter: {
    matter: String,
    atomBond: String,
    sameAtoms: String,
    difAtoms: String
  },
  day3Robotics: {
    robot: String,
    robotFunc: String,
    instructions: String,
    common1: String,
    common2: String,
    common3: String
  },
  day3RoboticsDraw: String,
  day3Energy: {
    energyIs: String,
    heat: String,
    light: String,
    mech: String,
    electrical: String,
    sound: String
  },
  day3Sound: {
    soundIs: String
  },
  day3Mechanical: {
    moveHow: String,
    threeWinds: String,
    sixWinds: String,
    distanceWhy: String
  },
  day3mechDraw: String,
  day3Electrical: {
    energyToBulb: String,
    bandOffIsChecked: {
      type: Boolean,
      default: false
    },
    bandOnIsChecked: {
      type: Boolean,
      default: false
    },
    wireOffIsChecked: {
      type: Boolean,
      default: false
    },
    wireOnIsChecked: {
      type: Boolean,
      default: false
    },
    whySuccess: String,
    wireCI: String,
    RubberCI: String
  },
  day3ElectricalDraw: String,
  day3Light: {
    woodIsChecked: {
      type: Boolean,
      default: false
    },
    woodIsNotChecked: {
      type: Boolean,
      default: false
    },
    filterIsChecked: {
      type: Boolean,
      default: false
    },
    filterIsNotChecked: {
      type: Boolean,
      default: false
    },
    glassIsChecked: {
      type: Boolean,
      default: false
    },
    glassIsNotChecked: {
      type: Boolean,
      default: false
    },
    mirrorsIsChecked: {
      type: Boolean,
      default: false
    },
    mirrorsIsNotChecked: {
      type: Boolean,
      default: false
    },
    waterIsChecked: {
      type: Boolean,
      default: false
    },
    waterIsNotChecked: {
      type: Boolean,
      default: false
    },
    woodAR: String,
    woodChange: String,
    filterAR: String,
    filterChange: String,
    mirrorsAR: String,
    mirrorsChange: String,
    waterAR: String,
    waterChange: String
  },
  day3LightWoodDraw: String,
  day3LightFilterDraw: String,
  day3LightMirrorsDraw: String,
  day3LightWaterDraw: String,
  day3Thermal: {
    preColorRoom: String,
    preColorCold: String,
    preColorWarm: String,
    ColorRoomTxt: String,
    ColorColdTxt: String,
    ColorWarmTxt: String
  },
  day3HeatRoomDraw: String,
  day3HeatColdDraw: String,
  day3HeatWarmDraw: String,
  day4Pop: {
    popJob: String,
    popChemist: String,
    popEngineer: String,
    popMath1: String,
    popMath2: String
  },
  day4PopData: {
    popHypothesis: String,
    teamA1: String,
    teamA2: String,
    teamA3: String,
    teamAMean: String,
    teamB1: String,
    teamB2: String,
    teamB3: String,
    teamBMean: String
  },
  day4PopResults: {
    popBanneker: String,
    popEasley: String,
    popDouglas: String,
    popKrafft: String,
    popMerian: String,
    popMirz: String,
    popMolina: String,
    popWu: String,
    popMean1: String,
    popMean2: String,
    popConclusion: String
  },
  day4PopDraw: String,
  day4Kinetic: {
    oneSOM: String,
    twoSOM: String,
    threeSOM: String,
    matterChange: String
  },
  day4oneSOMPic: String,
  day4twoSOMPic: String,
  day4threeSOMPic: String,
  day4Phases: {
    plasma: String,
    gas: String,
    liquid: String,
    solid: String,
    heat: String,
    kinetic: String,
    emitsLight: String
  },
  day4Solubility: {
    bank1: String,
    bank2: String,
    bank3: String,
    bank4: String,
    corn1: String,
    corn2: String,
    corn3: String,
    corn4: String,
    oil1: String,
    oil2: String,
    oil3: String,
    kool: String
  },
  day4Chroma: {
    solvent: String,
    solute: String,
    paper: String,
    crayola: String,
    lePlume: String,
    visAVis: String,
    sketch: String,
    whoNote: String,
    suspectMarker: String,
    guilty: String,
    pigmentSoluble: String,
    pigmentLeast: String
  },
  day5PhysChem: {
    physChange: String,
    physIs: String,
    physExamples: String,
    chemChange: String,
    chemIs: String,
    chemExamples: String,
    fireworksPhysIs: {
      type: Boolean,
      default: false
    },
    fireworksChemIs: {
      type: Boolean,
      default: false
    },
    fireworksWhy: String,
    chocoPhysIs: {
      type: Boolean,
      default: false
    },
    chocoChemIs: {
      type: Boolean,
      default: false
    },
    chocoWhy: String,
    eggsPhysIs: {
      type: Boolean,
      default: false
    },
    eggsChemIs: {
      type: Boolean,
      default: false
    },
    eggsWhy: String,
    braidPhysIs: {
      type: Boolean,
      default: false
    },
    braidChemIs: {
      type: Boolean,
      default: false
    },
    braidWhy: String
  },
  day5Fluids: {
    solidIs: {
      type: Boolean,
      default: false
    },
    solidIsNot: {
      type: Boolean,
      default: false
    },
    liquidIs: {
      type: Boolean,
      default: false
    },
    liquidIsNot: {
      type: Boolean,
      default: false
    },
    gasIs: {
      type: Boolean,
      default: false
    },
    gasIsNot: {
      type: Boolean,
      default: false
    },
    liftPredict: String,
    blowerOff: String,
    blowerSlow: String,
    blowerHigh: String,
    scaleChange: String,
    liftSurprised: String
  },
  day5FluidStations: {
    poolPredict: String,
    poolObserve: String,
    poolSurprised: String,
    bridgePredict: String,
    bridgeObserve: String,
    bridgeSurprised: String,
    shipsPredict: String,
    shipsObserve: String,
    shipsSurprised: String
  },
  day5PoolDraw: String,
  day5bridgeDraw: String,
  day5ShipsDraw: String,
  day5FluidCont: {
    stickyPredict: String,
    stickyDirection: String,
    stickyAir: String,
    stickyBehave: String,
    bernouli1: String,
    bernouli2: String
  },
  day5StickyDraw: String,
  day5BernouliDraw: String,
  day5EggbertDefine: {
    define: String
  },
  day5EggbertDesign: String,
  day5EggbertTrial1: {
    bannekerBefore: String,
    bannekerAfter: String,
    easleyBefore: String,
    easleyAfter: String,
    douglasBefore: String,
    douglasAfter: String,
    krafftBefore: String,
    krafftAfter: String,
    merianBefore: String,
    merianAfter: String,
    mirzBefore: String,
    mirzAfter: String,
    molinaBefore: String,
    molinaAfter: String,
    wuBefore: String,
    wuAfter: String
  },
  day5EggbertTrial2: {
    bannekerBefore2: String,
    bannekerAfter2: String,
    easleyBefore2: String,
    easleyAfter2: String,
    douglasBefore2: String,
    douglasAfter2: String,
    krafftBefore2: String,
    krafftAfter2: String,
    merianBefore2: String,
    merianAfter2: String,
    mirzBefore2: String,
    mirzAfter2: String,
    molinaBefore2: String,
    molinaAfter2: String,
    wuBefore2: String,
    wuAfter2: String
  },
  day5EggbertEval: {
    evaluate: String
  },
  day5RedesignDraw: String
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
