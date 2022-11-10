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

    <Box border="1px" w="90%" m="auto" h="400px" bg="pink.100">

      <Box ml="100px" mt="30px">
        <Image src="https://static.naukimg.com/s/0/0/i/role-collection.png" atl="man" boxSize="150px" />
        <Heading w="350px" align="left">Discover jobs across popular roles</Heading>
        <Text align="left" w="200px">Select a role and we'll show you relevant jobs for it!</Text>
      </Box>

    </Box>
    {/* display="flex" p="40px 0px 40px 0px" gap="50px" */}
    {/* <Box border="1px solid blue" w="40%" h="500px" ml="700px" zIndex="1" mt="-450px" bg="green.100"></Box> */}
    <div className={styles.btnContainer} ref={swipe}>

      <Box display="flex" p="40px 0px 40px 0px" gap="50px">
        <Grid minWidth="600px" gap="20px" templateColumns="repeat(2,1fr)" w="70%" border="1px" h="400px" p="30px">

          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
        </Grid>

        <Grid minWidth="600px" gap="20px" templateColumns="repeat(2,1fr)" w="70%" border="1px" h="400px" p="30px">

          <Button h="90px" noOfLines={2}>Full Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
        </Grid>

        <Grid minWidth="600px" gap="20px" templateColumns="repeat(2,1fr)" w="70%" border="1px" h="400px" p="30px">

          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
          <Button h="90px" noOfLines={2}>Full Stack Developer <Text>20K+ Jobs</Text> </Button>
        </Grid>
      </Box>
    </div>


    <Button ml="-100px" zIndex="2" mt="-450px" position="relative"  bg="yellow.400" onClick={swipeLeft}> <ChevronLeftIcon /> </Button>

    <Box border="1px solid white" w="50%" m="auto"></Box>

    <Button  mr="-1100px" zIndex="2" mt="-500px" position="relative"  bg="yellow.400" onClick={swipeRight}> <ChevronRightIcon /> </Button>

  </Box>
}

