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

            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
            <Button minWidth="200px" h="100px"> <VStack> <Text>Internet</Text> <Text fontSize="xs">139 are actively Hiring</Text>
                <HStack>

                    <Image src="https://img.naukimg.com/logo_images/groups/v1/558162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1122782.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/3923162.gif" w="20px" />
                    <Image src="https://img.naukimg.com/logo_images/groups/v1/1407234.gif" w="20px" />
                </HStack>
            </VStack>
            </Button>
        </div>

        <Button ml="-1200px" zIndex="2" mt="-175px" position="relative" onClick={swipeLeft} bg="yellow.400" > <ChevronLeftIcon/> </Button>

        <Box border="1px solid white" w="50%" m="auto"></Box>
        
        <Button mr="-1200px" zIndex="2" mt="-230px" position="relative" onClick={swipeRight} bg="yellow.400" > <ChevronRightIcon/> </Button>
    </div>
}