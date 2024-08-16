import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import { Link, NavLink } from "react-router-dom";
import logo from "./../../../public/LOGO.1e027695.svg";
export default function MainNavbar() {
  const menuItems = [
    "Features",
    "About",
    "Integrations",
    "Login",
    "Sign Up",
  ];

  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden " justify="center">
        <NavbarBrand>
          <NavLink to="/">
            <Image src={logo} width={50} height={50} />
          </NavLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <NavLink to="/">
            <Image src={logo} width={50} height={50} />
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink to="/todo">Todo</NavLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NavLink to="/about">About</NavLink>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/users">
            Users
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="warning" to="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link to={"/"}>{item}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
