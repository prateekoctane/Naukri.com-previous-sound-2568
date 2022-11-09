import { Box, Heading, Text, Button, Image, HStack, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export function FeaturedCompanies() {



    return <Box mt="50px">
        <Heading>Featured companies actively hiring</Heading>
      
      <HStack overflow-wrap="20px" display="flex" w="90%" m="auto" mt="20px">

        <Box as="button"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        <Box as="button"  border="1px" p="30px 5px 30px 5px">
            <Image margin="auto" src="https://img.naukimg.com/logo_images/groups/v2/1288.gif" />
            <Text fontSize="lg">Capgemini</Text>
            <Text> <StarIcon color="yellow.400" /> 3.9 | 24K+ reviews </Text>
            <Box h="40px"></Box>
            <Text>Global leaders in technology,services</Text>
            <Box h="40px"></Box>
            <Button>View Jobs</Button>
        </Box>

        

      </HStack>

    </Box>
}

