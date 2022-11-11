import { Box } from "@chakra-ui/react";

import { UserDetails } from "../Components/Login/UserDetails";
import { Search } from "../Components/Login/Search";
import { Jobs } from "../Components/Login/Jobs"

export function Login() {
    return <Box >

        <Box display="flex" w="80%"  margin="auto" mt="40px"  justifyContent="center">

            <Search />
            <UserDetails />
        </Box>
        
        <Box display="flex" m="auto" w="80%">
            <Jobs/>
        </Box>
    </Box>
}