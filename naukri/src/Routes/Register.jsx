import { Box, Heading, Text, Image, Flex, Input, Button } from "@chakra-ui/react";
import { RegisterForm } from "../Components/Register/RegisterForm";
import { Footer } from "../Components/home/Footer";
export function Register() {
    return <Box >
        <RegisterForm/>
        <Footer/>
    </Box>
}