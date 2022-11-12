import { Box, Heading, Input, Button, Flex, Image, Text, Link } from "@chakra-ui/react";



export function SavedJobs() {
    return <Box marginTop="20px"  w="30%" h="200px" boxShadow="lg" >



        <Text fontSize="lg" fontWeight="bold" align="left" ml="10px" h="40px" mt="15px">Saved Job(s)</Text>
        <hr />

        <Text fontSize="md" mt="40px">You have 0 saved job(s) till now.</Text>
        
        <Link color="blue.400">VIEW ALL</Link>




    </Box>
} 