import {Brewery} from "../pages/brewerySampleData";

export const getBreweriesByCity = async (city: string): Promise<Brewery[]> => {

    const getByCity = fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
        .then(res => res.json())

    return await Promise.resolve(getByCity);
}