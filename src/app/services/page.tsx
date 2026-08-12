"use client";
import Footer from "../_section-univ/footer";
import Test from "../_sections-home/test";
import ServicesServices from "../_sections-home/services";
import HeroServices from "../_sections-home/hero";

export default function Page() {
    return (
        <div className="services-page">
            <HeroServices />
            <ServicesServices />
            <Test />
            <Footer />
        </div>
    );
}
