import { Box, Text, Input, Button, Link, Heading } from "@chakra-ui/react";
import {
   FormControl,
   FormLabel,
   FormErrorMessage,
   FormHelperText,
} from '@chakra-ui/react'

export function AdminLoginForm() {
   return <Box mt="90px" p="10px">

     <Heading mt="-30px" mb="30px" color="purple.600">Admin Login</Heading>
      <FormControl w="80%" m="auto" bg=" white">

         <Input type='email' placeholder="Registered Email ID" color="red.400" />
         <Input type='Password' placeholder="Password" mt="20px" />
         <Button type="submit" w="325px" mt="20px" bg="purple.400">Login</Button>

      </FormControl>
      <Link color="blue.400"> <Text mt="20px">Forget Password ?</Text> </Link>

   </Box>
}