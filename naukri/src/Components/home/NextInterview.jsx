import { Box, Heading, Text, Button, Image, HStack, VStack, Grid, Link, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { ChevronRightIcon } from "@chakra-ui/icons";

export function NextInterview() {



    return <Box boxShadow="lg" borderRadius="20px" w="90%" m="auto" mt="70px">

        <Heading  align="left" mt="150px" w="300px" ml="50px">Prepare for your next interview</Heading>
        <Image src="https://static.naukimg.com/s/0/0/i/ab-interview.png" alt="people" w="250px" ml="50px"/>

       <Flex gap="10" mt="-250px">

        <Box  w="500px" h="450px" mt="-150px" ml="400px">
            <Text fontSize="xl" fontWeight="bold">Interview questions by company</Text>

            <Grid gridTemplateColumns='repeat(2,1fr)' gap="4" m="20px">


                <Button h="80px">
                    <Box> <Image src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart.png" alt="flipkart" boxSize="50px" /> </Box>
                    <Box>
                        FlipKart <ChevronRightIcon />
                        <Text>488 Interviews</Text>
                    </Box>
                </Button>
                <Button h="80px">
                    <Box> <Image src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus.png" alt="Byjus" boxSize="50px" /> </Box>
                    <Box>
                        Byjus <ChevronRightIcon />
                        <Text>488 Interviews</Text>
                    </Box>
                </Button>
                <Button h="80px">
                    <Box> <Image src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon.png" alt="Amazon" boxSize="50px" /> </Box>
                    <Box>
                        Amazon <ChevronRightIcon />
                        <Text>488 Interviews</Text>
                    </Box>
                </Button>
                <Button h="80px">

                    <Box> <Image src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png" alt="Accenture" boxSize="50px" /> </Box>
                    <Box>
                        Accenture <ChevronRightIcon />
                        <Text>488 Interviews</Text>
                    </Box>
                </Button>
                <Button h="80px">
                    <Box> <Image src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png" alt="TCS" boxSize="50px" /> </Box>
                    <Box>
                        TCS <ChevronRightIcon />
                        <Text>488 Interviews</Text>
                    </Box>
                </Button>
                <Button h="80px">
                    <Box> <Image src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png" alt="Cognizant" boxSize="50px" /> </Box>
                    <Box>
                        Cognizant <ChevronRightIcon />
                        <Text>488 Interviews</Text>
                    </Box>
                </Button>
            </Grid>
             
            <Link fontSize="lg" >View all companies <ChevronRightIcon /> </Link>
        </Box>
        <Box  w="400px" h="450px" mt="-150px" lineHeight="50px">
            <Text fontSize="xl" fontWeight="bold">Interview questions by Role</Text> 
            <Text fontSize="lg"> <Link>Software Engineer</Link>   (7.2K+ questions)</Text> <hr style={{width:"300px", margin:"auto"}}/>
            <Text fontSize="lg"> <Link>Business Analyst </Link>   (2.8K+ questions)</Text> <hr style={{width:"300px", margin:"auto"}}/>
            <Text fontSize="lg"> <Link>Consultant       </Link>   (2.4K+ questions)</Text> <hr style={{width:"300px", margin:"auto"}}/>
            <Text fontSize="lg"> <Link>Financial Analyst</Link>   (894 questions)</Text> <hr style={{width:"300px", margin:"auto"}}/>
            <Text fontSize="lg"> <Link>Sales & Marketing</Link>   (991 questions)</Text> <hr style={{width:"300px", margin:"auto"}}/>
            <Text fontSize="lg"> <Link>Quality Engineer </Link>   (1.3K+ questions)</Text>

            <Link fontSize="lg">View all Roles <ChevronRightIcon /> </Link>
        </Box>
       </Flex>

    </Box>
}

