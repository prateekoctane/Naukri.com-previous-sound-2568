import { Box, Heading, Button, Flex, Text } from "@chakra-ui/react";
import { NaukriHiringSuite } from "../Components/EmployerAdmin/NaukriHiringSuite";
import { SalesEnquiryForm } from "../Components/EmployerAdmin/SalesEnquiryForm";
import { EmployerLoginForm } from "../Components/EmployerAdmin/EmployerLoginForm";
import { AdminLoginForm } from "../Components/EmployerAdmin/AdminLoginForm";
import { useState, useRef } from "react";
export function EmployerAdmin() {
    const [ SaleEnq, setSaleEnq ] = useState(true);
    const [ Employer, setEmployer ] = useState(false);
    const [ Admin, setAdmin ] = useState(false);
    const sale = useRef();
    const emplr = useRef();
    const admi = useRef();

    function Sale(){
      if(SaleEnq === false ){
         setSaleEnq(true);
         sale.current.style.borderBottom = "3px solid red";
         setEmployer(false);
         emplr.current.style.borderBottom = "0px";
         setAdmin(false)
         admi.current.style.borderBottom = "0px";
      }
    }
    function emp(){
        if(Employer === false ){
            setEmployer(true);
            emplr.current.style.borderBottom = "3px solid red";
            setSaleEnq(false);
            sale.current.style.borderBottom = "0px";
            setAdmin(false);
            admi.current.style.borderBottom = "0px";
         }
    }
    function adm(){
        if(Admin === false ){
            setAdmin(true);
            admi.current.style.borderBottom = "3px solid red";
            setEmployer(false);
            emplr.current.style.borderBottom = "0px";
            setSaleEnq(false);
            sale.current.style.borderBottom = "0px";
         }
    }
    return <Box >
        <Box border="1px" display="flex" w="80%" m="auto" mt="50px">

            <NaukriHiringSuite />
            <Box border="1px solid red" w="35%">

                <Box display="flex" justifyContent="center" pt="20px">
                    
                    <Box borderBottom="3px solid red" ref={sale}><Button bg=" white" onClick={()=>Sale()}>Sales Enquiry</Button></Box>
                    
                    <Box  ref={emplr}> <Button bg=" white" onClick={()=>emp()}>Employer Login</Button></Box>
                   
                    <Box  ref={admi}>  <Button bg=" white" onClick={()=>adm()}>Admin Login</Button></Box>
                </Box>
                <hr />
               { SaleEnq && <SalesEnquiryForm/>}
               { Employer && <EmployerLoginForm/> }
               { Admin && <AdminLoginForm/> }

            </Box>
        </Box>
    </Box>
}