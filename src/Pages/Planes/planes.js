import React, { useEffect, useState } from 'react';
import '../Planes/Planes.css';

function Planes(props) {
    const [isEpaycoLoaded, setIsEpaycoLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.epayco.co/checkout.js';
        script.async = true;

        script.onload = () => {
            setIsEpaycoLoaded(true);
        };

        script.onerror = () => {
            console.error('Error loading ePayco script');
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handlePayment = () => {
        if (!isEpaycoLoaded) {
            console.error('ePayco script not loaded');
            return;
        }

        const handler = window.ePayco.checkout.configure({
            key: '026134e717c91c44ffa450af98cd71bd',
            test: true,
        });

        const data = {
            name: 'Suscripciones',
            description: 'Suscripciones',
            currency: 'cop',
            amount: props.amount,
            tax_base: props.amount,
            tax: '2755.00',
            tax_ico: '0.00',
            country: 'CO',
            lang: 'es',
            external: 'false',
            response: '', // URL de respuesta después del pago
            confirmation: '', // URL de confirmación del pago
        };

        handler.open(data);
    };

    return (
        <div className="contenedor-plan">
            <p className="texto-plan">{props.plan}</p>
            <button className="boton-plan" onClick={handlePayment}>
                {props.precio}
            </button>
        </div>
    );
}

export default Planes;
