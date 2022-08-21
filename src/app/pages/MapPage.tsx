import React, {useState} from "react"
import {Map, Marker} from "pigeon-maps"
import {Flex} from "@chakra-ui/react";
import {Brewery, sampleBreweryData} from "./brewerySampleData";
import {getCenterCoords} from "../utils";
import {BreweryList} from "./BreweryList";
import {BreweryDetails} from "./BreweryDetails";

export const MapPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [breweries, _setBreweries] = useState<Brewery[]>(sampleBreweryData);
    const [centerCoords, setCenterCoords] = useState<[number, number]>(getCenterCoords(breweries))
    const [selectedBrewery, setSelectedBrewery] = useState<Brewery | undefined>();

    const handleBreweryClick = (brewery: Brewery) => {
        setCenterCoords([Number(brewery.latitude), Number(brewery.longitude)]);
        setSelectedBrewery(brewery);
    }

    return (
        <Flex flexDirection={"row"} flexGrow={1} w={"100%"} gap={5} my={"auto"} textAlign={"start"}>
            <Map height={800} center={centerCoords} defaultZoom={11}>
                {breweries.map(brewery =>
                    <Marker width={50} key={brewery.id}
                            anchor={[Number(brewery.latitude), Number(brewery.longitude)]}/>)}
            </Map>

            <Flex w={"40%"} flexDirection={"column"} justifyContent={"space-between"}>
                <BreweryList breweries={breweries} handleBreweryClick={handleBreweryClick}/>

                {selectedBrewery && <BreweryDetails brewery={selectedBrewery}/>}
            </Flex>
        </Flex>
    )
}