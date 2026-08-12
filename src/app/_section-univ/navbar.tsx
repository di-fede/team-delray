import { Antonio, Playfair_Display } from "next/font/google";
import Link from "next/link";

const antonio = Antonio({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
    style: "normal",
});
const playfair = Playfair_Display({
    weight: "400",
    subsets: ["latin"],
    style: "normal",
});

const play = playfair.className;
const ant = antonio.className;
export default function Navbar() {
    return (
        <div className="nav__section">
            <div className={`nav__container ${ant}`}>
                <ul className="navList-left navList">
                    <li className="navList__item">
                        <Link href={"/about"}>about us</Link>
                    </li>
                </ul>
                <Link href={"/"} className="nav__logo-container">
                    <img className="nav__logo" src="/image/logo.png" alt="" />
                </Link>
                <ul className="navList-right navList">
                    {/* <li className="navList__item">
                        <Link href={"/"}>the latest</Link>
                    </li> */}

                    <li className="navList__item">
                        <Link href={"/contact"}>contact us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
