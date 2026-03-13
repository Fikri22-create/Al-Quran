import { Outlet } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";

export default function Template() {
    return (
        <div>
            <NavbarComp />
            <main className="max-w-6xl mx-auto p-4">
                <Outlet />
            </main>
        </div>
    );
}