"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var apps_expansion_exports = {};
__export(apps_expansion_exports, {
  appsExpansionMetadata: () => appsExpansionMetadata
});
module.exports = __toCommonJS(apps_expansion_exports);
var import_category = require("./category.js");
const appsExpansionMetadata = {
  ...(0, import_category.taggedCategory)("Media playback", {
    "stop-circle": ["stop", "stop-playback", "end", "recording"],
    "skip-back": ["previous", "track", "chapter", "media"],
    "skip-forward": ["next", "track", "chapter", "media"],
    rewind: ["seek", "backward", "reverse", "playback"],
    "fast-forward": ["seek", "ahead", "speed", "playback"],
    cassette: ["tape", "analog", "audio", "recording"],
    eject: ["remove", "unmount", "removable-media", "tray"],
    music: ["song", "notes", "soundtrack", "audio", "melody"],
    disc: ["cd", "dvd", "optical", "album", "record"],
    film: ["movie", "cinema", "reel", "video"],
    clapperboard: ["production", "filmmaking", "slate", "clip", "movie"],
    radio: ["broadcast", "station", "tuner", "fm", "receiver"],
    podcast: ["episode", "spoken-audio", "broadcast", "show"],
    waveform: ["sound", "sample", "audio", "amplitude", "recording"]
  }),
  ...(0, import_category.taggedCategory)("Connectivity and devices", {
    cast: ["stream", "screen", "wireless-display", "send-media"],
    signal: ["cellular", "reception", "strength", "mobile-network"],
    router: ["wifi", "modem", "wireless", "network", "internet"],
    cable: ["wire", "connector", "peripheral", "wired"],
    nfc: ["contactless", "tap", "near-field", "payment", "pairing"],
    tv: ["television", "screen", "broadcast", "display"],
    speaker: ["loudspeaker", "audio-output", "woofer", "sound-system"],
    mouse: ["computer-mouse", "input", "peripheral", "pointing-device"],
    watch: ["smartwatch", "wearable", "wrist", "pairing", "timepiece"],
    gamepad: ["controller", "gaming", "console", "joystick"],
    "remote-control": ["handset", "television-remote", "infrared", "controller"],
    "battery-charging": ["power", "recharge", "energy", "electricity"],
    "sim-card": ["cellular", "mobile-plan", "subscriber", "chip"]
  }),
  ...(0, import_category.taggedCategory)("Security", {
    "security-camera": ["cctv", "surveillance", "monitoring", "footage"],
    siren: ["alarm", "emergency", "beacon", "warning", "alert"],
    vault: ["safe", "secure-storage", "strongbox", "valuables"],
    "scan-face": ["face-id", "recognition", "biometric", "authentication", "identity"]
  }),
  ...(0, import_category.taggedCategory)("Education", {
    school: ["classroom", "campus", "learning", "student", "academy"],
    backpack: ["schoolbag", "rucksack", "student", "supplies"],
    microscope: ["laboratory", "microscopy", "biology", "science", "specimen"],
    telescope: ["astronomy", "observation", "stargazing", "scope", "science"],
    flask: ["chemistry", "laboratory", "experiment", "solution", "science"],
    atom: ["physics", "nucleus", "electron", "science", "atomic"],
    ruler: ["measure", "length", "geometry", "distance", "straightedge"],
    "drafting-compass": ["geometry", "circle-drawing", "construction", "drafting"],
    magnet: ["magnetic", "attraction", "physics", "poles"]
  }),
  ...(0, import_category.taggedCategory)("Transport", {
    car: ["automobile", "vehicle", "driving", "taxi", "road"],
    bus: ["transit", "public-transport", "coach", "route", "shuttle"],
    train: ["railway", "rail", "station", "metro", "transit"],
    bicycle: ["bike", "cycling", "pedal", "cycle", "active-travel"],
    motorbike: ["motorcycle", "motor", "riding", "two-wheeler"],
    plane: ["airplane", "aeroplane", "flight", "aviation", "airport"],
    ship: ["boat", "ferry", "vessel", "cruise", "water-transport"],
    helicopter: ["rotor", "aviation", "air-rescue", "chopper"],
    fuel: ["petrol", "gas", "diesel", "gas-station", "pump"],
    "charging-station": ["ev", "electric-vehicle", "charger", "recharge"],
    parking: ["car-park", "garage", "vehicle-space", "parking-lot"],
    "traffic-light": ["signal", "junction", "road", "stoplight", "intersection"],
    anchor: ["mooring", "nautical", "harbor", "port", "anchorage"]
  }),
  ...(0, import_category.taggedCategory)("Weather and nature", {
    "cloud-rain": ["rainy", "precipitation", "shower", "forecast"],
    "cloud-snow": ["snowfall", "snowy", "winter-weather", "forecast"],
    "cloud-lightning": ["thunderstorm", "storm", "thunder", "forecast"],
    "cloud-sun": ["partly-cloudy", "sunny-intervals", "forecast", "daylight"],
    wind: ["airflow", "breeze", "gust", "windy", "forecast"],
    fog: ["mist", "haze", "visibility", "foggy", "forecast"],
    snowflake: ["cold", "freezing", "cooling", "winter", "ice"],
    droplet: ["water", "humidity", "liquid", "moisture", "drop"],
    thermometer: ["temperature", "degrees", "heat", "fever", "climate"],
    leaf: ["plant", "sustainable", "eco", "natural", "foliage"],
    tree: ["park", "forest", "woodland", "green-space", "plant"],
    flower: ["gardening", "blossom", "bloom", "plant", "floral"],
    mountain: ["peak", "hiking", "terrain", "summit", "alpine"],
    waves: ["sea", "ocean", "swimming", "water", "surf"],
    flame: ["fire", "heat", "combustion", "burn", "hot"],
    umbrella: ["rain", "shelter", "covered", "weather-protection"],
    rainbow: ["spectrum", "color", "weather", "outdoors"]
  }),
  ...(0, import_category.taggedCategory)("Health", {
    stethoscope: ["doctor", "clinical", "medical-care", "examination", "auscultation"],
    "first-aid": ["medical-kit", "emergency-care", "supplies", "rescue"],
    pill: ["medication", "capsule", "prescription", "medicine", "pharmacy"],
    syringe: ["vaccination", "injection", "needle", "immunization", "medical"],
    bandage: ["plaster", "wound", "dressing", "injury", "first-aid"],
    hospital: ["healthcare", "clinic", "medical-facility", "care", "treatment"],
    ambulance: ["emergency-transport", "paramedic", "rescue", "ems"],
    dna: ["genetics", "genome", "helix", "heredity", "biology"],
    tooth: ["dental", "dentist", "oral-care", "teeth"],
    bone: ["skeletal", "skeleton", "anatomy", "orthopedic"],
    lungs: ["respiratory", "breathing", "pulmonary", "anatomy"],
    brain: ["neurology", "mental-health", "cognitive", "mind", "anatomy"],
    dumbbell: ["strength", "gym", "fitness", "weightlifting", "workout"]
  }),
  ...(0, import_category.taggedCategory)("Everyday applications", {
    bed: ["sleep", "bedroom", "hotel", "accommodation", "rest"],
    bath: ["bathtub", "bathroom", "bathing", "amenity"],
    shower: ["bathroom", "wash", "bathing", "amenity"],
    sofa: ["couch", "lounge", "living-room", "furniture", "seating"],
    lamp: ["lighting", "light-fixture", "lampshade", "illumination"],
    door: ["entrance", "room", "doorway", "physical-access"],
    "washing-machine": ["laundry", "washer", "appliance", "clothes"],
    refrigerator: ["fridge", "freezer", "cold-storage", "appliance", "kitchen"],
    fan: ["ventilation", "air-circulation", "cooling", "appliance"],
    tent: ["camping", "campsite", "outdoors", "shelter"],
    luggage: ["baggage", "suitcase", "travel", "trip"],
    "paw-print": ["pet", "animal", "dog", "cat", "pet-friendly"],
    fish: ["aquatic", "seafood", "fishing", "animal", "aquarium"],
    bird: ["wildlife", "birdwatching", "avian", "animal"],
    apple: ["fruit", "nutrition", "food", "produce", "healthy-eating"],
    cake: ["birthday", "celebration", "dessert", "party", "bakery"],
    shirt: ["clothing", "apparel", "t-shirt", "garment", "fashion"]
  })
};
