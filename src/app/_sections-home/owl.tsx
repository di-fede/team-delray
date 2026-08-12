import { Antonio, Playfair_Display, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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

export default function Owl() {
    return (
        <div className="owl">
            <div className="owl__grid">
                <Link
                    href={"/basic-detail"}
                    className="owl__bikeshop owl__column"
                >
                    <div className="owl__stocklist-label owl__label">
                        <div className={`owl__topText ${rob}`}>
                            Latest Stocklist
                        </div>
                        <div className="borderBottom"></div>
                    </div>
                    <div className="owl__background">
                        <img
                            className="owl__img"
                            src="/image/bg-1.png"
                            alt=""
                        />
                    </div>
                    <div className="owl__text-center">
                        <div className={`owl__title ${ant}`}>BikeLicious</div>
                        <div className="owl__subtitle">Norway</div>
                    </div>
                    <div className={`read-more ${rob}`}>
                        <div className="read-more-text">Read More</div>
                    </div>
                </Link>

                <div className="owl__kit owl__column">
                    <div className="owl__product-label owl__label">
                        <div className={`owl__topText ${rob}`}>
                            Latest Product
                        </div>
                        <div className="borderBottom"></div>
                    </div>
                    <div className="owl__background">
                        <img
                            className="owl__img"
                            src="/image/bg-2.png"
                            alt=""
                        />
                    </div>
                    <div className="owl__text-center">
                        <div className={`owl__title ${ant}`}>Campos Kit</div>
                        <div className="owl__subtitle">Our Race Kit</div>
                    </div>
                    <div className={`read-more ${rob}`}>
                        <div className="read-more-text">Read More</div>
                    </div>
                </div>
                <div className="owl__insta owl__column">
                    <div className="owl__latest-label owl__label">
                        <div className={`owl__topText ${rob}`}>Latest</div>
                        <div className="borderBottom"></div>
                    </div>
                    <div className="owl__background">
                        <img
                            className="owl__img"
                            src="/image/bg-3.jpg"
                            alt=""
                        />
                    </div>
                    <div className="owl__text-center">
                        <div className={`owl__title ${ant}`}>Our Instagram</div>
                        <div className="owl__subtitle">Santa Catarina</div>
                    </div>
                    <div className={`read-more ${rob}`}>
                        <div className="read-more-text">Read More</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
