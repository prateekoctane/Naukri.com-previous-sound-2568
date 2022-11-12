import { Box,Heading, Text, Flex, Button } from "@chakra-ui/react";
import { FcClock, FcBusinessContact, FcConferenceCall, FcCalendar, FcSearch, FcCallback, FcCheckmark } from "react-icons/fc";

export function BestTalent(){
    return <Box p="100px">
        <Heading fontSize="2xl" w="85%" align="left">Search Best Talent with Naukri’s Resume Database Access - Resdex</Heading>
        <Text align="left" w="80%">Source candidates from Resdex − India’s largest Talent Pool and find the perfect talent for your organisation.</Text>
       
     <Flex justifyContent="space-between" w="90%"> 
     <Flex alignItems="center" mt="20px"> <FcBusinessContact/> <Text ml="5px"> Over 8.66 crore Jobseekers</Text></Flex>
       <Flex alignItems="center" mt="20px"> <FcSearch/> <Text ml="5px"> Smart Talent Search</Text></Flex>
     </Flex>
     <Flex justifyContent="space-between" w="90%"> 
     <Flex alignItems="center" mt="20px"> <FcCallback/> <Text ml="5px"> Contact Directly</Text></Flex>
       <Flex alignItems="center" mt="20px" ml="-10px"> <FcCheckmark/> <Text ml="5px" > Verified Candidates</Text></Flex>
     </Flex>
    <Box align="left" mt="20px">

    <Button bg="purple.600" > Buy Now</Button>
    </Box>
    
    </Box>
}