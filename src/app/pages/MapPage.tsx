import React, {useState} from "react"
import {Map, Marker} from "pigeon-maps"
import {
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    StackDivider,
    Text
} from "@chakra-ui/react";
import {FiSearch} from "react-icons/all";
import {Card} from "../Components/Card";
import {Brewery, sampleBreweryData} from "./brewerySampleData";
import {getCenterCoords} from "../utils";

export const MapPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [breweries, _setBreweries] = useState<Brewery[]>(sampleBreweryData);
    const [centerCoords, setCenterCoords] = useState<[number, number]>(getCenterCoords(breweries))

    const handleBreweryClick = (latitude: string, longitude: string) => {
        setCenterCoords([Number(latitude), Number(longitude)]);
    }

    return (
        <Container maxW={"100%"} textAlign={"start"}>
            <Heading size={"lg"}>MyBrewFinder</Heading>
            <br/>

            <Flex>
                <Map height={800} center={centerCoords} defaultZoom={11}>
                    {breweries.map(brewery => <Marker width={50} key={brewery.id}
                                                      anchor={[Number(brewery.latitude), Number(brewery.longitude)]}/>)}
                </Map>

                <Card w={"40%"} py={0}>
                    <InputGroup variant={"filled"} mb={5} mx={3}>
                        <InputLeftElement pointerEvents="none">
                            <Icon as={FiSearch} color="muted" boxSize="5"/>
                        </InputLeftElement>
                        <Input placeholder="City"/>
                    </InputGroup>

                    <Stack divider={<StackDivider/>} spacing="1">
                        {breweries.map((brewery) => (
                            <Stack key={brewery.id} fontSize="sm" p="4" spacing="0.5" cursor={"pointer"}
                                   onClick={() => handleBreweryClick(brewery.latitude, brewery.longitude)}
                                   sx={{
                                       "_hover": {
                                           bg: "blackAlpha.200"
                                       }
                                   }}>
                                <Box>
                                    <Text fontWeight="medium" color="emphasized">
                                        {brewery.name}
                                    </Text>

                                    <Text color="subtle">{brewery.street} • {brewery.city} • {brewery.country}</Text>
                                </Box>
                            </Stack>
                        ))}
                    </Stack>
                </Card>
            </Flex>
        </Container>
    )
}