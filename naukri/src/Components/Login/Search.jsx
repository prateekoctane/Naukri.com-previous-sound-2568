import { Box, Heading, Input, Button, Image, Text } from "@chakra-ui/react";

export function Search() {
  return <Box w="80%" m="auto" mt="20px" >

<Box display="flex" w="100%" m="auto" mt="20px" >
      <Input placeholder="Search Jobs by Skills,Designation and Companies"/>
      <Button w="100px">Search</Button>

      </Box>

      <Box display="flex">
       <Image w="50%" src="https://www.kindpng.com/picc/m/115-1151703_find-a-job-cartoon-hd-png-download.png" alt="find_job"/>
       <Image w="50%" src="https://thumbs.dreamstime.com/b/working-couple-vector-illustration-65639890.jpg" alt="collegues"/>
      </Box>
  </Box>
}