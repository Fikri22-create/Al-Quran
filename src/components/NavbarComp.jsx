import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import imageLogo from "../assets/logo.png";

export default function NavbarComp() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand>
                <img src={imageLogo} className="mr-3 h-6 sm:h-9" alt="Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-green-600">Quran.id</span>
            </NavbarBrand>
        </Navbar>
    );
}