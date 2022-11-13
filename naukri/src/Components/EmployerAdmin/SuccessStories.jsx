import { Box, Heading, Text, Image } from "@chakra-ui/react";

export function SuccessStories() {
    return <Box  m="auto" w="80%" mt="50px" display="flex" justifyContent="space-around">

        <Box   w="40%" p="50px" align="left" boxShadow="lg">

            <Text color="purple.500" fontSize="lg" fontWeight="bold" >Success Stories</Text>
            <Heading fontSize="2xl" color="gray" mt="20px">Recruiters Recommend Naukri</Heading>
            <Text align="left" w="300px" mt="20px">Naukri is used as the main tool for talent acquistion by lacs of recruiters across all kinds and sizes
                of industry. They appreciate Naukri’s services and highly recommend it as the one-stop solution to all the hiring needs of a company.</Text>
        </Box>
        <Box  w="25%" p="20px" boxShadow="lg">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0wODxC8jPNQdAj4NRUYgKFgE-uz-1sb19g&usqp=CAU" alt="dummy_profile_pic" w="80px"
              borderRadius="50%" display="block" m="auto" />
            <Text mt="20px">Naveen Malhotra</Text>
            <Text fontSize='xs'>Senior Manager Talent Acquisition Group IRIS</Text>
            <Text mt="20px">Naukri has been one of our most reliable sources for recruitment with very efficient team who would go out of 
                their way to make sure that requests are taken care immediately and ensure complete closure.</Text>
        </Box>
        <Box  w="25%" p="20px" boxShadow="lg">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0wODxC8jPNQdAj4NRUYgKFgE-uz-1sb19g&usqp=CAU" alt="dummy_profile_pic" w="80px"
              borderRadius="50%" display="block" m="auto" />
            <Text mt="20px">Naveen Malhotra</Text>
            <Text fontSize='xs'>Senior Manager Talent Acquisition Group IRIS</Text>
            <Text mt="20px">Powerful tool that has helped to streamline and optimize recruiting and staffing processes. What stands out about RMS is its user-friendly 
                interface, reporting capabilities and flexibility to integration with multiple online sources to</Text>
        </Box>
    </Box>
}