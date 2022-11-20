let targetLong;
let targetLat;
let currLong;
let currLat;
export let isVal;

function setLocation(long, lat) {
  targetLat = lat;
  targetLong = long;
}

function calcDist(long1, lat1, long2, lat2) {
  long1 = (long1 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  long2 = (long2 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  let dlong = long2 - long1;
  let dlat = lat2 - lat1;
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlong / 2), 2);
  let c = 2 * Math.asin(Math.sqrt(a));
  let r = 6371;
  return c * r;
}

function isValid(dist) {
  return dist < 1;
}

function toMain() {
  location.href = "/";
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
};

const sucessCallBack = (position) => {
  currLong = position.coords.longitude;
  currLat = position.coords.latitude;
};

const errorCallBack = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(
  sucessCallBack,
  errorCallBack,
  options
);

async function isValidOut() {
  setLocation(-73.595552, 45.451863);
  const dist = calcDist(currLong, currLat, targetLong, targetLat);
  if (isValid(dist)) {
    // document.write("Check out success!");
    // return true;
    isVal = true;
  } else {
    // document.write("Check out failed, please be at the assigned location.");
    // return false;
    isVal = false;
  }
}
export default isValidOut;
