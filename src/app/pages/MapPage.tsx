import React, {useState} from "react"
import {Map, Marker} from "pigeon-maps"
import {Container, Flex} from "@chakra-ui/react";
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
        <Container maxW={"100%"} textAlign={"start"}>
            <Flex gap={5}>
                <Map height={800} center={centerCoords} defaultZoom={11}>
                    {breweries.map(brewery =>
                        <Marker width={50} key={brewery.id}
                                anchor={[Number(brewery.latitude), Number(brewery.longitude)]}/>)}
                </Map>

                <Flex w={"40%"} flexDirection={"column"} justifyContent={"space-between"} h={"40em"}>
                    <BreweryList breweries={breweries} handleBreweryClick={handleBreweryClick}/>

                    {selectedBrewery && <BreweryDetails brewery={selectedBrewery}/>}
                </Flex>
            </Flex>
        </Container>
    )
}