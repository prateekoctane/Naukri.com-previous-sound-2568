import { Box, Heading, Text } from "@chakra-ui/react";

export function ProductService(){
    return <Box mt="50px">
        <Text color="purple.600" fontSize="lg" fontWeight="bold" >Product and Services</Text>
        <Heading noOfLines={2} w="40%" m="auto" mt="20px" fontSize="3xl" color="gray">Naukri is India’s No.1 Job Posting
& Recruitment Platform</Heading>
    </Box>
}