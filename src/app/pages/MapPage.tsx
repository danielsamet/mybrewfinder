import React, {useEffect, useState} from "react"
import {Map, Marker} from "pigeon-maps"
import {Flex, useBreakpointValue} from "@chakra-ui/react";
import {Brewery, sampleBreweryData} from "./brewerySampleData";
import {getCenterCoords} from "../utils";
import {BreweryList} from "./BreweryList";
import {BreweryDetails} from "./BreweryDetails";
import {getBreweriesByCity} from "../providers/openbrewery";

export const MapPage = () => {
    const [breweries, setBreweries] = useState<Brewery[]>(sampleBreweryData);
    const [centerCoords, setCenterCoords] = useState<[number, number]>(getCenterCoords(breweries))
    const [selectedBrewery, setSelectedBrewery] = useState<Brewery | undefined>();
    const [citySearchValue, setCitySearchValue] = useState<string>('Chicago');

    const handleBreweryClick = (brewery: Brewery) => {
        setCenterCoords([Number(brewery.latitude), Number(brewery.longitude)]);
        setSelectedBrewery(brewery);
    }

    useEffect(() => {
        const timeOutId = setTimeout(async () => setBreweries(
            (await getBreweriesByCity(citySearchValue)).filter(brewery => brewery.latitude && brewery.longitude)
        ), 500);
        return () => clearTimeout(timeOutId);
    }, [citySearchValue])

    useEffect(() => {
        setCenterCoords(getCenterCoords(breweries))
    }, [breweries])

    return (
        <Flex flexDirection={"row"} flexGrow={1} w={"100%"} gap={5} my={"auto"} textAlign={"start"}
              flexWrap={useBreakpointValue({base: "wrap", md: "nowrap"})}>
            <Map height={800} center={centerCoords} defaultZoom={11}>
                {breweries.map(brewery =>
                    <Marker width={50} key={brewery.id}
                            anchor={[Number(brewery.latitude), Number(brewery.longitude)]}/>)}
            </Map>

            <Flex w={useBreakpointValue({base: "100%", md: "40%"})} gap={5}
                  flexDirection={useBreakpointValue({base: "column", sm: "row", md: "column"})} justifyContent={"space-between"}>
                <BreweryList breweries={breweries} handleBreweryClick={handleBreweryClick} searchValue={citySearchValue}
                             searchValueSetter={setCitySearchValue}/>

                {selectedBrewery && <BreweryDetails brewery={selectedBrewery}/>}
            </Flex>
        </Flex>
    )
}