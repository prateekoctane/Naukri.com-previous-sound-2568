import { Box, Heading, Button, Flex, Text, Image } from "@chakra-ui/react";
import { NaukriHiringSuite } from "../Components/EmployerAdmin/NaukriHiringSuite";
import { SalesEnquiryForm } from "../Components/EmployerAdmin/SalesEnquiryForm";
import { EmployerLoginForm } from "../Components/EmployerAdmin/EmployerLoginForm";
import { AdminLoginForm } from "../Components/EmployerAdmin/AdminLoginForm";
import { ProductService } from "../Components/EmployerAdmin/ProductService";
import { useState, useRef } from "react";
import { JobPostingServices } from "../Components/EmployerAdmin/JobPostingServices";
import { BestTalent } from "../Components/EmployerAdmin/BestTalent";
import { RecruiterApp } from "../Components/EmployerAdmin/RecruiterApp";

export function EmployerAdmin() {
    const [SaleEnq, setSaleEnq] = useState(true);
    const [Employer, setEmployer] = useState(false);
    const [Admin, setAdmin] = useState(false);
    const sale = useRef();
    const emplr = useRef();
    const admi = useRef();

    function Sale() {
        if (SaleEnq === false) {
            setSaleEnq(true);
            sale.current.style.borderBottom = "3px solid red";
            setEmployer(false);
            emplr.current.style.borderBottom = "0px";
            setAdmin(false)
            admi.current.style.borderBottom = "0px";
        }
    }
    function emp() {
        if (Employer === false) {
            setEmployer(true);
            emplr.current.style.borderBottom = "3px solid red";
            setSaleEnq(false);
            sale.current.style.borderBottom = "0px";
            setAdmin(false);
            admi.current.style.borderBottom = "0px";
        }
    }
    function adm() {
        if (Admin === false) {
            setAdmin(true);
            admi.current.style.borderBottom = "3px solid red";
            setEmployer(false);
            emplr.current.style.borderBottom = "0px";
            setSaleEnq(false);
            sale.current.style.borderBottom = "0px";
        }
    }
    return <Box >
        <Box display="flex" w="80%" m="auto" mt="50px" boxShadow="lg">

            <NaukriHiringSuite />
            <Box w="35%" borderLeft="1px solid aqua">

                <Box display="flex" justifyContent="center" pt="20px" >

                    <Box borderBottom="3px solid red" ref={sale}><Button bg=" white" onClick={() => Sale()}>Sales Enquiry</Button></Box>

                    <Box ref={emplr}> <Button bg=" white" onClick={() => emp()}>Employer Login</Button></Box>

                    <Box ref={admi}>  <Button bg=" white" onClick={() => adm()}>Admin Login</Button></Box>
                </Box>
                <hr />
                {SaleEnq && <SalesEnquiryForm />}
                {Employer && <EmployerLoginForm />}
                {Admin && <AdminLoginForm />}

            </Box>


        </Box>

        <ProductService />

        <Box display="flex" w="80%" m="auto" h="450px" boxShadow="lg">
            <JobPostingServices />
            <Image src="/jobPostingsServices.png" alt="jobPostingsServices" w="450px" h="300px" mt="100px" mr="100px" />
        </Box>

        <Box display="flex" m="auto" w="80%" boxShadow="lg" mt="50px">
            <Image src="/bestTalent.png" alt="bestTalent" w="450px" h="300px" mt="100px" ml="100px" />
            <BestTalent />
        </Box>

        <RecruiterApp/>
    </Box>
}