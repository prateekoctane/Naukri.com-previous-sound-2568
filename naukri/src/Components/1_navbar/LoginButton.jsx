import { Box, useDisclosure, Input, Tag } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
import axios from "axios";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button
} from '@chakra-ui/react'



export function LoginButton() {

  const { isAuth, setIsAuth, form, setForm } = useContext(LoginContext);


  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  function fetchData(){
     axios.get(`http://localhost:3001/users`).then(res=>validate(res.data)).catch(err=>console.log(err))
  }

  function validate(data){
    let flag = false;
    data.map((user)=>{
      if(user.email === form.email && user.password === form.password){
        flag = true;
      }

    });

    if(flag === true){
      console.log("login successful")
    }else{
      console.log("wrong email or password, try again !!")
    }

  }
  function getData(e){
    const { value, name } = e.target;
    setForm({...form, [name]:value });
  }

  
  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen} h="30px">
        Login
      </Button>
      <Drawer

        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Login</DrawerHeader>

          <DrawerBody>
            <Tag>Email or User-Name</Tag>
            <Input type="email" placeholder='Enter Email or UserName' name="email" value={form.email} onChange={(e)=>getData(e)} />
            <Tag mt="20px">Password</Tag>
            <Input type="password" placeholder='Enter Password' name="password" value={form.password} onChange={(e)=>getData(e)} />
            <Link to="/login">
            <Button mt="20px" w="270px" bg="pink.600" onClick={fetchData}>Login</Button>
            </Link>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}