export enum PropertyType {
  PLACE_OF_WORSHIP_OPEN_TO_PUBLIC = 'PLACE_OF_WORSHIP_OPEN_TO_PUBLIC',
  PLOT_OF_LAND = 'PLOT_OF_LAND',
  GREEN_AREA_OPEN_TO_PUBLIC = 'GREEN_AREA_OPEN_TO_PUBLIC',
  GREEN_AREA_CLOSED_FOR_PUBLIC = 'GREEN_AREA_CLOSED_FOR_PUBLIC',
  PLACE_OF_WORSHIP_CLOSED_FOR_PUBLIC = 'PLACE_OF_WORSHIP_CLOSED_FOR_PUBLIC'
}

export enum PropertyTags {
  CATOLIC_CHURCH = 'CATOLIC_CHURCH',
  ORTHODOX_CHURCH = 'ORTHODOX_CHURCH',
  EVANGELICAL_CHURCH = "EVANGELICAL_CHURCH",
  CLOISTER = 'CLOISTER',
  SYNAGOGUE = 'SYNAGOGUE',
  CEMETERY = "CEMETERY"
}

interface IEstate {
  geometry: {
    type: string;
    coordinates: number[][][];
  };
  properties: {
  name: string;
  propertyType: PropertyType; 
  address?: string;
  moreInfo?: string;
  tags?: PropertyTags[];
  isInnerElement: boolean;
  };
  type: string;
}

export default IEstate;
