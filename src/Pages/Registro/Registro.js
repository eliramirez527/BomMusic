import React, { useState } from "react";
import Layout from "../../Componentes/Layout/Layout";
import '../Registro/Registro.css';
import iconoFacebook from '../../Imagenes/iconofacebook.png';
import iconoGoogle from '../../Imagenes/iconogoogle.png';
import iconoTelefono from '../../Imagenes/iconotelefono.png';
import { HiArrowLeft } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = (field) => {
        if (field === "password") {
            setShowPassword(!showPassword);
        } else if (field === "confirmPassword") {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    return (
        <Layout>
            <button className="back-button" onClick={() => navigate('/')}>
                <div className="icon-circle">
                    <HiArrowLeft size={24} />
                </div>
                Atrás
            </button>
            <div>
                <h4 className="titulo-registrate">Regístrate Con BomMusic</h4>
                <div className="container">
                    <div className="col-md-4">
                        <div className="padre">
                            <form className="formulario">
                                {/* Contenedor de la imagen */}
                                <div className="contenedor-imagen">
                                    <img src="https://cdn-icons-png.flaticon.com/512/6378/6378141.png" alt="" className="estilo-profile" />
                                </div>
                                <div style={{ display: 'flex', marginBottom: '15px' }}> {/* Contenedor flex para los campos de nombre y apellido */}
                                    <input type="text" className="NombreColor" placeholder="Nombre" /> {/* Campo de Apellido */}
                                    <input type="text" className="ApellidoColor" placeholder="Apellido" /> {/* Campo de Nombre */}
                                </div>
                                <input type="tel" className="TelefonoColor" style={{ width: '130%' }} placeholder="Teléfono" />
                                <input type="text" className="EmailColor" style={{ width: '130%' }} placeholder="Email" />

                                {/* Campo de Contraseña */}
                                <div className="password-input" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '130%' }}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="ContraseñaColor"
                                        placeholder="Contraseña"
                                        style={{ width: '100%' }}
                                    />
                                    <span
                                        className="toggle-password"
                                        onClick={() => togglePasswordVisibility("password")}
                                    >
                                        {showPassword ? "Ocultar" : ""}
                                    </span>
                                </div>

                                {/* Campo de Confirmar Contraseña */}
                                <div className="password-input" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '130%' }}>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        className="ConfirmarColor"
                                        placeholder="Confirmar contraseña"
                                        style={{ width: '100%' }}
                                    />
                                    <span
                                        className="toggle-password"
                                        onClick={() => togglePasswordVisibility("confirmPassword")}
                                    >
                                        {showConfirmPassword ? "Ocultar" : ""}
                                    </span>
                                </div>

                                <button className="botonRegistro">Regístrate</button>

                                <p className="enlace-iniciar-sesion">¿Ya tienes cuenta? <a className="colorInicio" href="#">Inicia sesión</a></p>
                            </form>

                        </div>
                    </div>
                </div>
                <br />
                <center><p className="linea">__________0___________</p></center>
                <div className="botones-registro">
                    <button className="botonRegistro" style={{ width: '600px' }}>
                        <img src={iconoGoogle} alt="Google Icon" className="icono-boton" style={{ width: '30px', marginRight: '10px' }} />
                        <span style={{ display: 'inline-block', verticalAlign: 'middle', fontSize: '16px', color: 'white', textAlign: 'left' }}>Registrarse con Google</span>
                    </button>

                    <button className="botonRegistro" style={{ width: '600px' }}>
                        <img src={iconoFacebook} alt="Facebook Icon" className="icono-boton" style={{ width: '30px', marginRight: '10px' }} />
                        <span style={{ display: 'inline-block', verticalAlign: 'middle', fontSize: '16px', color: 'white', textAlign: 'left' }}>Registrarse con Facebook</span>
                    </button>

                    <button className="botonRegistro" style={{ width: '600px' }}>
                        <img src={iconoTelefono} alt="Phone Icon" className="icono-boton" style={{ width: '30px', marginRight: '10px' }} />
                        <span style={{ display: 'inline-block', verticalAlign: 'middle', fontSize: '16px', color: 'white', textAlign: 'left' }}>Registrarse con Número de Teléfono</span>
                    </button>

                </div>
            </div>
        </Layout>
    );
};

export default Registro;
