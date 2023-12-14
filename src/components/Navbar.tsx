import {
  Breadcrumb,
  Flex,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
} from "@chakra-ui/react";
import { AvatarBox } from "../components";

import { Link } from "react-router-dom";
import "../styles/index.css";

type NavbarProps = {
  active?: string;
  avatar: boolean;
};

function Navbar({ active, avatar }: NavbarProps) {
  return (
    <Flex
      direction="row"
      h="fit-content"
      w="100%"
      p="15px"
      align="center"
      fontFamily={"Libre Franklin"}
    >
      {avatar ? (
        <Link to={"/profile"}>
          <AvatarBox />
        </Link>
      ) : (
        <></>
      )}
      <Spacer />
      <Breadcrumb
        color="red.400"
        fontSize={28}
        fontWeight={700}
        fontStyle="italic"
        separator=""
        className="breadcrumb"
      >
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to={"/home"}
            className={active === "home" ? "active" : "inactive"}
          >
            home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to={"/search"}
            className={active === "search" ? "active" : "inactive"}
          >
            search
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to={"/library"}
            className={active === "library" ? "active" : "inactive"}
          >
            library
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Spacer />
    </Flex>
  );
}
export default Navbar;
