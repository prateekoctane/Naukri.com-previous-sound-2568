import { Box, Heading, Input, Button, Flex, Image, Text, Link } from "@chakra-ui/react";

  

export function RealTimeJobs() {
  return <Box mt="20px" boxShadow="lg"  w="400px" h="190px" pt="20px">

    
    
    <Box display="flex" justifyContent="center" gap="45px">
        <Text align="left" w="150px">Get real-time job updates & instant notifications only on the app!</Text>
        <Image src="https://static.naukimg.com/s/5/105/i/qrcode.png" alt="QR_code" w="100px" />

    </Box>
    <Box display="flex" justifyContent="center" gap="40px" >
        <Flex>
        <Text>Available On</Text>
        <Box w="8px"></Box>
        <Image src="https://static.naukimg.com/s/5/105/i/play-store.png" alt="google_play_store" w="20px" />
        <Box w="8px"></Box>
        <Image src="https://static.naukimg.com/s/5/105/i/app-store.png" alt="apple_store" w="20px" /> 
        </Flex>
        <Text>Scan to Download</Text>
    </Box>



  </Box>
} 