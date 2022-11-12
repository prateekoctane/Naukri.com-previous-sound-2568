import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { FcApproval } from "react-icons/fc";

export function RecruiterApp() {
    return <Box w="80%" m="auto" mt="50px">
        <Flex boxShadow='lg'>

            <Box w="70%" align="left" p="80px">
                <Text fontSize="lg" color="purple.600" fontWeight="bold" >INTRODUCING THE PRODUCTIVITY ENHANCEMENT</Text>
                <Heading fontSize="2xl" color="gray" mt="20px">Naukri Recruiter App</Heading>
                <Flex alignItems="center" mt="20px"> <FcApproval/> <Text>Increase your productivity by calling candidates directly from the app</Text> </Flex>
                <Flex alignItems="center" mt="20px"> <FcApproval/> <Text>Reduce follow ups and increase jobseeker connect rate by specifying the calling intent</Text> </Flex>
                <Flex alignItems="center" mt="20px"> <FcApproval/> <Text>Search candidates on the go through Resdex in App</Text> </Flex>
                <Flex alignItems="center" mt="20px"> <FcApproval/> <Text>Scan phone numbers from anywhere and call directly from the App</Text> </Flex>
                <Flex alignItems="center" mt="20px"> <FcApproval/> <Text>Get instant notifications on job applies</Text> </Flex>

                <Flex mt="20px">
                    <Image src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/mnr-promo-banner-wdgt/v1/components/AppPromoBanner/assets/google-play-store.ee6bf9a9.png" alt="google_playStore"  w="20%"/>
                    <Image src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/mnr-promo-banner-wdgt/v1/components/AppPromoBanner/assets/apple-play-store.2232e88b.png" alt="apple_store" w="20%" />
                </Flex>

            </Box>

            <Box w="30%" mt="50px">

                <Image src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/mnr-promo-banner-wdgt/v1/components/AppPromoBanner/assets/promo-banner.a5c8b370.png" alt="mobile" />
            </Box>
        </Flex >
    </Box>
}