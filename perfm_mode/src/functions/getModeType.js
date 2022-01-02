function getModeType(typ) {
  if (!typ) return "Problem in processing...";
  else if (typ == "wifi") return "Saver MODE";
  else if (typ == "cellular") return "Heavy Work MODE";
}

export default getModeType;
