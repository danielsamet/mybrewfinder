import * as React from "react"
import {ChakraProvider, Flex, theme,} from "@chakra-ui/react"
import {WelcomePage} from "./pages/WelcomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MapPage} from "./pages/MapPage";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Flex minH="100vh" flexDirection={"row"} textAlign="center" p={5}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<WelcomePage/>}/>
                    <Route path={"/map"} element={<MapPage/>}/>
                </Routes>
            </BrowserRouter>
        </Flex>
    </ChakraProvider>
)
