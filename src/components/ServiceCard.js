import { useNavigate } from 'react-router';

import ServiceCardStyles from '../css/ServiceCard.module.css';

export default function ServiceCard({ service, clickable = true }) {
    const navigate = useNavigate();

    // console.log(`ServiceCard: service.id = ${service.id}, clickable = ${clickable}`);

    return (
        <div key={service.id}
            className={`${ServiceCardStyles["service-card"]}`}
            onClick={() => clickable && navigate(`/services/${service.id}`)}
            title={`Learn more about ${service.name}`}
            style={{ cursor: (clickable ? 'pointer' : 'default') }}
        >
            <h3>{service.name}</h3>
            <p>{service["short-description"]}</p>
            <button style={{cursor: (clickable? 'pointer': 'default')}}>{clickable ? "Learn More" : "Coming Soon"}</button>
        </div>
    );
}