"use client";
import { InlineWidget } from "react-calendly";
import Footer from "../_section-univ/footer";
import HeroService from "../sections-service/hero-service";
import SocialsBar from "../_section-univ/socials-bar";
import Navbar from "../_section-univ/navbar";
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
const ant = antonio.className;
const play = playfair.className;
export default function Page() {
    return (
        <div className="basic-detail">
            <div className="heroServices">
                <div className="heroServices__container-outer">
                    <div className="heroServices__grid">
                        <div className="heroServices__socials-bar">
                            <SocialsBar />
                        </div>
                        <div className="heroServices__background ">
                            <img
                                className="heroServices__img "
                                src="/image/DSC5866.jpg"
                                alt=""
                            />
                        </div>
                        <Navbar />
                        <div className="heroServices__text-block">
                            <div className={`heroServices__intro ${ant}`}>
                                <div className="heroServices__intro-text">
                                    Team Delray
                                </div>
                            </div>
                            <div className={`heroServices__heading ${ant}`}>
                                <span>About Us</span>
                            </div>
                            <div className={`heroServices__subHeading ${play}`}>
                                <span></span>
                            </div>
                        </div>
                        <div className="about__section">
                            <div className="about__container">
                                <Link href={"/"} className="back-box">
                                    <div className="back-arrow-container">
                                        <svg
                                            className="back-arrow"
                                            width={20}
                                            height={20}
                                            id="layer__1"
                                            data-name="layer 1"
                                            // xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 32 32"
                                        >
                                            <path
                                                fill="#fff"
                                                d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className={`back ${ant}`}>Back</div>
                                </Link>
                                <div className="about__content-container">
                                    <div className={` about__content ${ant}`}>
                                        At Team Delray Detailing, we understand
                                        the importance of your vehicle. A fresh
                                        exterior paint improves the appeal of
                                        your car. An interior cleaning brings
                                        beauty and style into your everyday
                                        life. If you're thinking about detailing
                                        or protecting your car, motorcycle, or
                                        boat, a great detailing company can make
                                        all the difference. Thats why we
                                        guarantee satisfaction! We will make
                                        your car shine until perfection.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
