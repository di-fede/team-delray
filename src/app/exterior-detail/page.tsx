"use client";
import { InlineWidget } from "react-calendly";
import Footer from "../_section-univ/footer";
import HeroService from "../sections-service/hero-service";

export default function Page() {
    return (
        <div className="book">
            <HeroService
                title="Exterior Detail"
                backImage="/image/DSC03597.jpg"
                calender="https://calendly.com/difede462/interior"
            />
            {/* 
            <InlineWidget
                className="book__calender"
                url="https://calendly.com/difede462/exterior"
                styles={{ minWidth: "320px" }}
            /> */}

            <Footer />
        </div>
    );
}
