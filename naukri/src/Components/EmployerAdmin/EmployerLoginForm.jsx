import { Box, Text, Input, Button, Link } from "@chakra-ui/react";
import {
   FormControl,
   FormLabel,
   FormErrorMessage,
   FormHelperText,
} from '@chakra-ui/react'

export function EmployerLoginForm(){
   
    return <Box mt="30px" p="10px">
      

    <FormControl w="80%" m="auto" bg=" white">
       
       <Input type='email' placeholder="Registered Email ID" color="red.400" /> 
       <Input type='Password' placeholder="Password" mt="20px" />
       <Button type="submit" w="325px" mt="20px" bg="purple.400">Login</Button>

    </FormControl>
    <Link color="blue.400"> <Text mt="20px">Forget Password ?</Text> </Link>
    <Text align="left" mt="20px">Keep your account safe. <Link color="blue.400">Learn How</Link>  </Text>
    <Box display="flex" justifyContent="space-between" alignItems="center">
    <Text align="left" mt="20px">Have a Query?  <Link color="blue.400">Contact Us</Link>  </Text>
     <Link color="blue.400"> <Text mb="-19px">Fraud Alert</Text> </Link>
     
    </Box>
    <hr style={{marginTop:"10px"}} />

    <Text fontSize="xs" mt="20px">Are you a new client ?</Text>
    <Button w="340px" mt="20px" bg="purple.400">Register</Button>
 </Box>
 }