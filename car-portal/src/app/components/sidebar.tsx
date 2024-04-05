
import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as NextUILink } from '@nextui-org/react';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <Navbar
      style={{
        backgroundColor: 'teal',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        height: '100px',
        alignItems: 'center',
      }}
      isBordered
    >
      <NavbarBrand>
        <div className="flex items-center justify-start">
          <Image src="/images/carBase.webp" alt="Car Management Logo" width={40} height={40} />
          <span className="ml-3 text-xl text-white">CarBase</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center" style={{ flex: 1, alignItems: 'center' }}>
        <div className="flex gap-4">
          <NavbarItem>
            <NextUILink color="foreground" href="/">Home</NextUILink>
          </NavbarItem>
          <NavbarItem>
            <NextUILink color="foreground" href="/">Add</NextUILink>
          </NavbarItem>
          <NavbarItem>
            <NextUILink color="foreground" href="/">Remove</NextUILink>
          </NavbarItem>
          <NavbarItem>
            <NextUILink color="foreground" href="/">View</NextUILink>
          </NavbarItem>
        </div>
        <div>
        </div>
      </NavbarContent>
    </Navbar>
  );
}
