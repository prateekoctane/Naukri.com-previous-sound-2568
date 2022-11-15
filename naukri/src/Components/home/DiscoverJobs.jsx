import { Box, Heading, Text, Button, Image, HStack, VStack, Grid } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import styles from "./styles/DiscoverJobs.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRef } from "react";

export function DiscoverJobs() {

  const swipe = useRef(0);

  function swipeLeft() {

    swipe.current.scrollLeft -= 600;
  }

  function swipeRight() {

    swipe.current.scrollLeft += 600;

  }

  return <Box mt="100px">

    <Box boxShadow="lg" borderRadius="10px" w="90%" m="auto" h="400px" >

      <Box ml="100px" mt="30px">
        <Image src="https://static.naukimg.com/s/0/0/i/role-collection.png" atl="man" boxSize="150px" />
        <Heading w="350px" align="left">Discover jobs across popular roles</Heading>
        <Text align="left" w="200px">Select a role and we'll show you relevant jobs for it!</Text>
      </Box>

    </Box>
    {/* display="flex" p="40px 0px 40px 0px" gap="50px" */}
    {/* <Box border="1px solid blue" w="40%" h="500px" ml="700px" zIndex="1" mt="-450px" bg="green.100"></Box> */}
    <div className={styles.btnContainer} ref={swipe}>

      <Box display="flex" p="40px 0px 40px 0px" gap="50px" boxShadow="lg" >
        <Grid minWidth="600px" gap="20px" templateColumns="repeat(2,1fr)" w="70%"  h="400px" p="30px">

          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Mobile App Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Front End Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Technical Lead <Text>20K+ Jobs</Text> </Button>
        </Grid>

        <Grid minWidth="600px" gap="20px" templateColumns="repeat(2,1fr)" w="70%"  h="400px" p="30px">

          <Button h="90px" noOfLines={2}>Cyber Security <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Technical Architect <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Business Analyst <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Data Scientist <Text>20K+ Jobs</Text> </Button>
        </Grid>

        <Grid minWidth="600px" gap="20px" templateColumns="repeat(2,1fr)" w="70%"  h="400px" p="30px">

          <Button h="90px" noOfLines={2}>Product Manager <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Reserch Analyst <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Functional Consultant <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Branch Manager<Text>20K+ Jobs</Text> </Button>
        </Grid>
      </Box>
    </div>


    <Button ml="-100px" zIndex="2" mt="-450px" position="relative"  bg="yellow.400" onClick={swipeLeft}> <ChevronLeftIcon /> </Button>

    <Box border="1px solid white" w="50%" m="auto"></Box>

    <Button  mr="-1100px" zIndex="2" mt="-500px" position="relative"  bg="yellow.400" onClick={swipeRight}> <ChevronRightIcon /> </Button>

  </Box>
}

