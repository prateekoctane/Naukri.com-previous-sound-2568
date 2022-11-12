import { Box, Heading, Input, Button, Flex, Image, Text, Link } from "@chakra-ui/react";



export function FAQ() {
    return <Box marginTop="20px"  w="33.5%" ml="5px" h="200px" boxShadow="lg">



        <Text fontSize="lg" fontWeight="bold" align="left" ml="10px" h="40px" mt="15px">FAQ's</Text>
        <hr />

        <Text fontSize="md" mt="40px">You have 0 saved job(s) till now.</Text>
        <Text mt="20px"> <Link color="blue.400">Click Here</Link> for frequently asked questions. </Text>



    </Box>
} 