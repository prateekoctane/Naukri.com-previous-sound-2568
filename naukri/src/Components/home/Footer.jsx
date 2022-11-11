import { Box, Text, Image, VStack, Link, Flex } from "@chakra-ui/react";

export function Footer() {
    return <Box m="auto" mt="70px" borderTop="1px" borderBottom="1px" mb="20px" w="90%" paddingTop="30px" paddingBottom="20px">
        

        <Box display="flex" m="auto" justifyContent="center" gap="100px">



            <Box >
                <Image src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="naukri.com" />
                <Text mt="20px" fontSize="lg">Contact Us</Text>
                <Flex gap="20px" justifyContent="center" mt="20px">

                    <Link href="https://www.facebook.com/Naukri"><Image boxSize="30px" src="https://static.naukimg.com/s/0/0/i/new-homepage/facebook.svg" alt="facebook" /></Link>
                    <Link href="https://instagram.com/naukridotcom/"><Image boxSize="30px" src="https://static.naukimg.com/s/0/0/i/new-homepage/instagram.svg" alt="instagram" /></Link>
                    <Link href="https://twitter.com/naukri"><Image boxSize="30px" src="https://static.naukimg.com/s/0/0/i/new-homepage/twitter.svg" alt="twitter" /></Link>
                    <Link href="http://www.linkedin.com/company/naukri.com"><Image boxSize="30px" src="https://static.naukimg.com/s/0/0/i/new-homepage/linkedin.svg" alt="linkedIn" /></Link>
                </Flex>
            </Box>

            <Box display="flex" gap="20px"  w="520px" >
                <VStack >
                    <Link href=""> <Text align="left" w="160px" fontSize="lg" > About Us  </Text> </Link>
                    <Link href=""> <Text align="left" w="160px" fontSize="lg" > Careers  </Text> </Link>
                    <Link href=""> <Text align="left" w="160px" fontSize="lg" > Employer Home  </Text> </Link>
                    <Link href=""> <Text align="left" w="160px" fontSize="lg" > Sitemap  </Text> </Link>
                </VStack>
                <VStack>
                    <Link href=""> <Text align="left" w="160px" fontSize="lg" > Help Center  </Text> </Link>
                    <Link href=""> <Text align="left" w="160px" fontSize="lg" > Summons/Notice  </Text> </Link>
                    <Link href=""> <Text align="left" w="160px" fontSize="lg" > Grievances  </Text> </Link>
                    <Link href=""> <Text align="left" w="160px" fontSize="lg" > Report issue  </Text> </Link>
                </VStack>
                <VStack>
                    <Link href=""> <Text align="left" w="160px" fontSize="lg" > Privacy policy </Text> </Link>
                    <Link href=""> <Text align="left" w="160px" fontSize="lg" > Terms & conditions  </Text> </Link>
                    <Link href=""> <Text align="left" w="160px" fontSize="lg" > Fraud alert  </Text> </Link>
                    <Link href=""> <Text align="left" w="160px" fontSize="lg" > Trust & safety  </Text> </Link>
                </VStack>

            </Box>


            <Box >
                <Text fontSize="lg" fontWeight="bold">Apply on the Go</Text>
                <Text>Get real time job updates on our App</Text>
                <Flex mt="20px">
                    <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png" alt="google_play_store" />
                    <Image src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png" alt="apple_store" />
                </Flex>
            </Box>

        </Box>

    
    </Box>
}