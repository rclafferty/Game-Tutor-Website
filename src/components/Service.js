import { useLocation, useParams } from "react-router";

import DiscountBanner from './DiscountBanner';

import styles from '../css/Service.module.css'
import ServicesJson from '../json/Services.json';

export default function Service() {
    // const location = useLocation();
    // const { house } = location.state;

    const { id } = useParams();
    const details = ServicesJson.services.find(x => String(x.id) === id);

    if (!details) return <div>Loading...</div>;

    return (
        <>
            <div className="row">
                <div className="col-5">
                    <div className="row">
                        <img className="img-fluid" src={details.image ? `/images/${details.image}.jpeg` : '/images/defaultphoto.jpeg'} alt="" />
                    </div>
                </div>
                <div className="col-6 offset-1">
                    <div className="row mt-2">
                        <h1 className="col-12">{details.name}</h1>
                    </div>
                    <div className="row">
                        <h2 className="col-12">{details.subtitle}</h2>
                    </div>
                    <div className="row">
                        {/* <h2 className="themeFontColor col-12">{currencyFormat.format(details.price)}</h2> */}
                        <p className="col-12 mt-3">{details.description}</p> {/* fw-bold = Bootstrap bold */}
                    </div>
                    <div className="row">
                        <h6 className="col-12 mt-3 fst-italic"><strike>{`Cost: $${details.price} ${details.priceType}`}</strike> <div className={styles.discount}>Limited time: First two sessions free!</div></h6> {/* fst-italic = Bootstrap italic */}
                    </div>
                    <div className="row">
                        <h6 className="col-12 mt-3 fst-italic">{`Typically ${details["session-length"]} per session`}</h6> {/* fst-italic = Bootstrap italic */}
                    </div>
                    {/* <DiscountBanner /> */}
                    <div className="row">
                        <h5 className="col-12 mt-3">Services Included:</h5>
                        <ol>
                        {details.benefits.map((_, i) => {
                            const benefit = details.benefits[i % details.benefits.length];
                            return (
                                <li key={i}>{benefit}</li>
                            );
                        })}
                        </ol>
                    </div>
                    <div className="row">
                        <h5 className="col-12 mt-3">Optional Addons:</h5>
                        <ol>
                        {details.addons.map((_, i) => {
                            const addon = details.addons[i % details.addons.length];
                            return (
                                <li key={i}>{addon.name} (${addon.price} {addon.priceType})</li>
                            );
                        })}
                        </ol>
                    </div>
                    <div className="row">
                        <h5 className="col-12 mt-3">Topics Covered:</h5>
                        <ol>
                        {details.topics.map((_, i) => {
                            const topic = details.topics[i % details.topics.length];
                            return (
                                <li>{topic}</li>
                            );
                        })}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}