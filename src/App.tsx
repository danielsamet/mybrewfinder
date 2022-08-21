import * as React from "react"
import {Box, Button, ChakraProvider, Code, Grid, Heading, theme, VStack,} from "@chakra-ui/react"
import {ColorModeSwitcher} from "./ColorModeSwitcher"
import {Logo} from "./Logo"

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end"/>
                <VStack spacing={8}>
                    <Logo h="40vmin" mb={5} pointerEvents="none"/>
                    <Heading>
                        Welcome to <Code fontSize="xx-large">mybrewfinder</Code>!
                    </Heading>
                    <Button color={"orange.500"}>Find me a beer</Button>
                </VStack>
            </Grid>
        </Box>
    </ChakraProvider>
)
