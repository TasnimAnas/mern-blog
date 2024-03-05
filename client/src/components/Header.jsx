import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 font-semibold">
      <Link to={"/"} className="text-sm md:text-xl">
        <span className="py-1 px-2 rounded-md text-white bg-gradient-to-r to-blue-500 from-gray-800 via-green-900">
          Tasnim's
        </span>
        <span>Blog</span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search"
          rightIcon={AiOutlineSearch}
          className="hidden md:inline"
        />
      </form>
      <Button className="md:hidden border" color="grey" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2 items-center">
        <div className="mr-2 hidden md:inline cursor-pointer p-2">
          <FaMoon />
        </div>
        <Button className="border" gradientDuoTone={"purpleToBlue"}>
          LogIn
        </Button>
        <Navbar.Toggle className="border" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={"div"} active={path === "/"}>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"} active={path === "/dashboard"}>
          <Link to={"/dashboard"}>Dashboard</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"} active={path === "/about"}>
          <Link to={"/about"}>About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
