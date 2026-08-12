import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function MobilelNav({
    navOpen,
    setNavOpen,
}: {
    navOpen: boolean;
    setNavOpen: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <>
            <div
                className={`mobileNav__button `}
                onClick={() => setNavOpen(!navOpen)}
            >
                <div
                    className={`mobileNav__button-icon ${navOpen ? "mobileNav__open__button-icon" : ""}`}
                ></div>
            </div>

            <div
                className={`mobileNav__outer ${navOpen ? "mobileNav__open__outer" : ""}`}
            >
                <div className="mobileNav__container">
                    <ul className="mobileNav__list">
                        <li className="mobileNav__item">
                            <Link href={"/about"}>
                                <div className="mobileNav__textbox">
                                    <span>About Us</span>
                                </div>
                            </Link>
                        </li>

                        <li className="mobileNav__item">
                            <Link href={"/contact"}>
                                <div className="mobileNav__textbox">
                                    <span>Contact Us</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
