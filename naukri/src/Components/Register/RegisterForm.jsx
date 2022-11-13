import { Box, Heading, Text, Image, Flex, Input, Button, Link } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { FcApproval } from "react-icons/fc";
import { GiSchoolBag, GiSuitcase } from "react-icons/gi";

export function RegisterForm() {
    return <Box >


        <Box display="flex" justifyContent="center" mt="50px" gap="50px" >

            <Box border="2px dotted" borderRadius="10px" mt="250px" h="220px">
                <Image src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg" alt="cap_man"
                    display="block" m="auto" mt="-50px" w="50%" />
                <Heading fontSize="lg">On registering, you can</Heading>
                <Flex> <Box mt="5px"><FcApproval mt="10px" /></Box> <Text w="200px" align="left">Build your profile and let recruiters find you</Text></Flex>
                <Flex> <Box mt="5px"><FcApproval mt="10px" /></Box> <Text w="200px" align="left">Get job postings delivered right to your email</Text></Flex>
                <Flex> <Box mt="5px"><FcApproval mt="10px" /></Box> <Text w="200px" align="left">Find a job and grow your career</Text></Flex>
            </Box>

            <Box w="70%" boxShadow="lg" borderRadius="50px">
                <Heading>Find a job & grow your career</Heading>
                <FormControl w="60%" m="auto" mt="20px">
                    <FormLabel>Full Name</FormLabel>
                    <Input type='text' placeholder="What is your Name ?" />

                    <FormLabel mt="20px">Email Id</FormLabel>
                    <Input type='email' placeholder="Tell us your Email Id" />
                    <FormHelperText > <Text align="left">We'll send you relevant jobs in your mail</Text> </FormHelperText>

                    <FormLabel mt="20px">Password</FormLabel>
                    <Input type='password' placeholder="Create a password for your account" />
                    <FormHelperText> <Text align="left">Minimum 6 characters required</Text> </FormHelperText>

                    <FormLabel mt="20px">Mobile Number</FormLabel>
                    <Input type='number' placeholder="Mobile Number" />
                    <FormHelperText> <Text align="left">Recruiters will call you on this number</Text>  </FormHelperText>

                    <Flex mt="20px" gap="20px">

                        <Box as="button" w="200px" h="100px" borderRadius="0px 10px 0px 10px" bg="purple.200" boxShadow="lg"> <Flex alignItems="center" mt="-20px"><GiSuitcase />  I'm Experienced  </Flex>   <Text fontSize="xs">I have work Experiencce</Text> </Box>
                        <Box as="button" w="200px" h="100px" borderRadius="0px 10px 0px 10px" bg="purple.200" boxShadow="lg"> <Flex alignItems="center"><GiSchoolBag /> I'm Fresher</Flex> <Text fontSize="xs">I am a Student, haven't worked after graduation</Text></Box >
                    </Flex>

                    <FormLabel mt="20px">Resume</FormLabel>
                    <Box display="flex" alignItems="center" > <Button bg="orange.400">Upload Resume</Button> <Text fontSize="xs">DOC, DOCx, PDF, RTF | Max: 2 MB</Text> </Box>
                    <Text align="left">Recruiters give first preference to candidates who have a resume</Text>

                    <Box align="left" mt="20px">

                        <Checkbox defaultChecked>Send me important updates on WhatsApp</Checkbox>
                    </Box>

                    <Text fontSize="xs" mt="20px" align="left" mb="20px"> By clicking Register, you agree to the <Link color="blue.400">Terms and Conditions</Link> & <Link color="blue.400">Privacy Policy</Link> of Naukri.com </Text>
                </FormControl>
                <Box align="left" w="250px" ml="210px" mt="50px" mb="50px" >

                    <Button w="250px" bg="purple.500">Register</Button>
                </Box>
            </Box >


        </Box>

    </Box>
}