"use client";
import HeroService from "../sections-service/hero-service";
import Footer from "../_section-univ/footer";

export default function Page() {
    return (
        <div className="basic-detail">
            <div className="book__form-container">
                <HeroService
                    title="Complete Detail"
                    backImage="/image/AMG-31.jpg"
                    calender="https://calendly.com/difede462/interior"
                />
            </div>
            <Footer />
        </div>
    );
}
