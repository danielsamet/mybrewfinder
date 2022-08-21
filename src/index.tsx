import React, {StrictMode} from "react";
import {App} from "./app/App";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import {theme} from "./theme";

import {createRoot} from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <App/>
        </ChakraProvider>
    </StrictMode>
);
