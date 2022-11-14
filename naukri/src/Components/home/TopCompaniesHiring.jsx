import { Box, Heading, Text, Button, Image, HStack, VStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import styles from "./styles/TopCompaniesHiring.module.css";
import { useRef } from "react";
export function TopCompaniesHiring() {

    const swipe = useRef(0);

    function swipeLeft() {

        swipe.current.scrollLeft -= 350;
    }

    function swipeRight() {

        swipe.current.scrollLeft += 350;

    }

    return <div className={styles.container}>
        <Heading >Top companies hiring now</Heading>

        <div className={styles.btnContainer} ref={swipe}>

            <Button minWidth="200px" h="100px"> <VStack> <Text>MNC's</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/53626.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/508922.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4605319.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/2041470.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Edtech</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4630679.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1511588.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/2933520.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/5598606.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>HealthCare</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4659013.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/250854.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/722108.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4731541.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Unicorns</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/509622.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1715696.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1027760.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3341542.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/5211308.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1084950.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4614413.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1830172.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>B2C</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4128030.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4637905.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/96418.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/478960.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Manufacturing</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4585477.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/2373670.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4638057.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4608837.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Fortune 500</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/40604.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/233602.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/233602.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4579363.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Product</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/5618378.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/718384.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4685055.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Banking & Finance</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4925617.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4925617.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/2395268.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4582763.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Hospitality</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/213378.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4582483.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/2977012.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/943918.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>FinTech</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4610115.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4585385.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4102496.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1535428.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>FMCG & Retail</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/289380.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/4600343.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/147040.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/24912.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Startups</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/750172.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1747160.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/5961224.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3818654.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
        </div>

        <Button ml="-1200px" zIndex="2" mt="-175px" position="relative" onClick={swipeLeft} bg="yellow.400" > <ChevronLeftIcon/> </Button>

        <Box border="1px solid white" w="50%" m="auto"></Box>
        
        <Button mr="-1200px" zIndex="2" mt="-230px" position="relative" onClick={swipeRight} bg="yellow.400" > <ChevronRightIcon/> </Button>
    </div>
}