import { useParams } from "react-router";

import styles from '../css/Service.module.css'

import ExplanationDropdown from './ExplanationDropdown';
import ImageMarquee from "./ImageMarquee";
import CostExplanationDropdown from "./CostExplanationDropdown";
import PriceChart from "./PriceChart";

import currencyFormat from "../helpers/currencyFormat";

import ServicesJson from '../json/Services.json';
import ServiceImagesJson from '../json/MarqueeImages.json';

export default function Service() {
    const { id } = useParams();
    const details = ServicesJson.services.find(x => String(x.id) === id);

    if (!details) return <div>Loading...</div>;
    console.log(id);

    // Find all image objects with matching id
    // Find all image objects with matching id and shuffle them
    let images = ServiceImagesJson.images
        .filter(img => String(img.service) === id)
        .sort(() => Math.random() - 0.5);

    if (images.length === 0) {
        images = ServiceImagesJson.images
            .filter(img => String(img.service) === 'default')
            .sort(() => Math.random() - 0.5);
    }

    const offers = ServicesJson["pricing-offers"].filter(offer => offer["currently-offered"])

    return (
        <>
            <ImageMarquee images={images} useSubtitle2={false} useLinks={false}/>

            <div className="container">
                <h1 className={`col-12 header`}>{details.name}</h1>
                <h2 className={`col-12 header`}>{details.subtitle}</h2>
                <div className="row">
                    <div>
                        <p className="col-12 mt-3">{details.description}</p>
                        
                        <h5 style={{fontWeight: "bold"}}>{`Cost: ${currencyFormat.format(details.price)} ${details.priceType}`}*</h5>
                        <PriceChart allOffers={offers} price={details.price}/>

                        <h6 className="col-12 mt-3 fst-italic">{`Typically ${details["session-length"]} per session`}</h6>
                        
                        <div className={styles["explanation-group"]} >
                            <h5 className={"col-12 mt-3 " + styles["service-header"]}>Services Included:</h5>
                            {details.benefits.map((benefit, i) => (
                                <ExplanationDropdown key={i} json={benefit} />
                            ))}
                        </div>
                        
                        <div className={styles["explanation-group"]} >
                            <h5 className={"col-12 mt-3 " + styles["service-header"]}>Topics Covered:</h5>
                            {details.topics.map((topic, i) => (
                                <ExplanationDropdown key={i} json={topic} />
                            ))}
                        </div>
                        
                        <div className={styles["explanation-group"]} >
                            <h5 className={`col-12 mt-3 ${styles["service-cost"]}`}>Optional Addons:</h5>
                            {ServicesJson['addons'].map((addon, i) => (
                                <CostExplanationDropdown key={i} json={addon} price={addon.price} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}