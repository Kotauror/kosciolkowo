import IChurchEstate, { PropertyType } from "./types";

const church_loretanska: IChurchEstate = {
  name: "Kościół na Loretańskiej",
  propertyType: PropertyType.CHURCH_OPEN_TO_PUBLIC,
  coordinates: [
    { lat: 50.06203, lng: 19.93035 },
    { lat: 50.06189, lng: 19.93037 },
    { lat: 50.06189, lng: 19.92967 },
    { lat: 50.06203, lng: 19.92966 }
  ]
};

const plot_loretanska: IChurchEstate = {
  name: "Działki Zakonu Kapucynów",
  propertyType: PropertyType.PLOT_OF_LAND,
  coordinates: [
    { lat: 50.06253, lng: 19.93027 },
    { lat: 50.06185, lng: 19.93045 },
    { lat: 50.06111, lng: 19.93043 },
    { lat: 50.06106, lng: 19.92922 },
    { lat: 50.06179, lng: 19.92926 },
    { lat: 50.06191, lng: 19.92931 },
    { lat: 50.06243, lng: 19.92925 }
  ]
};

const church_sw_anny: IChurchEstate ={
  name: "Kolegiata studencka sw. Anny",
  propertyType: PropertyType.CHURCH_OPEN_TO_PUBLIC,
  coordinates: [ 
  { lat: 50.06214, lng: 19.93358 },
  { lat: 50.06254, lng: 19.93397 },
  { lat: 50.06268, lng: 19.93366 },
  { lat: 50.06258, lng: 19.93357 },
  { lat: 50.06262, lng: 19.93345 },
  { lat: 50.06231, lng: 19.93316 }
]}

export default [plot_loretanska, church_loretanska, church_sw_anny];
