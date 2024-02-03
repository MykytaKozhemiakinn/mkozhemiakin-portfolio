export interface TechnologiesModel {
  mainTechnologies: MainTechnologyModel[];
  otherTechnologies: string[];
}

export interface MainTechnologyModel {
  fileName: string;
  name: string;
}
