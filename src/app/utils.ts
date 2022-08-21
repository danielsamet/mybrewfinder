import {Brewery} from "./pages/brewerySampleData";

export const getCenterCoords = (breweries: Brewery[]): [number, number] => {
    const centerLatitude = breweries.reduce((total, next) => total + Number(next.latitude), 0) / breweries.length;
    const centerLongitude = breweries.reduce((total, next) => total + Number(next.longitude), 0) / breweries.length;

    return [centerLatitude, centerLongitude]
}
