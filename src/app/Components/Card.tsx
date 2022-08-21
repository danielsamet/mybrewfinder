import {Box, BoxProps, useColorModeValue} from "@chakra-ui/react";
import * as React from "react";

type CardProps = {
    p?: BoxProps["p"];
};

export function Card({p = 4, ...props}: CardProps & BoxProps) {
    return (
        <Box
            minH="3xs"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={p}
            {...props}
        />
    );
}
