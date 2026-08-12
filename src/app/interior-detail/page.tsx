"use client";
import { InlineWidget } from "react-calendly";
import HeroService from "../sections-service/hero-service";
import Footer from "../_section-univ/footer";

export default function Page() {
    return (
        <div className="basic-detail">
            <div className="book__form-container">
                <HeroService
                    title="Interior Detail"
                    backImage="/image/CIM-606.jpg"
                    calender="https://calendly.com/difede462/interior"
                />
            </div>
            <Footer />
        </div>
    );
}
