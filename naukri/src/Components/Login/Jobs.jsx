import { Box, Heading, Input, Button, Flex, Image, Text, Link } from "@chakra-ui/react";
// import { Icon } from "@chakra-ui/icons";
import { MdLocationOn, MdOutlineWork, MdFileCopy } from 'react-icons/md';
import { FaPenNib } from "react-icons/fa";
import { AiFillWallet } from "react-icons/ai";


export function Jobs() {
  return <Box w="auto" mt="20px" h="450px" boxShadow="lg" >

    <Text fontSize="lg" fontWeight="bold" align="left" ml="10px" h="40px" mt="15px">26 New Recommended Job</Text>
    <hr />
    <Text fontSize="lg"> Hiring Telecallers/Front Office/CRE/Counseller(Female) || Lucknow</Text>
    <Text fontSize="xs">Skilled India Placement Services</Text>

    <Box mt="20px" p="20px">

      <Flex justify="space-between" w="200px">
        <Flex alignItems="center"> <MdOutlineWork /> <Text align="left" >  0-5 years</Text></Flex>
        <Flex alignItems="center"> <MdLocationOn /> <Text align="left">   Lucknow</Text></Flex>
      </Flex>

      <Flex gap="2px" mt="10px"> <FaPenNib size="35px" /> <Text align="left"> Keyskillstelecaller,Bde,Outbound Calls,Front Desk,Front Office,Calling,Inbound Calls,Reception,Outbound Calling,Office Assistance,Communication Skills,
        counselor,Office Administration,Selling,Outbound Sales,Telecalling,Back Office,Telemarketing</Text></Flex>

      <Flex mt="10px"> <MdFileCopy size="25px" /><Text align="left">Follow up customer calls where necessary
        Should have knowledge of basic computers Should have good communication skills SIPS 8874422211 ...</Text> </Flex>

      <Flex alignItems="center" mt="20px"> <AiFillWallet /><Text align="left">Wallet90,000 - 250,000 PA</Text> </Flex>

      <Text align="left" mt="30px">---Posted byRanjan Mishra, 4 days ago</Text>

      <Link color="blue.300" mt="20px">VIEW ALL</Link>
    </Box>



  </Box>
} 