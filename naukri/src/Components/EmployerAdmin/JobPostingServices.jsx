import { Box,Heading, Text, Flex, Button } from "@chakra-ui/react";
import { FcClock, FcBusinessContact, FcConferenceCall, FcCalendar } from "react-icons/fc";

export function JobPostingServices(){
    return <Box p="100px">
        <Heading fontSize="2xl" w="50%" align="left">Naukri Job Posting Services - Get Quality Applies</Heading>
        <Text align="left" w="70%">Reach out to millions of jobseekers and hire quickly with our fast and easy job posting services.</Text>
       
     <Flex justifyContent="space-between" w="90%"> 
     <Flex alignItems="center" mt="20px"> <FcClock/> <Text ml="5px"> 2 Minutes to Post</Text></Flex>
       <Flex alignItems="center" mt="20px"> <FcBusinessContact/> <Text ml="5px"> Unlimited Applies</Text></Flex>
     </Flex>
     <Flex justifyContent="space-between" w="90%"> 
     <Flex alignItems="center" mt="20px"> <FcConferenceCall/> <Text ml="5px"> Attract Audience</Text></Flex>
       <Flex alignItems="center" mt="20px" ml="-10px"> <FcCalendar/> <Text ml="5px" > 30 Day Visibility</Text></Flex>
     </Flex>
    <Box align="left" mt="20px">

    <Button bg="purple.600" > Buy Now</Button>
    </Box>
    
    </Box>
}