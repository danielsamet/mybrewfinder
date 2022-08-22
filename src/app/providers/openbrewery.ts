import {Brewery, sampleBreweryData} from "../pages/brewerySampleData";

export const getBreweriesByCity = (city: string): Brewery[] => {
    console.log(city);
    return sampleBreweryData;
}