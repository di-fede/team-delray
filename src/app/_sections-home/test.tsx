"use client";
import { useEffect, useRef, useCallback } from "react";
import { Antonio, Playfair_Display, Roboto } from "next/font/google";
import { tests } from "../../../lib/arrays/testimonials";
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

export default function Test() {
    const scrollerRef = useRef<HTMLDivElement | null>(null);

    // Handle the silent reset when scrolled past the first set of items
    const handleScroll = useCallback(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        // Total width of one full set of items (half the total scrollable content)
        const halfScrollWidth = scroller.scrollWidth / 2;

        // When we've scrolled past the first set, silently jump back
        if (scroller.scrollLeft >= halfScrollWidth) {
            scroller.scrollLeft = scroller.scrollLeft - halfScrollWidth;
        }
    }, []);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        // Listen for scroll events to handle the infinite reset
        scroller.addEventListener("scroll", handleScroll);

        // Auto-scroll interval
        const interval = setInterval(() => {
            scroller.scrollBy({ left: 300, behavior: "smooth" });
        }, 5000);

        // Cleanup
        return () => {
            scroller.removeEventListener("scroll", handleScroll);
            clearInterval(interval);
        };
    }, [handleScroll]);

    // Render each testimonial card
    const renderCard = (test: (typeof tests)[number], index: number) => (
        <div key={index} className="media-element">
            <blockquote className="quote">
                <div className="test__text-block ">
                    <p className="test-text ">
                        <span className="rem2">{test.who}:</span>&nbsp;&nbsp; "
                        {test.quote}"
                    </p>
                </div>
                <div className={`test__credit ${play}`}>
                    SOURCE: <span>{test.source}</span>
                </div>
            </blockquote>
        </div>
    );

    return (
        <div className="test">
            <div className="test__top-block">
                <div className="test__heading-container">
                    <div className={`test__heading ${ant}`}>
                        <span>What they say</span>
                        <div className="test__heading-border"></div>
                    </div>
                </div>
            </div>
            <div ref={scrollerRef} className="media-scroller snaps-inline">
                {/* First set of items */}
                {tests.map((test, i) => renderCard(test, i))}
                {/* Duplicate set — creates the illusion of infinite content */}
                {tests.map((test, i) => renderCard(test, tests.length + i))}
            </div>
        </div>
    );
}
