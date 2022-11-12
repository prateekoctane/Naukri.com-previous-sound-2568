import { Box, Tag, VStack } from "@chakra-ui/react";

import { UserDetails } from "../Components/Login/UserDetails";
import { Search } from "../Components/Login/Search";
import { Jobs } from "../Components/Login/Jobs";
import { RealTimeJobs } from "../Components/Login/RealTimeJobs";
import { FastForward } from "../Components/Login/FastForward";
import { CustomJobAlerts } from "../Components/Login/CustomJobAlerts";
import { ApplicationSummary } from "../Components/Login/ApplicationSummary";
import { SavedJobs } from "../Components/Login/SavedJobs";
import { FAQ } from "../Components/Login/FAQ";
import { Footer } from "../Components/home/Footer";




export function Login() {
    return <Box mt="20px" border="1px solid white">
        <Box display="flex" w="80%" margin="auto" mt="40px" justifyContent="center">


            <Search />
            <UserDetails />
        </Box>


        <Box display="flex" m="auto" w="80%"  justifyContent="space-between">

            <Box w="63.5%">

                <Jobs />
                <CustomJobAlerts />
            </Box>

            <Box>

                <RealTimeJobs />
                <FastForward />
            </Box>


        </Box>

        <Box display="flex" m="auto" w="80%"  gap="40px">
            <ApplicationSummary />
            <SavedJobs/>
            <FAQ/>
        </Box>

        <Footer/>
    </Box>
}