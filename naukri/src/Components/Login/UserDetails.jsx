import { Box, Heading, Input, Button, Image, Text, Flex, Link } from "@chakra-ui/react";

export function UserDetails() {
  return <Box display="flex" m="auto" >



    <Box w="400px" ml="50px" h="400px" boxShadow="lg">
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0wODxC8jPNQdAj4NRUYgKFgE-uz-1sb19g&usqp=CAU" alt="" h="80px" w="80px" m="auto" borderRadius="50%" boxShadow="lg" mt="-40px" />
      <Text fontSize="lg" fontWeight="bold">Prateek Bhattacharya</Text>

      <Text>Full Stack Web Developer</Text>
      <Text>University of Lucknow</Text>

      <Box mt="20px">
        <Box display="flex" gap="150px" justifyContent="center"> <Text>Profile Completed</Text>  <Text>87%</Text>   </Box>
        <Box border="3px solid black" bg="black" w="50%" ml="47px" ></Box>
        <Box borderTop="1px" w="79%" ml="47px" ></Box>

      </Box>

      <Box display="flex" m="auto" w="77%" justifyContent="space-between" mt="20px">
        <Text>02 Details Missing</Text>
        <Link color="blue.400">ADD DETAILS</Link>
      </Box>

      <Button  w="80%" mt="20px"  bg="purple.400">UPDATE PROFILE</Button>

      <Text align="left" ml="40px" mt="20px"> Profile Performance</Text>

      <Box w="80%" m="auto" display="flex" justifyContent="space-between" mt="20px">
        <Box as="button"  >
          <Link color="blue.400" ml="-120px">1</Link> <br />
          <Link color="blue.400">Search Appearence</Link>
        </Box>
        <Box as="button">
        <Link color="blue.400" ml="-120px">0</Link> <br />
          <Link color="blue.400">Search Appearence</Link>
        </Box>
      </Box>

    </Box>
  </Box>

}