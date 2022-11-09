import { Box, Heading } from "@chakra-ui/react";
import { Jobs } from "./Jobs";
import { Companies } from "./Companies";
import { Services } from "./Services";
import { LoginButton } from "./LoginButton";
import { RegisterButton } from "./RegisterButton";
import { ForEmployers } from "./ForEmployers";
import { NaukriImage } from "./NaukriImage";
export function Navbar() {
    return (<Box display="flex" border="1px" overflow="hidden" w="100%">

        <NaukriImage/>

        <Box display="flex" marginLeft="200px" justifyContent="space-between" border="1px" w="250px">
            <Jobs />
            <Companies />
            <Services />
        </Box>

        <Box display="flex" marginLeft="500px" border="1px" w="200px" justifyContent="space-around">
            <LoginButton />
            <RegisterButton />
        </Box>

        <Box>
            <ForEmployers />
        </Box>



    </Box>)
}