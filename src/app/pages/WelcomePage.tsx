import {Logo} from "../Logo";
import {Button, Code, Heading, VStack} from "@chakra-ui/react";
import * as React from "react";

export const WelcomePage = () => {
    return (
        <VStack spacing={8}>
            <Logo h="40vmin" mb={5} pointerEvents="none"/>
            <Heading>
                Welcome to <Code fontSize="xx-large">mybrewfinder</Code>!
            </Heading>
            <Button color={"orange.500"}>Find me a beer</Button>
        </VStack>
    )
}