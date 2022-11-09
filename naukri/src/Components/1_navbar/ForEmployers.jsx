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
import { ChevronDownIcon } from "@chakra-ui/icons";

export function ForEmployers() {
    return <Menu>
        <MenuButton>For Employers <ChevronDownIcon/></MenuButton>
        <Portal>
            <MenuList>
                <MenuItem>Buy Online</MenuItem>
                <MenuItem>Hiring Solutions</MenuItem>
                <MenuItem>Employer Login</MenuItem>
            </MenuList>
        </Portal>
    </Menu>
    
}