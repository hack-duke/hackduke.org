import { useRouter } from "next/router";
import { useState } from "react";
import Image from "./Image";

const NavbarItem = ({ text, URL, router }) => {
    return (
        <div
            className="navbar-item navbar-button mr-4 transform font-sans text-[1.2rem] text-white before:absolute before:bottom-1 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:rounded before:bg-white before:transition-transform before:duration-300 before:ease-in-out before:content-[''] hover:cursor-pointer"
            onClick={() => {
                router.push(URL);
            }}>
            {text}
        </div>
    );
};

function Navbar(props) {
    const router = useRouter();
    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <>
            <nav
                className="navbar absolute w-full bg-transparent px-4 py-8"
                role="navigation"
                aria-label="main navigation">
                <div className="navbar-brand ml-8">
                    <div
                        className="navbar-item mr-4 scale-[1.30] font-sans text-[1.2rem] text-white hover:cursor-pointer"
                        onClick={() => {
                            router.push("/");
                        }}>

                        <Image
                            src="/images/hd-symbol.svg"
                            alt="HackDuke Logo"
                        />
                        
                    </div>
                    <a
                        role="button"
                        className={
                            "navbar-burger scale-[1.30] text-white hover:bg-transparent hover:text-white" +
                            (isExpanded ? " is-active" : "")
                        }
                        onClick={() => {
                            toggleExpansion(!isExpanded);
                        }}
                        aria-label="menu"
                        aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div
                    className={
                        "navbar-menu bg-transparent" +
                        (isExpanded ? " is-active" : "")
                    }
                    // style background color
                    style={{ backgroundColor: props.color }}>
                    <div className="navbar-end mr-8">
                        <NavbarItem text="About" URL="/about" router={router}>
                            {" "}
                        </NavbarItem>
                        <NavbarItem text="Humans" URL="/humans" router={router}>
                            {" "}
                        </NavbarItem>
                        <NavbarItem text="Events" URL="/events" router={router}>
                            {" "}
                        </NavbarItem>
                        <NavbarItem text="Join Us" URL="/join" router={router}>
                            {" "}
                        </NavbarItem>

                        {/* <div
                            className="navbar-item navbar-button"
                            onClick={() => {
                                router.push("/");
                            }}>
                            Login
                        </div> */}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
