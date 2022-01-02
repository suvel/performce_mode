function getNetWorkDetails() {
  let networkData = {};
  for (let key in navigator.connection) {
    if (typeof navigator.connection[key] !== "function") {
      networkData[key] = navigator.connection[key];
    }
  }
  const conObj = {
    ...networkData,
    type: navigator.connection?.type,
  };

  return conObj;
}

export default getNetWorkDetails;
