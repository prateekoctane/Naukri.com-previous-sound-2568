import { Box, Heading, Text, Button, Image, HStack, VStack, Input, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export function NaukriApp() {



    return <Box display="flex" m="auto" mt="100px" border="1px solid black" h="350px" w="90%" justifyContent="space-between" bg="blue.300">

        <Box border="1px solid black" w="30%" h="200px" mt="100px">
            <Heading align="left">10M+ users are on the Naukri app</Heading>

            <Text align="left">Get real-time job updates & more!</Text>

            <Box display="flex" alignItems="center" borderRadius="50px" > <Input placeholder="Enter Mobile Number" w="250px" ml="20px" border="0px solid white" outline="false" />
                <Button borderRadius="50px" w="150px" h="50px" mr="20px" bg="purple.600" color="gray.50">Get Link</Button> </Box>

            <Flex justifyContent="center">
                <Image src="https://static.naukimg.com/s/0/0/i/download-app-link/Gplay.png" alt="google_play_store" />
                <Image src="https://static.naukimg.com/s/0/0/i/download-app-link/Appstore.png" alt="apple_store" />
            </Flex>

        </Box>
        <Box border="1px">
            <Image src="https://static.naukimg.com/s/0/0/i/download-app-link/qr-code.svg" alt="QR_code" w="200px" mt="100px"/>
            <Text>Scan to Download</Text>
        </Box>
        <Box>

            <Image src="https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroup.png" alt="user_app"/>
        </Box>


    </Box>
}

