import React from 'react';
import Layout from '../../Componentes/Layout/Layout';
import Planes from '../Planes/planes';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2'; 
import '../PlanesPro/PlanesPro.css';

function PlanesPro() {
    const navigate = useNavigate(); 

    return (
        <Layout>
            <div className="App">
                <button className="back-button" onClick={() => navigate('/')}> 
                    <div className="icon-circle">
                        <HiArrowLeft size={24} />
                    </div>
                    Atrás
                </button>
                <h1 className="titulo-suscripciones">Suscripciones</h1>
                
                <div className="contenedor-externo">
                    <h2 className="subtitulo-suscripciones">Suscripción personal</h2>
                    <div className="contenedor-principal">
                        <div className="plan">
                            <Planes
                                plan="Suscripción personal por un mes"
                                precio="14.500 COP"
                                amount="14500"
                            />
                        </div>
                        <div className="plan">
                            <Planes
                                plan="Suscripción personal por 3 meses"
                                precio="24.500 COP"
                                amount="24500"
                            />
                        </div>
                        <div className="plan">
                            <Planes
                                plan="Suscripción premium por un año"
                                precio="150.000 COP"
                                amount="150000"
                            />
                        </div>
                    </div>
                </div>

                <br />

                <div className="contenedor-externo">
                    <h2 className="subtitulo-suscripciones">Suscripción Duo</h2>
                    <div className="contenedor-principal">
                        <div className="plan">
                            <Planes
                                plan="Suscripción Duo por un mes"
                                precio="20.800 COP"
                                amount="20800"
                            />
                        </div>
                        <div className="plan">
                            <Planes
                                plan="Suscripción Duo por 3 meses"
                                precio="50.800 COP"
                                amount="50800"
                            />
                        </div>
                        <div className="plan">
                            <Planes
                                plan="Suscripción Duo premium por un año"
                                precio="200.000 COP"
                                amount="200000"
                            />
                        </div>
                    </div>
                </div>

                <br />

                <div className="contenedor-externo">
                    <h2 className="subtitulo-suscripciones">Suscripción familiar</h2>
                    <div className="contenedor-principal">
                        <div className="plan">
                            <Planes
                                plan="Suscripción familiar por un mes"
                                precio="30.800 COP"
                                amount="30800"
                            />
                        </div>
                        <div className="plan">
                            <Planes
                                plan="Suscripción familiar por 3 meses"
                                precio="80.800 COP"
                                amount="80800"
                            />
                        </div>
                        <div className="plan">
                            <Planes
                                plan="Suscripción familiar premium por un año"
                                precio="300.000 COP"
                                amount="300000"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PlanesPro;
