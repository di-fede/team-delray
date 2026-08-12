"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initScrollSmoother } from "../../lib/gsapUtils";
import Owl from "./_sections-home/owl";
import Test from "./_sections-home/test";
import Footer from "./_section-univ/footer";
import Calendly from "./_sections-home/calendly";
import CalendlyReact from "./_sections-home/calendlyReact";

import Services from "./_sections-home/services";
import HeroServices from "./_sections-home/hero";
import MobilelNav from "./_section-univ/mobileNav";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
function useGsap(callback: () => void) {
    useEffect(() => {
        callback();
    }, [callback]);
}

export default function Page() {
    const [navOpen, setNavOpen] = useState(false);
    function toggleNav() {
        if (navOpen === false) {
            setNavOpen(true);
        } else {
            setNavOpen(false);
        }
        console.log(navOpen);
    }

    useEffect(() => {
        const smoother = initScrollSmoother();
        return () => smoother && smoother.kill();
    }, []);
    return (
        <>
            <div
                onClick={() => setNavOpen(!navOpen)}
                className={`mobileNav__background mobileNav ${navOpen ? "mobileNav__open__mobileNav" : ""}`}
            ></div>
            <MobilelNav navOpen={navOpen} setNavOpen={setNavOpen} />
            <div id="smooth-wapper">
                <div id="smooth-content">
                    <HeroServices />
                    <Services />
                    <Test />
                    {/* <Calendly /> */}
                    {/* <CalendlyReact /> */}
                    <Footer />
                </div>
            </div>
        </>
    );
}
