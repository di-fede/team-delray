import Script from "next/script";

export default function Calendly() {
    return (
        <div className="calendly">
            {/* Calendly inline widget begin */}
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/d/cygm-k4f-qhg"
                style={{ minWidth: "320px", height: "700px" }}
            ></div>
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
            />
            {/* Calendly inline widget end */}
        </div>
    );
}
