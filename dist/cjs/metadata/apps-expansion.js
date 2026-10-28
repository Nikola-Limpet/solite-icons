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
const appsExpansionMetadata = {
  "stop-circle": {
    category: "Media playback",
    tags: ["stop", "stop-playback", "end", "recording"]
  },
  "skip-back": { category: "Media playback", tags: ["previous", "track", "chapter", "media"] },
  "skip-forward": { category: "Media playback", tags: ["next", "track", "chapter", "media"] },
  rewind: { category: "Media playback", tags: ["seek", "backward", "reverse", "playback"] },
  "fast-forward": { category: "Media playback", tags: ["seek", "ahead", "speed", "playback"] },
  cassette: { category: "Media playback", tags: ["tape", "analog", "audio", "recording"] },
  eject: { category: "Media playback", tags: ["remove", "unmount", "removable-media", "tray"] },
  music: { category: "Media playback", tags: ["song", "notes", "soundtrack", "audio", "melody"] },
  disc: { category: "Media playback", tags: ["cd", "dvd", "optical", "album", "record"] },
  film: { category: "Media playback", tags: ["movie", "cinema", "reel", "video"] },
  clapperboard: {
    category: "Media playback",
    tags: ["production", "filmmaking", "slate", "clip", "movie"]
  },
  radio: { category: "Media playback", tags: ["broadcast", "station", "tuner", "fm", "receiver"] },
  podcast: { category: "Media playback", tags: ["episode", "spoken-audio", "broadcast", "show"] },
  waveform: {
    category: "Media playback",
    tags: ["sound", "sample", "audio", "amplitude", "recording"]
  },
  cast: {
    category: "Connectivity and devices",
    tags: ["stream", "screen", "wireless-display", "send-media"]
  },
  signal: {
    category: "Connectivity and devices",
    tags: ["cellular", "reception", "strength", "mobile-network"]
  },
  router: {
    category: "Connectivity and devices",
    tags: ["wifi", "modem", "wireless", "network", "internet"]
  },
  cable: {
    category: "Connectivity and devices",
    tags: ["wire", "connector", "peripheral", "wired"]
  },
  nfc: {
    category: "Connectivity and devices",
    tags: ["contactless", "tap", "near-field", "payment", "pairing"]
  },
  tv: {
    category: "Connectivity and devices",
    tags: ["television", "screen", "broadcast", "display"]
  },
  speaker: {
    category: "Connectivity and devices",
    tags: ["loudspeaker", "audio-output", "woofer", "sound-system"]
  },
  mouse: {
    category: "Connectivity and devices",
    tags: ["computer-mouse", "input", "peripheral", "pointing-device"]
  },
  watch: {
    category: "Connectivity and devices",
    tags: ["smartwatch", "wearable", "wrist", "pairing", "timepiece"]
  },
  gamepad: {
    category: "Connectivity and devices",
    tags: ["controller", "gaming", "console", "joystick"]
  },
  "remote-control": {
    category: "Connectivity and devices",
    tags: ["handset", "television-remote", "infrared", "controller"]
  },
  "battery-charging": {
    category: "Connectivity and devices",
    tags: ["power", "recharge", "energy", "electricity"]
  },
  "sim-card": {
    category: "Connectivity and devices",
    tags: ["cellular", "mobile-plan", "subscriber", "chip"]
  },
  "security-camera": {
    category: "Security",
    tags: ["cctv", "surveillance", "monitoring", "footage"]
  },
  siren: { category: "Security", tags: ["alarm", "emergency", "beacon", "warning", "alert"] },
  vault: { category: "Security", tags: ["safe", "secure-storage", "strongbox", "valuables"] },
  "scan-face": {
    category: "Security",
    tags: ["face-id", "recognition", "biometric", "authentication", "identity"]
  },
  school: {
    category: "Education",
    tags: ["classroom", "campus", "learning", "student", "academy"]
  },
  backpack: { category: "Education", tags: ["schoolbag", "rucksack", "student", "supplies"] },
  microscope: {
    category: "Education",
    tags: ["laboratory", "microscopy", "biology", "science", "specimen"]
  },
  telescope: {
    category: "Education",
    tags: ["astronomy", "observation", "stargazing", "scope", "science"]
  },
  flask: {
    category: "Education",
    tags: ["chemistry", "laboratory", "experiment", "solution", "science"]
  },
  atom: { category: "Education", tags: ["physics", "nucleus", "electron", "science", "atomic"] },
  ruler: {
    category: "Education",
    tags: ["measure", "length", "geometry", "distance", "straightedge"]
  },
  "drafting-compass": {
    category: "Education",
    tags: ["geometry", "circle-drawing", "construction", "drafting"]
  },
  magnet: { category: "Education", tags: ["magnetic", "attraction", "physics", "poles"] },
  car: { category: "Transport", tags: ["automobile", "vehicle", "driving", "taxi", "road"] },
  bus: {
    category: "Transport",
    tags: ["transit", "public-transport", "coach", "route", "shuttle"]
  },
  train: { category: "Transport", tags: ["railway", "rail", "station", "metro", "transit"] },
  bicycle: { category: "Transport", tags: ["bike", "cycling", "pedal", "cycle", "active-travel"] },
  motorbike: { category: "Transport", tags: ["motorcycle", "motor", "riding", "two-wheeler"] },
  plane: {
    category: "Transport",
    tags: ["airplane", "aeroplane", "flight", "aviation", "airport"]
  },
  ship: { category: "Transport", tags: ["boat", "ferry", "vessel", "cruise", "water-transport"] },
  helicopter: { category: "Transport", tags: ["rotor", "aviation", "air-rescue", "chopper"] },
  fuel: { category: "Transport", tags: ["petrol", "gas", "diesel", "gas-station", "pump"] },
  "charging-station": {
    category: "Transport",
    tags: ["ev", "electric-vehicle", "charger", "recharge"]
  },
  parking: { category: "Transport", tags: ["car-park", "garage", "vehicle-space", "parking-lot"] },
  "traffic-light": {
    category: "Transport",
    tags: ["signal", "junction", "road", "stoplight", "intersection"]
  },
  anchor: { category: "Transport", tags: ["mooring", "nautical", "harbor", "port", "anchorage"] },
  "cloud-rain": {
    category: "Weather and nature",
    tags: ["rainy", "precipitation", "shower", "forecast"]
  },
  "cloud-snow": {
    category: "Weather and nature",
    tags: ["snowfall", "snowy", "winter-weather", "forecast"]
  },
  "cloud-lightning": {
    category: "Weather and nature",
    tags: ["thunderstorm", "storm", "thunder", "forecast"]
  },
  "cloud-sun": {
    category: "Weather and nature",
    tags: ["partly-cloudy", "sunny-intervals", "forecast", "daylight"]
  },
  wind: {
    category: "Weather and nature",
    tags: ["airflow", "breeze", "gust", "windy", "forecast"]
  },
  fog: {
    category: "Weather and nature",
    tags: ["mist", "haze", "visibility", "foggy", "forecast"]
  },
  snowflake: {
    category: "Weather and nature",
    tags: ["cold", "freezing", "cooling", "winter", "ice"]
  },
  droplet: {
    category: "Weather and nature",
    tags: ["water", "humidity", "liquid", "moisture", "drop"]
  },
  thermometer: {
    category: "Weather and nature",
    tags: ["temperature", "degrees", "heat", "fever", "climate"]
  },
  leaf: {
    category: "Weather and nature",
    tags: ["plant", "sustainable", "eco", "natural", "foliage"]
  },
  tree: {
    category: "Weather and nature",
    tags: ["park", "forest", "woodland", "green-space", "plant"]
  },
  flower: {
    category: "Weather and nature",
    tags: ["gardening", "blossom", "bloom", "plant", "floral"]
  },
  mountain: {
    category: "Weather and nature",
    tags: ["peak", "hiking", "terrain", "summit", "alpine"]
  },
  waves: { category: "Weather and nature", tags: ["sea", "ocean", "swimming", "water", "surf"] },
  flame: { category: "Weather and nature", tags: ["fire", "heat", "combustion", "burn", "hot"] },
  umbrella: {
    category: "Weather and nature",
    tags: ["rain", "shelter", "covered", "weather-protection"]
  },
  rainbow: { category: "Weather and nature", tags: ["spectrum", "color", "weather", "outdoors"] },
  stethoscope: {
    category: "Health",
    tags: ["doctor", "clinical", "medical-care", "examination", "auscultation"]
  },
  "first-aid": {
    category: "Health",
    tags: ["medical-kit", "emergency-care", "supplies", "rescue"]
  },
  pill: {
    category: "Health",
    tags: ["medication", "capsule", "prescription", "medicine", "pharmacy"]
  },
  syringe: {
    category: "Health",
    tags: ["vaccination", "injection", "needle", "immunization", "medical"]
  },
  bandage: { category: "Health", tags: ["plaster", "wound", "dressing", "injury", "first-aid"] },
  hospital: {
    category: "Health",
    tags: ["healthcare", "clinic", "medical-facility", "care", "treatment"]
  },
  ambulance: { category: "Health", tags: ["emergency-transport", "paramedic", "rescue", "ems"] },
  dna: { category: "Health", tags: ["genetics", "genome", "helix", "heredity", "biology"] },
  tooth: { category: "Health", tags: ["dental", "dentist", "oral-care", "teeth"] },
  bone: { category: "Health", tags: ["skeletal", "skeleton", "anatomy", "orthopedic"] },
  lungs: { category: "Health", tags: ["respiratory", "breathing", "pulmonary", "anatomy"] },
  brain: {
    category: "Health",
    tags: ["neurology", "mental-health", "cognitive", "mind", "anatomy"]
  },
  dumbbell: {
    category: "Health",
    tags: ["strength", "gym", "fitness", "weightlifting", "workout"]
  },
  bed: {
    category: "Everyday applications",
    tags: ["sleep", "bedroom", "hotel", "accommodation", "rest"]
  },
  bath: { category: "Everyday applications", tags: ["bathtub", "bathroom", "bathing", "amenity"] },
  shower: { category: "Everyday applications", tags: ["bathroom", "wash", "bathing", "amenity"] },
  sofa: {
    category: "Everyday applications",
    tags: ["couch", "lounge", "living-room", "furniture", "seating"]
  },
  lamp: {
    category: "Everyday applications",
    tags: ["lighting", "light-fixture", "lampshade", "illumination"]
  },
  door: {
    category: "Everyday applications",
    tags: ["entrance", "room", "doorway", "physical-access"]
  },
  "washing-machine": {
    category: "Everyday applications",
    tags: ["laundry", "washer", "appliance", "clothes"]
  },
  refrigerator: {
    category: "Everyday applications",
    tags: ["fridge", "freezer", "cold-storage", "appliance", "kitchen"]
  },
  fan: {
    category: "Everyday applications",
    tags: ["ventilation", "air-circulation", "cooling", "appliance"]
  },
  tent: { category: "Everyday applications", tags: ["camping", "campsite", "outdoors", "shelter"] },
  luggage: { category: "Everyday applications", tags: ["baggage", "suitcase", "travel", "trip"] },
  "paw-print": {
    category: "Everyday applications",
    tags: ["pet", "animal", "dog", "cat", "pet-friendly"]
  },
  fish: {
    category: "Everyday applications",
    tags: ["aquatic", "seafood", "fishing", "animal", "aquarium"]
  },
  bird: {
    category: "Everyday applications",
    tags: ["wildlife", "birdwatching", "avian", "animal"]
  },
  apple: {
    category: "Everyday applications",
    tags: ["fruit", "nutrition", "food", "produce", "healthy-eating"]
  },
  cake: {
    category: "Everyday applications",
    tags: ["birthday", "celebration", "dessert", "party", "bakery"]
  },
  shirt: {
    category: "Everyday applications",
    tags: ["clothing", "apparel", "t-shirt", "garment", "fashion"]
  }
};
