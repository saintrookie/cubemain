import React from 'react'
import { CloseIcon, SidebarContainer, Icon, SidebarLink, SidebarWrapper, SideBtnWrap, SidebarRoute, SidebarMenu } from "./sidebarElements";
const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={ toggle }>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">About</SidebarLink>
                <SidebarLink to="discover">Discover</SidebarLink>
                <SidebarLink to="services">Services</SidebarLink>
                <SidebarLink to="signup">Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>

    );
}

export default SideBar
