import { Box, Heading, Text, Button, Image, HStack, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export function DiscoverJobs() {



    return <Box mt="100px">

      <Box border="1px" w="90%" m="auto" h="400px" bg="pink.100">

        <Box ml="100px" mt="30px">
            <Image src="https://static.naukimg.com/s/0/0/i/role-collection.png" atl="man" boxSize="150px"/>
            <Heading w="350px" align="left">Discover jobs across popular roles</Heading>
            <Text align="left" w="200px">Select a role and we'll show you relevant jobs for it!</Text>
        </Box>
        
      </Box>  
      <Box border="1px solid blue" w="40%" h="500px" ml="700px" zIndex="1" mt="-450px" bg="green.100"></Box>
     
    </Box>
}

