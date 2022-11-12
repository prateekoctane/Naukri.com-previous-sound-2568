import { Box, Text, Input, Button, Link, Stack } from "@chakra-ui/react";
import React from 'react';
import { Radio, RadioGroup } from '@chakra-ui/react'
import {
   FormControl,
   FormLabel,
   FormErrorMessage,
   FormHelperText,
} from '@chakra-ui/react'


export function SalesEnquiryForm() {
   const [value, setValue] = React.useState('1')
   return <Box mt="30px" p="10px">
      
      <Box m="auto" w="80%" mb="20px"> 
      <Text align="left" mb="20px">I am Looking For</Text>
         <RadioGroup onChange={setValue} value={value} align="center">
            <Stack direction='row'>
               <Radio value='1'> <Text fontSize="xs">Recruitment Solutions</Text> </Radio>
               <Radio value='2'> <Text fontSize="xs">Job Oppertunities</Text> </Radio>

            </Stack>
         </RadioGroup>
      </Box>

      <FormControl w="80%" m="auto">
        
         
         <Input type='text' placeholder="Name" />
         <Input type="text" placeholder="Contact Number" />
         <Input type="text" placeholder="Company Name" />
         <Input type="text" placeholder="Designation Name" />
         <Input type="email" placeholder="Email ID" />
         <Input type="text" placeholder="City" />
         <Button w="325px" mt="20px" bg="purple.500">Get a Callback</Button>
      </FormControl>

   </Box>
}