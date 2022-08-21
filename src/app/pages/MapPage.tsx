import React from "react"
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
import {sampleMapData} from "./brewerySampleData";

export const MapPage = () => {
    return (
        <Container maxW={"100%"} textAlign={"start"}>
            <Heading size={"lg"}>MyBrewFinder</Heading>
            <br/>

            <Flex>
                <Map height={800} defaultCenter={[41.289, -86.627]} defaultZoom={11}>
                    <Marker width={50} anchor={[41.289, -86.627]}/>
                </Map>

                <Card w={"100%"} py={0}>
                    <InputGroup variant={"filled"} mb={5} mx={3}>
                        <InputLeftElement pointerEvents="none">
                            <Icon as={FiSearch} color="muted" boxSize="5"/>
                        </InputLeftElement>
                        <Input placeholder="City"/>
                    </InputGroup>

                    <Stack divider={<StackDivider/>} spacing="4">
                        {sampleMapData.map((brewery) => (
                            <Stack key={brewery.id} fontSize="sm" px="4" spacing="0.5">
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