import { Box, Heading, Text, Button, Image, HStack, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import styles from "./styles/FeaturedCompanies.module.css";

export function FeaturedCompanies() {

    const swipe = useRef(0);

    function swipeLeft() {

        swipe.current.scrollLeft -= 350;
    }

    function swipeRight() {

        swipe.current.scrollLeft += 350;

    }


    return <div className={styles.container}>
        <Heading>Featured companies actively hiring</Heading>
        
      <div className={styles.cardContainer} ref={swipe}>

        <Box as="button" minWidth="200px"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button" minWidth="200px"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button" minWidth="200px"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button" minWidth="200px"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button" minWidth="200px"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button" minWidth="200px"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button" minWidth="200px"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button" minWidth="200px"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button" minWidth="200px"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button" minWidth="200px"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button" minWidth="200px"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>
      </div>

      <Button ml="-1200px" zIndex="2" mt="-450px" position="relative" onClick={swipeLeft} bg="yellow.400" > <ChevronLeftIcon/> </Button>

        <Box border="1px solid white" w="50%" m="auto"></Box>
        
        <Button mr="-1200px" zIndex="2" mt="-500px" position="relative" onClick={swipeRight} bg="yellow.400" > <ChevronRightIcon/> </Button>
    </div>
}

