type Coordinates = {
  lat: number;
  lng: number;
}

export enum PropertyType {
  CHURCH_OPEN_TO_PUBLIC = 'CHURCH_OPEN_TO_PUBLIC',
  PLOT_OF_LAND = 'PLOT_OF_LAND',
  PRESBYTERY = 'PRESBYTERY',
  PARK_OPEN_TO_PUBLIC = 'PARK_OPEN_TO_PUBLIC',
  PARK_CLOSED_FOR_PUBLIC = 'PARK_CLOSED_FOR_PUBLIC'
}

interface IChurchEstate {
  name: string;
  coordinates: Coordinates[];
  propertyType: PropertyType; 
  moreInfo?: string;
}

export default IChurchEstate;
