import polyline from '@mapbox/polyline';

export const HEADER_DASHBOARD = 0;
export const HEADER_TRACKER = 1;
export const MENU_YOU = 0;
export const MENU_EXPLORER = 1;

export const WALK_STATUS = {
  STARTED: 0,
  ENDED: 1,
  NOT_STARTED: 2,
  STOPPED: 3,
};

export const AQI_TITLE = ({pm10}) => {
  if (pm10 < 0) return 'Unknown';
  switch (true) {
    case pm10 <= 50:
      return 'Good';
    case pm10 <= 100:
      return 'Satisfactory';
    case pm10 <= 250:
      return 'Polluted';
    case pm10 <= 350:
      return 'Poor';
    case pm10 <= 430:
      return 'Very poor';
    case pm10 > 430:
      return 'Severe';
  }
};

export const DATA_POINTS = [];

export let userWalks = [];
export const addNewWalk = (walk) => {
  walk.photo = require('../../assets/photo_.png');
  return userWalks.push(walk);
};

export const getWalks = () => {
  return DATA_POINTS.map((point, index) => ({
    id: index,
    name: 'Walk Path ' + (index + 1),
    distance: '4 miles',
    hours: '1:22',
    rating: 5,
    photo: require('../../assets/photo_.png'),
    latitude: point[0],
    longitude: point[1],
  })).concat(userWalks);
};

export const getDistance = ([lat1, lon1], [lat2, lon2], isMiles = false) => {
  const toRadian = (angle) => (Math.PI / 180) * angle;
  const distance = (a, b) => (Math.PI / 180) * (a - b);
  const RADIUS_OF_EARTH_IN_KM = 6371;

  const dLat = distance(lat2, lat1);
  const dLon = distance(lon2, lon1);

  lat1 = toRadian(lat1);
  lat2 = toRadian(lat2);

  // Haversine Formula
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.asin(Math.sqrt(a));

  let finalDistance = RADIUS_OF_EARTH_IN_KM * c;

  if (isMiles) {
    finalDistance /= 1.60934;
  }

  return finalDistance;
};

export const getDirections = async (startLoc, destinationLoc) => {
  //console.log('starting point', startLoc, destinationLoc);
  let resp = await fetch(
    `https://maps.googleapis.com/maps/api/directions/json?origin=${
      startLoc.latitude + ',' + startLoc.longitude
    }&destination=${
      destinationLoc.latitude + ',' + destinationLoc.longitude
    }&mode=walking&key=AIzaSyAuXrHdmEIqt7GhWy2kTLqRZdCCsAj04rI`,
  );
  let respJson = await resp.json();
  //console.log(respJson);
  let points = polyline.decode(respJson.routes[0].overview_polyline.points);
  //console.log(points);
  let coords = points.map((point, index) => {
    return {
      latitude: point[0],
      longitude: point[1],
    };
  });
  return coords;
};
