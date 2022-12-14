import {Box, Icon, Input, InputGroup, InputLeftElement, Stack, StackDivider, Text} from "@chakra-ui/react";
import {FiSearch} from "react-icons/all";
import {Card} from "../Components/Card";
import React from "react";
import {Brewery} from "./brewerySampleData";

type BreweryListProps = {
    breweries: Brewery[];
    handleBreweryClick: (brewery: Brewery) => void;
    searchValue: string;
    searchValueSetter: (city: string) => void;
}

export const BreweryList = ({breweries, handleBreweryClick, searchValue, searchValueSetter}: BreweryListProps) => {
    return (
        <Card w={"100%"} bg={"#011627"} color={"white"}>
            <InputGroup mb={5}>
                <InputLeftElement pointerEvents="none">
                    <Icon as={FiSearch} color="muted" boxSize="5"/>
                </InputLeftElement>
                <Input placeholder="City"
                       value={searchValue}
                       onChange={
                           (event: React.ChangeEvent<HTMLInputElement>) => searchValueSetter(event.currentTarget.value)
                       }/>
            </InputGroup>

            <Stack divider={<StackDivider/>} spacing="1" maxH={"20em"} overflowY={"scroll"}>
                {breweries.map((brewery) => (
                    <Stack key={brewery.id} fontSize="sm" p="4" spacing="0.5" cursor={"pointer"}
                           onClick={() => handleBreweryClick(brewery)}
                           sx={{
                               "_hover": {
                                   bg: "blackAlpha.200"
                               }
                           }}>
                        <Box>
                            <Text fontWeight="medium">
                                {brewery.name}
                            </Text>

                            <Text color="subtle">{brewery.street} • {brewery.city} • {brewery.country}</Text>
                        </Box>
                    </Stack>
                ))}
            </Stack>
        </Card>
    )
}