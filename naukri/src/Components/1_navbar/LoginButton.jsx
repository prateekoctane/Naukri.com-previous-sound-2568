import { Box, useDisclosure, Input, Tag } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

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

  


  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  
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
            <Input type="text" placeholder='Enter Email or UserName'  />
            <Tag mt="20px">Password</Tag>
            <Input type="password" placeholder='Enter Password' />
            <Link to="/login">
            <Button mt="20px" w="270px" bg="pink.600" onClick={isOpen}>Login</Button>
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