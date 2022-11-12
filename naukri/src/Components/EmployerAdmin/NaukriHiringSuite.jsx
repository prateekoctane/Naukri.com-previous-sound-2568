import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";

export function NaukriHiringSuite() {
    return <Box border="1px" w="65%">
        <Text color="purple.600" fontSize="lg" fontWeight="bold" >NAUKRI HIRING SUITE FOR EMPLOYERS</Text>
        <Heading mt="20px">From Campus to Senior Level Hiring</Heading>
        <Heading fontSize="2xl" color="gray" mt="20px">Bouquet of solutions to meet all your hiring needs</Heading>
        <hr style={{marginTop: "10px"}} />
        <Text mt="10px">naukri | iimjobs | hirist | Firstnaukri | zwayam | doselect | eHire</Text>
        <Button mt="20px">Know More</Button>
        <Image src="/hiringSuite.png" alt="hiringSuite" display="block" m="auto" w="35%" mt="20px" />
    </Box>
}   