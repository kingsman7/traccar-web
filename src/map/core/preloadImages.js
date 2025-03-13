import { grey } from '@mui/material/colors';
import createPalette from '@mui/material/styles/createPalette';
import { loadImage, prepareIcon } from './mapUtil';

import directionSvg from '../../resources/images/direction.svg';
import backgroundSvg from '../../resources/images/background.svg';
import animal_online from '../../resources/images/icon/animal_online.png';
import bicycle_online from '../../resources/images/icon/bicycle_online.png';
import boat_online from '../../resources/images/icon/boat_online.png';
import bus_online from '../../resources/images/icon/bus_online.png';
import car_online from '../../resources/images/icon/car_online.png';
import camper_online from '../../resources/images/iconLegacy/camper.svg';
import crane_online from '../../resources/images/icon/crane_online.png';
import default_online from '../../resources/images/icon/default_online.png';
import start_online from '../../resources/images/iconLegacy/start.svg';
import finish_online from '../../resources/images/iconLegacy/finish.svg';
import helicopter_online from '../../resources/images/icon/helicopter_online.png';
import motorcycle_online from '../../resources/images/icon/motorcycle_online.png';
import person_online from '../../resources/images/icon/person_online.png';
import plane_online from '../../resources/images/icon/plane_online.png';
import scooter_online from '../../resources/images/icon/scooter_online.png';
import ship_online from '../../resources/images/icon/ship_online.png';
import tractor_online from '../../resources/images/icon/tractor_online.png';
import trailer_online from '../../resources/images/iconLegacy/trailer.svg';
import train_online from '../../resources/images/icon/train_online.png';
import tram_online from '../../resources/images/icon/tram_online.png';
import truck_online from '../../resources/images/icon/truck_online.png';
import van_online from '../../resources/images/icon/van_online.png';
import reefer_online from '../../resources/images/icon/reefer_online.png';
/*offline*/
import animal_offline from '../../resources/images/icon/animal_offline.png';
import bicycle_offline from '../../resources/images/icon/bicycle_offline.png';
import boat_offline from '../../resources/images/icon/boat_offline.png';
import bus_offline from '../../resources/images/icon/bus_offline.png';
import car_offline from '../../resources/images/icon/car_offline.png';
import camper_offline from '../../resources/images/iconLegacy/camper.svg';
import crane_offline from '../../resources/images/icon/crane_offline.png';
import default_offline from '../../resources/images/icon/default_offline.png';
import start_offline from '../../resources/images/iconLegacy/start.svg';
import finish_offline from '../../resources/images/iconLegacy/finish.svg';
import helicopter_offline from '../../resources/images/icon/helicopter_offline.png';
import motorcycle_offline from '../../resources/images/icon/motorcycle_offline.png';
import person_offline from '../../resources/images/icon/person_offline.png';
import plane_offline from '../../resources/images/icon/plane_offline.png';
import scooter_offline from '../../resources/images/icon/scooter_offline.png';
import ship_offline from '../../resources/images/icon/ship_offline.png';
import tractor_offline from '../../resources/images/icon/tractor_offline.png';
import trailer_offline from '../../resources/images/iconLegacy/trailer.svg';
import train_offline from '../../resources/images/icon/train_offline.png';
import tram_offline from '../../resources/images/icon/tram_offline.png';
import truck_offline from '../../resources/images/icon/truck_offline.png';
import van_offline from '../../resources/images/icon/van_offline.png';
import reefer_offline from '../../resources/images/icon/reefer_offline.png';
/*static*/
import animal_static from '../../resources/images/icon/animal_static.png';
import bicycle_static from '../../resources/images/icon/bicycle_static.png';
import boat_static from '../../resources/images/icon/boat_static.png';
import bus_static from '../../resources/images/icon/bus_static.png';
import car_static from '../../resources/images/icon/car_static.png';
import camper_static from '../../resources/images/iconLegacy/camper.svg';
import crane_static from '../../resources/images/icon/crane_static.png';
import default_static from '../../resources/images/icon/default_static.png';
import start_static from '../../resources/images/iconLegacy/start.svg';
import finish_static from '../../resources/images/iconLegacy/finish.svg';
import helicopter_static from '../../resources/images/icon/helicopter_static.png';
import motorcycle_static from '../../resources/images/icon/motorcycle_static.png';
import person_static from '../../resources/images/icon/person_static.png';
import plane_static from '../../resources/images/icon/plane_static.png';
import scooter_static from '../../resources/images/icon/scooter_static.png';
import ship_static from '../../resources/images/icon/ship_static.png';
import tractor_static from '../../resources/images/icon/tractor_static.png';
import trailer_static from '../../resources/images/iconLegacy/trailer.svg';
import train_static from '../../resources/images/icon/train_static.png';
import tram_static from '../../resources/images/icon/tram_static.png';
import truck_static from '../../resources/images/icon/truck_static.png';
import van_static from '../../resources/images/icon/van_static.png';
import reefer_static from '../../resources/images/icon/reefer_static.png';
/*svg*/
import animal from '../../resources/images/icon/animal.svg';
import bicycle from '../../resources/images/icon/bicycle.svg';
import boat from '../../resources/images/icon/boat.svg';
import bus from '../../resources/images/icon/bus.svg';
import car from '../../resources/images/icon/car.svg';
import camper from '../../resources/images/iconLegacy/camper.svg';
import crane from '../../resources/images/icon/crane.svg';
import default_svg from '../../resources/images/icon/default.svg';
import start from '../../resources/images/iconLegacy/start.svg';
import finish from '../../resources/images/iconLegacy/finish.svg';
import helicopter from '../../resources/images/icon/helicopter.svg';
import motorcycle from '../../resources/images/icon/motorcycle.svg';
import person from '../../resources/images/icon/person.svg';
import plane from '../../resources/images/icon/plane.svg';
import scooter from '../../resources/images/icon/scooter.svg';
import ship from '../../resources/images/icon/ship.svg';
import tractor from '../../resources/images/icon/tractor.svg';
import trailer from '../../resources/images/iconLegacy/trailer.svg';
import train from '../../resources/images/icon/train.svg';
import tram from '../../resources/images/icon/tram.svg';
import truck from '../../resources/images/icon/truck.svg';
import van from '../../resources/images/icon/van.svg';
import reefer from '../../resources/images/icon/truck.svg';

export const mapIcons = {
  animal: animal,
  bicycle: bicycle,
  boat: boat,
  bus: bus,
  car: car,
  camper: camper,
  crane: crane,
  default: default_svg,
  finish: finish,
  helicopter: helicopter,
  motorcycle: motorcycle,
  person: person,
  plane: plane,
  reefer:reefer,
  scooter: scooter,
  ship: ship,
  start: start,
  tractor: tractor,
  trailer: trailer,
  train: train,
  tram: tram,
  truck: truck,
  van: van,
};
export const mapIconsOnline = {
  animal: animal_online,
  bicycle: bicycle_online,
  boat: boat_online,
  bus: bus_online,
  car: car_online,
  camper: camper_online,
  crane: crane_online,
  default: default_online,
  finish: finish_online,
  helicopter: helicopter_online,
  motorcycle: motorcycle_online,
  person: person_online,
  plane: plane_online,
  reefer:reefer_online,
  scooter: scooter_online,
  ship: ship_online,
  start: start_online,
  tractor: tractor_online,
  trailer: trailer_online,
  train: train_online,
  tram: tram_online,
  truck: truck_online,
  van: van_online,
};
export const mapIconsOffline = {
  animal: animal_offline,
  bicycle: bicycle_offline,
  boat: boat_offline,
  bus: bus_offline,
  car: car_offline,
  camper: camper_offline,
  crane: crane_offline,
  default: default_offline,
  finish: finish_offline,
  helicopter: helicopter_offline,
  motorcycle: motorcycle_offline,
  person: person_offline,
  plane: plane_offline,
  reefer:reefer_offline,
  scooter: scooter_offline,
  ship: ship_offline,
  start: start_offline,
  tractor: tractor_offline,
  trailer: trailer_offline,
  train: train_offline,
  tram: tram_offline,
  truck: truck_offline,
  van: van_offline,
};
export const mapIconsStatic = {
  animal: animal_static,
  bicycle: bicycle_static,
  boat: boat_static,
  bus: bus_static,
  car: car_static,
  camper: camper_static,
  crane: crane_static,
  default: default_static,
  finish: finish_static,
  helicopter: helicopter_static,
  motorcycle: motorcycle_static,
  person: person_static,
  plane: plane_static,
  reefer:reefer_static,
  scooter: scooter_static,
  ship: ship_static,
  start: start_static,
  tractor: tractor_static,
  trailer: trailer_static,
  train: train_static,
  tram: tram_static,
  truck: truck_static,
  van: van_static,
};

export const mapIconKey = (category) => {
  switch (category) {
    case 'offroad':
    case 'pickup':
      return 'car';
    case 'trolleybus':
      return 'bus';
    default:
      return mapIcons.hasOwnProperty(category) ? category : 'default';
  }
};

export const mapImages = {};

const mapPalette = createPalette({
  neutral: { main: grey[500] },
});

export default async () => {
  const background = await loadImage(backgroundSvg);
  mapImages.background = await prepareIcon(background);
  mapImages.direction = await prepareIcon(await loadImage(directionSvg));
  await Promise.all(Object.keys(mapIcons).map(async (category) => {
    const results = [];
    ['info', 'success', 'error', 'neutral'].forEach((color) => {
      results.push(loadImage(mapIcons[category]).then((icon) => {
        mapImages[`${category}-${color}`] = prepareIcon(background, icon, mapPalette[color].main);
      }));
    });
    await Promise.all(results);
  }));
};
