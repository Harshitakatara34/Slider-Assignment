import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdPhone } from "react-icons/md";
import logo from "../../../../public/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 z-[99999] w-full" id="main-navbar">
      <nav
        className={`relative flex items-center justify-between md:px-20 px-4 py-2 bg-transparent ${
          props.optionalblur == "navbar2" ? "" : "dialogbackground"
        }`}
        aria-label="Global"
      >
        <div className="flex gap-12">
          <Link href="/" onClick={() => handleLinkClick("/")}>
            <Image
              src={logo}
              alt="My Image"
              className="h-[2.69rem] w-[3.13rem] lg:h-auto lg:w-auto"
            />
          </Link>
          <div className="hidden lg:flex gap-12 mt-4">
            <Link href="/">
              <p
                className={`lg:text-[1rem] text-[0.9rem] Verdana-regular header-link ${
                  pathname === "/" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/")}
              >
                Home
              </p>
            </Link>
            <Link href="/projects" target="_blank" rel="noopener noreferrer">
              <p
                className={`lg:text-[1rem] text-[0.9rem] Verdana-regular header-link ${
                  pathname === "/projects" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/projects")}
              >
                Our Work
              </p>
            </Link>
            <Link
              href="#team-section"
              onClick={() => handleLinkClick("#team-section")}
            >
              <p
                className={`lg:text-[1rem] text-[0.9rem] Verdana-regular header-link ${
                  pathname === "/team" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/team")}
              >
                Team
              </p>
            </Link>
          </div>
        </div>

        <div className="lg:block hidden pt-3">
          <Link href="/Contactus">
            <button className="py-[0.56rem] px-7 rounded-[100px] Verdana-regular buttonborder buttonanimation lg:text-[1rem] text-[0.9rem] text-[#fff] flex gap-2 justify-center items-center">
              Let&apos;s Talk <MdPhone color="white" />
            </button>
          </Link>
        </div>

        <div className="lg:hidden">
          {!mobileMenuOpen && (
            <button type="button" onClick={() => setMobileMenuOpen(true)}>
              <RxHamburgerMenu size={20} color="white" aria-hidden="true" />
            </button>
          )}
        </div>
      </nav>
      <div className="h-[1px] w-full background"></div>
      <div
        className={`fixed inset-0 z-[999999999] transition-opacity ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`dialog-panel fixed inset-y-0 right-0 z-[999999999] w-[80%] max-w-sm p-6 overflow-y-auto bg-black shadow-lg transform ${
            mobileMenuOpen ? "open" : ""
          }`}
        >
          <div className="flex justify-end">
            <button
              type="button"
              className="-m-2 rounded-md p-2.5 text-black transition-all duration-300  hover:text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-8 w-8" aria-hidden="true" color="white" />
            </button>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <Link
              href="/"
              onClick={() => handleLinkClick("/")}
              className="mb-6"
            >
              <p
                className={`lg:text-[1rem] text-[0.9rem] Verdana-regular header-link ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </p>
            </Link>
            <Link
              href="/projects"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick("/projects")}
              className="mb-6"
            >
              <p
                className={`lg:text-[1rem] text-[0.9rem] Verdana-regular header-link ${
                  pathname === "/projects" ? "active" : ""
                }`}
              >
                Our Work
              </p>
            </Link>
            <Link
              href="/team"
              onClick={() => handleLinkClick("/team")}
              className="mb-6"
            >
              <p
                className={`lg:text-[1rem] text-[0.9rem] Verdana-regular header-link ${
                  pathname === "/team" ? "active" : ""
                }`}
              >
                Team
              </p>
            </Link>
            <div className="gap-4 items-center text-base mt-2">
              <Link href="/Contactus">
                <button className="py-1 px-6 rounded-[100px] lg:text-[1rem] text-[0.9rem] text-[#fff] Verdana-regular buttonborder buttonanimation flex gap-2 justify-center items-center">
                  Let&apos;s Talk <MdPhone color="white" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
