import * as React from "react"
import {Box, ChakraProvider, Grid, theme,} from "@chakra-ui/react"
import {WelcomePage} from "./pages/WelcomePage";
import {ColorModeSwitcher} from "./ColorModeSwitcher";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Map} from "./pages/Map";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end"/>

                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<WelcomePage/>} />
                        <Route path={"/map"} element={<Map/>} />
                    </Routes>
                </BrowserRouter>
            </Grid>
        </Box>
    </ChakraProvider>
)
