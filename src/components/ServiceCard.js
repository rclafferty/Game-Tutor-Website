import { useNavigate } from 'react-router';

import ServiceCardStyles from '../css/ServiceCard.module.css';

export default function ServiceCard(service) {
    const navigate = useNavigate();

    return (
        <div className={ServiceCardStyles["service-card"]} onClick={() => navigate(`/service/${service.id}`)} title={`Learn more about ${service.name}`}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <button>Learn More</button>
        </div>
    );
}