import {Brewery} from "./brewerySampleData";
import {Card} from "../Components/Card";
import {Heading, HStack, Icon, Link} from "@chakra-ui/react";
import {FaArrowRight} from "react-icons/all";

type BreweryDetailsProps = {
    brewery: Brewery;
}

export const BreweryDetails = ({brewery}: BreweryDetailsProps) => {
    const clickHandle = () => {
        if (brewery.website_url)
            window.location.href = brewery.website_url;
    }

    return (
        <Card w={"100%"} minH={"4em"} bg={"#011627"} color={"white"} fontSize={"sm"} className='breweryDetailsCard'
              cursor={brewery.website_url ? "pointer" : "default"} onClick={clickHandle}>
            <Heading size={"md"}>{brewery.name}</Heading>

            {brewery.website_url &&
                <HStack spacing="3" mt={2}>
                    <Link color={"red.300"} fontWeight="bold" fontSize="lg"
                          sx={{
                              '.breweryDetailsCard:hover &': {
                                  textDecoration: "underline",
                              },
                          }}>
                        Visit their website
                    </Link>
                    <Icon color={"red.300"} as={FaArrowRight}/>
                </HStack>
            }
        </Card>
    )
}