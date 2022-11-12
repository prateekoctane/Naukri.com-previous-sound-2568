import { Box, Heading, Input, Button, Image, Text, Tag } from "@chakra-ui/react";

export function Search() {
  return <Box w="80%" boxShadow="lg">

<Box display="flex" w="100%" m="auto"  mb="20px" >

      <Input placeholder="Search Jobs by Skills,Designation and Companies"/>
      <Button w="100px">Search</Button>

      </Box>

      <Box display="flex">
       {/* <Image w="50%" src="https://www.kindpng.com/picc/m/115-1151703_find-a-job-cartoon-hd-png-download.png" alt="find_job"/>
       <Image w="50%" src="https://thumbs.dreamstime.com/b/working-couple-vector-illustration-65639890.jpg" alt="collegues"/> */}
       <Image  display="block" margin="auto" src="https://darvideo.tv/wp-content/uploads/2019/10/Financial-1.png" alt="office" borderRadius="40px"/>
      </Box>
  </Box>
}