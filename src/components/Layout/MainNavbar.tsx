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
import { NavLink } from "react-router-dom";
import logo from "./../../../public/LOGO.1e027695.svg";

export default function MainNavbar() {
  const menuItems = [
    "todo",
    "users",
    "optimized",
    "about",
    "contact",
    "register",
  ];

  const activeLinkStyle = {
    color: "#ff9900", // Custom color for active link
    fontWeight: "bold",
  };

  return (
    <Navbar isBlurred isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
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
          <NavLink
            to="/todo"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Todo
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to="/users"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Users
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to="/optimized"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Optimized
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            About
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Contact
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={NavLink} color="warning" to="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              to={`/${item}`}
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
