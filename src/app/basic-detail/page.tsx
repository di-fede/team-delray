"use client";
import { InlineWidget } from "react-calendly";
import Footer from "../_section-univ/footer";
import HeroService from "../sections-service/hero-service";

export default function Page() {
    return (
        <div className="basic-detail">
            <HeroService
                title="Basic Detail"
                subtitle=""
                backImage="/image/_DSC5864.jpg"
                calender="https://calendly.com/difede462/interior"
            />
            {/* <div className="book__form-container">
                <InlineWidget
                    url=""
                    styles={{ minWidth: "320px", height: "700px" }}
                />
            </div> */}
            <Footer />
        </div>
    );
}
