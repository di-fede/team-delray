"use client";

import { Antonio, Playfair_Display } from "next/font/google";
import Navbar from "../_section-univ/navbar";
import { useEffect, useState } from "react";
import MobilelNav from "../_section-univ/mobileNav";
import SocialsBar from "../_section-univ/socials-bar";

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
export default function HeroServices() {
    const [isWideScreen, setIsWideScreen] = useState(true);

    useEffect(() => {
        const checkWidth = () => {
            const isWide = window.innerWidth > 900;
            setIsWideScreen(isWide);
        };

        checkWidth();
    }, []);

    return (
        <div className="heroHome">
            <div className="heroHome__container-outer">
                <div className="heroHome__grid">
                    <SocialsBar />
                    <div className="heroHome__background ">
                        {isWideScreen ? (
                            <img
                                data-speed={0.8}
                                className="heroHome__img "
                                src="/image/_DSC5864.jpg"
                                alt=""
                            />
                        ) : (
                            <img
                                className="heroHome__img "
                                src="/image/_DSC5864.jpg"
                                alt=""
                            />
                        )}
                    </div>
                    <Navbar />

                    <div className="heroHome__text-block">
                        <div className={`heroHome__intro ${ant}`}>
                            <div className="heroHome__intro-text">
                                introducting
                            </div>
                        </div>
                        <div className={`heroHome__heading ${ant}`}>
                            <span>team delray</span>
                        </div>
                        <div className={`heroHome__subHeading ${play}`}>
                            <span>High End Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
