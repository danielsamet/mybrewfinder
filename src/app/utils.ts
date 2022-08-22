import {Brewery} from "./pages/brewerySampleData";

export const getCenterCoords = (breweries: Brewery[]): [number, number] => {
    const filteredBreweries = breweries.filter(brewery => brewery.longitude && brewery.latitude)
    const centerLatitude = filteredBreweries.reduce((total, next) => total + Number(next.latitude), 0) / filteredBreweries.length;
    const centerLongitude = filteredBreweries.reduce((total, next) => total + Number(next.longitude), 0) / filteredBreweries.length;

    return [centerLatitude, centerLongitude]
}
