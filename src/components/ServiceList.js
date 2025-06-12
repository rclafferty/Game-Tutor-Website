import { useState } from 'react';

import ServicesJson from '../json/Services.json';

import ServiceCard from './ServiceCard';
import ServiceCardStyles from '../css/ServiceCard.module.css';

export default function ServiceList() {
    const [services] = useState(ServicesJson.services);
    const [primaryServices] = useState(ServicesJson["primary-services"]);
    const [secondaryServices] = useState(ServicesJson["secondary-services"]);

    if (!services || services.length === 0) {
        return <p>No services available at the moment.</p>;
    }

    const getServiceById = (id) => services.find(service => service.id === id && service['currently-offered']);

    return (
        <>
            <div className={ServiceCardStyles["services"]}>
                {primaryServices.map(({id}, i) => {
                    const service = getServiceById(id);
                    if (!service) {
                        console.log(`primaryServices[${i}] (id: ${id}) is undefined`);
                        return null;
                    }
                    return (
                        <ServiceCard
                            key={i}
                            id={service.id}
                            name={service.name}
                            description={service.description}
                        />
                    );
                })}
            </div>
            <div className={ServiceCardStyles["services"]}>
                {secondaryServices.map(({id}, i) => {
                    const service = getServiceById(id);
                    if (!service) {
                        console.log(`secondaryServices[${i}] (id: ${id}) is undefined`);
                        return null;
                    }
                    return (
                        <ServiceCard
                            key={id}
                            id={service.id}
                            name={service.name}
                            description={service.description}
                        />
                    );
                })}
            </div>
        </>
    );
}