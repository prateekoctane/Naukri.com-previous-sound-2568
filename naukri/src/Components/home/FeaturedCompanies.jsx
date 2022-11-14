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

        <Box borderRadius="20px" boxShadow="lg" as="button" h="327px" minWidth="200px"  p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/240936.gif" />
            <Text fontSize="lg">JP Morgan Chase Bank</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in Financial services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box borderRadius="20px" boxShadow="lg" as="button" minWidth="200px" h="327px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1744734.gif" />
            <Text fontSize="lg">Luxoft</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>DXC Technology Company</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box borderRadius="20px" boxShadow="lg" as="button" minWidth="200px" h="327px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/18850.gif" />
            <Text fontSize="lg">Oracle</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Cloud technology Company since 1977</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box borderRadius="20px" boxShadow="lg" as="button" minWidth="200px" h="327px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/5462642.gif" />
            <Text fontSize="lg">Kundryl</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>A digital first approach to IT management</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box borderRadius="20px" boxShadow="lg" as="button" minWidth="200px" h="327px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1186200.gif" />
            <Text fontSize="lg">Virtusa</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>IT service company since 1996</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box borderRadius="20px" boxShadow="lg" as="button" minWidth="200px" h="327px"  p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/21746.gif" />
            <Text fontSize="lg">FIS</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box borderRadius="20px" boxShadow="lg" as="button" minWidth="200px" h="327px"  p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/4654342.gif" />
            <Text fontSize="lg">CBTS</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Leading Technology Provider</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box borderRadius="20px" boxShadow="lg" as="button" minWidth="200px" h="327px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/42932.gif" />
            <Text fontSize="lg">Genpact</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global professional services in firm</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box borderRadius="20px" boxShadow="lg" as="button" minWidth="200px" h="327px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/419316.gif" />
            <Text fontSize="lg">Synechron</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>IT Company</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box borderRadius="20px" boxShadow="lg" as="button" minWidth="200px" h="327px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1527726.gif" />
            <Text fontSize="lg">Incedo</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>US based consulting and technology firm</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box borderRadius="20px" boxShadow="lg" as="button" minWidth="200px" h="327px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/4614431.gif" />
            <Text fontSize="lg">Netcracker</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in BSS, OSS and cloud</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>
      </div>

      <Button ml="-1200px" zIndex="2" mt="-450px" position="relative" onClick={swipeLeft} bg="yellow.400" > <ChevronLeftIcon/> </Button>

        <Box border="1px solid white" w="50%" m="auto"></Box>
        
        <Button mr="-1200px" zIndex="2" mt="-500px" position="relative" onClick={swipeRight} bg="yellow.400" > <ChevronRightIcon/> </Button>
    </div>
}

