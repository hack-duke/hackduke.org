import { useRouter } from "next/router";
import { useState } from "react";

const NavbarItem = ({ router, URL, text }) => (
  <div
    className="navbar-item navbar-button mr-4 font-sans text-[1.2rem] text-white before:absolute before:left-0 before:bottom-1 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:rounded before:bg-white before:content-[''] hover:cursor-pointer"
    onClick={() => {
      router.push(URL);
    }}
  >
    {text}
  </div>
);

function Navbar(props) {
  const router = useRouter();
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <>
      <nav
        className="navbar absolute w-full bg-transparent py-8 px-4"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand ml-8">
          <div
            className="navbar-item [margin-left: 2vw] [margin-right: 2vw] mr-4 font-sans text-xl text-white hover:cursor-pointer"
            id="navbar-logo"
            onClick={() => {
              router.push("/");
            }}
          >
            <img
              className="scale-[1.30]"
              id="hd-logo"
              src="/images/hd-symbol.svg"
            />
          </div>
          <a
            role="button"
            className={
              "navbar-burger scale-[1.30] text-white hover:bg-transparent hover:text-white" +
              (isExpanded ? " [margin-left: 2vw] [margin-right: 2vw]" : "")
            }
            onClick={() => {
              toggleExpansion(!isExpanded);
            }}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          className={
            "navbar-menu bg-transparent" +
            (isExpanded ? " [margin-left: 2vw] [margin-right: 2vw]" : "") +
            ` bg-[${props.color}]`
          }
        >
          <div className="navbar-end mr-8">
            <NavbarItem text="About" URL="/about" router={router}></NavbarItem>
            <NavbarItem
              text="Humans"
              URL="/humans"
              router={router}
            ></NavbarItem>
            <NavbarItem
              text="Events"
              URL="/events"
              router={router}
            ></NavbarItem>
            <NavbarItem text="Join Us" URL="/join" router={router}></NavbarItem>
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
