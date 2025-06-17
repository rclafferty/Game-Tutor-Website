import { useParams } from "react-router";

import ExplanationDropdown from './ExplanationDropdown';

import styles from '../css/Service.module.css'
import ServicesJson from '../json/Services.json';

export default function Service() {
    const { id } = useParams();
    const details = ServicesJson.services.find(x => String(x.id) === id);

    if (!details) return <div>Loading...</div>;

    return (
        <>
            <h1 className={`col-12 header`}>{details.name}</h1>
            <h2 className={`col-12 header`}>{details.subtitle}</h2>
            <div className="row">
                <div className>
                    <div className="row">
                        <p className="col-12 mt-3">{details.description}</p>
                    </div>
                    <div className="row">
                        <h5 className={"col-12 mt-3 " + styles["service-header"]}>Services Included:</h5>
                        
                        <ExplanationDropdown json={details.benefits} />
                    </div>
                    <div className="row">
                        <h6 className="col-12 mt-3 fst-italic"><strike>{`Cost: $${details.price} ${details.priceType}`}</strike> <div className={styles.discount}>Limited time: $10 per session the first two sessions (75% off)! New students only</div></h6>
                    </div>
                    <div className="row">
                        <h6 className="col-12 mt-3 fst-italic">{`Typically ${details["session-length"]} per session`}</h6>
                    </div>
                    <div className="row">
                        <h5 className={"col-12 mt-3 " + styles["service-header"]}>Topics Covered:</h5>
                        
                        <ExplanationDropdown json={details.topics} />
                    </div>
                    <div className="row">
                        <h5 className={"col-12 mt-3 " + styles["service-header"]}>Optional Addons:</h5>
                        <ol className={`${styles['margin-left']}`}>
                        {details.addons.map((_, i) => {
                            const addon = details.addons[i % details.addons.length];
                            return (
                                addon["currently-offered"] && <li key={i}>{addon.name} (${addon.price} {addon.priceType})</li>
                            );
                        })}
                        </ol>
                    </div>
                    <p>* addons available upon request by student</p>
                </div>
            </div>
        </>
    );
}