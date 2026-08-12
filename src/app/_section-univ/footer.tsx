import { Antonio, Playfair_Display, Roboto } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
const antonio = Antonio({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
    style: "normal",
});
const playfair = Playfair_Display({
    weight: ["400", "500"],
    subsets: ["latin"],
    style: "normal",
});

const roboto = Roboto({
    weight: ["400", "500"],
    subsets: ["latin"],
    style: "normal",
});

const play = playfair.className;
const ant = antonio.className;
const rob = roboto.className;

export default function Footer() {
    const [email, setEmail] = useState("");

    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        setEmail(evt.target.value);
    }
    return (
        <div className="footer">
            <div className="footer__grid">
                <div className={`footer__column-l footer__column ${ant}`}>
                    <div className={`footer__column-heading `}>
                        <span>Customer Service</span>
                    </div>
                    <ul className="footer__list">
                        <li className="footer__link">
                            <Link href={"/about"}>About Us</Link>
                        </li>
                        <li className="footer__link">
                            <Link href={"/contact"}>Contact</Link>
                        </li>

                        <li className="footer__link">
                            <Link href={"/contact"}>Have a Question?</Link>
                        </li>
                    </ul>
                </div>
                <div className={`footer__column-c footer__column ${ant}`}>
                    <div className={`footer__column-heading `}>
                        <span>Newsletter</span>
                    </div>
                    {/* <div className="footer__subscibe-container"> */}
                    <div className={`footer__subscribe-text ${play}`}>
                        Receive our latest offers, new services and stories
                        direct to your inbox
                    </div>
                    <div className="footer__subscribe-form-container">
                        <form className="footer__subscribe-form" action="">
                            <input
                                type="text"
                                placeholder="e.g. darren@kirschner.cc"
                                value={email}
                                onChange={handleChange}
                            />
                            <button>SEND</button>
                        </form>
                    </div>
                    {/* </div> */}
                </div>
                <div className={`footer__column-r footer__column ${ant}`}>
                    <div className={`footer__column-heading `}>
                        <span>Follow Kirschner</span>
                    </div>
                    <ul className="footer__list">
                        <li className="footer__link">
                            <Link href={"/"}>Facebook</Link>
                        </li>
                        <li className="footer__link">
                            <Link href={"/"}>X</Link>
                        </li>
                        <li className="footer__link">
                            <Link href={"/"}>Instagram</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
