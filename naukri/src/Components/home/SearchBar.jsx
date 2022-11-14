import { Box, Text, Heading, Image, Input, Select, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function SearchBar() {
    return <Box mt="50px" h="auto">
        <Heading>Find your dream job now</Heading>

        <Text fontSize="lg" marginTop="20px" color="blue.600">5 lakh+ jobs for you to explore</Text>

        <Box display="flex" w="75%" margin="auto"  h="70px" mt="50px" alignItems="center" boxShadow="lg" borderRadius="50px">

          <SearchIcon boxSize="30px" ml="20px" color="gray" />

          <Box display="flex" w="70%" margin="auto" bt="20px">

            <Input placeholder="Enter skills | designations | companies" border="none"></Input>
            <Select placeholder='Select Experience' border="none">
                <option value='1'>1 years</option>
                <option value='2'>2 years</option>
                <option value='3'>3 years</option>
                <option value='4'>4 years</option>
                <option value='5'>5 years</option>
                <option value='6'>6 years</option>
                <option value="7">7 years</option>
                <option value="8">8 years</option>
                <option value="9">9 years</option>
                <option value="10">10 years</option>
                <option value="11">11 years</option>
                <option value="12">12 years</option>
                <option value="13">13 years</option>
                <option value="14">14 years</option>
                <option value="15">15 years</option>
                <option value="16">16 years</option>
                <option value="17">17 years</option>
                <option value="18">18 years</option>
                <option value="19">19 years</option>
                <option value="20">20 years</option>
                <option value="21">21 years</option>
                <option value="22">22 years</option>
                <option value="23">23 years</option>
                <option value="24">24 years</option>
                <option value="25">25 years</option>
                <option value="26">26 years</option>
                <option value="27">27 years</option>
                <option value="28">28 years</option>
                <option value="29">29 years</option>
                <option value="30">30 years</option>
            </Select>
            <Input placeholder="Enter Location" border="none"></Input>
          </Box>
          
          <Button borderRadius="50px" w="150px" h="50px" mr="20px" bg="purple.600" color="gray.50">Search</Button>
        </Box>

        {/* job category buttons */}
         
        <Box mt="70px">
            <Button variant='outline' w="200px" h="65px" borderRadius="20px 0 20px"> <Image boxSize="35px" mr="20px" position="relative" src="https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg"/> Remote</Button>
            <Button variant='outline' w="200px" h="65px" borderRadius="20px 0 20px"> <Image boxSize="35px" mr="20px" position="relative" src="https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg"/> MNC</Button>
            <Button variant='outline' w="200px" h="65px" borderRadius="20px 0 20px"> <Image boxSize="35px" mr="20px" position="relative" src="https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg"/> Marketing</Button>
            <Button variant='outline' w="200px" h="65px" borderRadius="20px 0 20px"> <Image boxSize="35px" mr="20px" position="relative" src="https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg"/> Startup</Button>
            <Button variant='outline' w="200px" h="65px" borderRadius="20px 0 20px"> <Image boxSize="35px" mr="20px" position="relative" src="https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg"/> HR</Button>
            <Button variant='outline' w="200px" h="65px" borderRadius="20px 0 20px"> <Image boxSize="35px" mr="20px" position="relative" src="https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg"/> Fortune 500</Button> <br />
            <Button variant='outline' w="200px" h="65px" borderRadius="20px 0 20px"> <Image boxSize="35px" mr="20px" position="relative" src="https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg"/> Data Science</Button>
            <Button variant='outline' w="200px" h="65px" borderRadius="20px 0 20px"> <Image boxSize="35px" mr="20px" position="relative" src="https://static.naukimg.com/s/0/0/i/trending-naukri/project-management.svg"/> Project Mngmt</Button>
            <Button variant='outline' w="200px" h="65px" borderRadius="20px 0 20px"> <Image boxSize="35px" mr="20px" position="relative" src="https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg"/> Analytics</Button>
            <Button variant='outline' w="200px" h="65px" borderRadius="20px 0 20px"> <Image boxSize="35px" mr="20px" position="relative" src="https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg"/> Banking & Finance</Button>
            <Button variant='outline' w="200px" h="65px" borderRadius="20px 0 20px"> <Image boxSize="35px" mr="20px" position="relative" src="https://static.naukimg.com/s/0/0/i/trending-naukri/supplychain.svg"/> Supply Chain</Button>
        </Box>
    </Box>
}