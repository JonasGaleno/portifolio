'use client'

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container, MenuHamburguer, NavLinks, MyInfo, Logo, CloseSidebar, Item, Image } from './styles';

import Link from 'next/link';

export default function Header() {
    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sideBar);

    return (
        <Container>
            <MyInfo>
                <Logo href='#inicio'>
                    <Image src={"https://github.com/jonasgaleno.png"} alt="Logo" />
                </Logo>
                <Link href="#inicio">
                    <Item>Jonas Galeno da Silva</Item>
                </Link>
            </MyInfo>
            <MenuHamburguer>
                <FaBars onClick={showSideBar} />
            </MenuHamburguer>
            <NavLinks $sidebaropen={sideBar}>
                <CloseSidebar onClick={showSideBar}><FaTimes /></CloseSidebar>
                <Link href="#inicio">
                    <Item onClick={showSideBar}>Início</Item>
                </Link>
                <Link href="#sobre">
                    <Item onClick={showSideBar}>Sobre</Item>
                </Link>
                <Link href='#projetos'>
                    <Item onClick={showSideBar}>Projetos</Item>
                </Link>
                <Link href="#contato">
                    <Item onClick={showSideBar}>Contato</Item>
                </Link>
            </NavLinks>
        </Container>
    );
}
