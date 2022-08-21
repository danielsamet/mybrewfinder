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

                <Card w={"40%"} py={0}>
                    <InputGroup variant={"filled"} mb={5} mx={3}>
                        <InputLeftElement pointerEvents="none">
                            <Icon as={FiSearch} color="muted" boxSize="5"/>
                        </InputLeftElement>
                        <Input placeholder="City"/>
                    </InputGroup>

                    <Stack divider={<StackDivider/>} spacing="1">
                        {sampleMapData.map((brewery) => (
                            <Stack key={brewery.id} fontSize="sm" p="4" spacing="0.5" cursor={"pointer"}
                                   onClick={() => console.log(brewery.name)}
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