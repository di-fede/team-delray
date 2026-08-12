"use client";

import { useEffect, useState } from "react";
import { Antonio, Playfair_Display, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { PopupWidget } from "react-calendly";

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

const roboto = Roboto({
    weight: ["400", "500"],
    subsets: ["latin"],
    style: "normal",
});

const play = playfair.className;
const ant = antonio.className;
const rob = roboto.className;
export default function ServicesServices() {
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setRootElement(document.getElementById("root"));
    }, []);

    return (
        <div className="services">
            <div className="services__grid">
                <div className="services__label">
                    <span>Our Services</span>
                </div>
                <Link
                    href={"/basic-detail"}
                    className="services__basic services__column"
                >
                    <div className="borderTop"></div>
                    <div className="services__background">
                        <Image
                            fill
                            className="services__img"
                            src="/image/_DSC5864.jpg"
                            alt=""
                        />
                    </div>
                    <div className="services__text-center">
                        <div className={`services__title ${ant}`}>
                            Basic Detail
                        </div>
                        <div className="services__subtitle">$185</div>
                        <ul className={`services__list ${rob}`}>
                            <li className="services__item">
                                Hand Wash & Bug Removal
                            </li>
                            <li className="services__item">
                                Clean Rims & Tire Shine
                            </li>
                            <li className="services__item">
                                Clean Interior & Dust Dash
                            </li>
                            <li className="services__item">Clean Windows</li>
                            <li className="services__item">
                                Upgrades Available
                            </li>
                        </ul>
                    </div>
                    <div className={`read-more ${rob}`}>
                        <div className="read-more-text">Book</div>
                    </div>
                </Link>

                <Link
                    href={"/interior-detail"}
                    className="services__inter services__column"
                >
                    <div className="borderTop"></div>
                    <div className="services__background">
                        <img
                            className="services__img"
                            src="/image/CIM-606.jpg"
                            alt=""
                        />
                    </div>
                    <div className="services__text-center">
                        <div className={`services__title ${ant}`}>
                            Interior Detail
                        </div>
                        <div className="services__subtitle">$170</div>
                        <ul className={`services__list ${rob}`}>
                            <li className="services__item">Deep Vacuum</li>
                            <li className="services__item">
                                Clean & Dress Plastics
                            </li>
                            <li className="services__item">Clean Door Jams</li>
                            <li className="services__item">
                                Condition Leather
                            </li>
                            <li className="services__item">
                                Steam/Shampoo Seats & Carpets
                            </li>
                            <li className="services__item">
                                Clean Interior Windows
                            </li>
                        </ul>
                    </div>
                    <div className={`read-more ${rob}`}>
                        <div className="read-more-text">Book</div>
                    </div>
                </Link>
                <Link
                    href={"/exterior-detail"}
                    className="services__ext services__column"
                >
                    <div className="borderTop"></div>
                    <div className="services__background">
                        <img
                            className="services__img"
                            src="/image/DSC03599.jpg"
                            alt=""
                        />
                    </div>
                    <div className="services__text-center">
                        <div className={`services__title ${ant}`}>
                            Exterior Detail
                        </div>
                        <div className="services__subtitle">$175</div>
                        <ul className={`services__list ${rob}`}>
                            <li className="services__item">
                                Hand Wash & Bug Removal
                            </li>
                            <li className="services__item">
                                Clean Rims & Tire Shine
                            </li>
                            <li className="services__item">Clay Bar</li>
                            <li className="services__item">
                                Buff & Paint Restoration
                            </li>
                            <li className="services__item">
                                One Year Candy Coat &reg; Ceramic Coat
                            </li>
                            <li className="services__item">
                                Up To Two Hours Buffing
                            </li>
                        </ul>
                    </div>
                    <div className={`read-more ${rob}`}>
                        <div className="read-more-text">Book</div>
                    </div>
                </Link>
                <Link
                    href={"/complete-detail"}
                    className="services__ext services__column"
                >
                    <div className="borderTop"></div>
                    <div className="services__background">
                        <img
                            className="services__img"
                            src="/image/AMG-31.jpg"
                            alt=""
                        />
                    </div>
                    <div className="services__text-center">
                        <div className={`services__title ${ant}`}>
                            Complete Detail
                        </div>
                        <div className="services__subtitle">$285</div>
                        <ul className={`services__list ${rob}`}>
                            <li
                                className={`services__item services__item-first2 ${ant}`}
                            >
                                Exterior Detail
                            </li>
                            <li
                                className={`services__item  services__item-first2 ${ant}`}
                            >
                                Interior Detial
                            </li>
                            <span>+</span>
                            <li className="services__item">
                                Degrease & Shine Engine Compartment
                            </li>
                            {/* <li className="services__item">item</li>
                            <li className="services__item">item</li> */}
                        </ul>
                    </div>
                    <div className={`read-more ${rob}`}>
                        <div className="read-more-text">Book</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
