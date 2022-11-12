import {
    Box, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Portal
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";


export function ForEmployers() {
    return <Menu>
        <MenuButton>For Employers <ChevronDownIcon/></MenuButton>
        <Portal>
            <MenuList>
                <MenuItem>Buy Online</MenuItem>
                <MenuItem>Hiring Solutions</MenuItem>
                <MenuItem> <Link to="/employer-admin">Employer/Admin Login</Link> </MenuItem>
            </MenuList>
        </Portal>
    </Menu>
    
}