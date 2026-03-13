import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { VscHome } from "react-icons/vsc";
import imageLogo from "../assets/logo.png";

export default function NavbarComp() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand>
                <img src={imageLogo} className="mr-3 h-6 sm:h-9" alt="Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-green-600">Quran.id</span>
            </NavbarBrand>
            <div className="flex md:order-2 gap-2">
               <button className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 hover:bg-green-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414"/>
                        <circle cx="12" cy="12" r="4" />
                    </svg>
                </button>
            </div>
            <NavbarCollapse>
                <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-green-600 bg-transparent"><VscHome />Beranda</button>
            </NavbarCollapse>
        </Navbar>
    );
}