import React from 'react';
import Layout from '../../Componentes/Layout/Layout';
import '../Login/Login.css';

const LoginForm = () => {
  return (
    <Layout>
    <div>
        <div className="container-login">
          <h2 className="tittle">Inicia sesión con BomMusic</h2> 

          <div className="login-form"> 
            <img src="https://i.postimg.cc/Sswwhpcc/personone.png" alt="Persona" className="person-icon" /> 
            <input type="text" placeholder="Email" className="input-field" /> {/* Permite al usuario ingresar su dirección de correo electrónico */}

            <div className="password-toggle">
              <input type="password" id="password" placeholder="Contraseña" /> {/* Permite al usuario ingresar su contraseña */}
            </div>

            <button type="submit">Iniciar sesión</button> {/* Permite al usuario enviar el formulario de inicio de sesión */}
            <a href="#">¿Olvidaste tu contraseña?</a> {/* Enlace para restablecer la contraseña */}
            <p className='Color-parrafo'>¿No tienes cuenta? <span><a href="#">Regístrate</a></span></p> {/* Enlace para registrarse en la aplicación */}

          </div> {/* Cierre del formulario de inicio de sesión */}

          <div className="social-login"> {/* Iniciar sesión con redes sociales */}
            <button>
              <img src="https://i.postimg.cc/qgfJ8QKp/png-transparent-google-logo-google-text-trademark-logo-thumbnail-removebg-preview.png" alt="Google" />
              Iniciar sesión con Google
            </button>
            <button>
              <img src="https://i.ibb.co/Y3gD4B6/descarga-removebg-preview.png" alt="Facebook" />
              Iniciar sesión con Facebook
            </button>
            <button>
              <img src="https://i.postimg.cc/4dySJRkW/imgtelephone.png" alt="Teléfono" />
              Iniciar sesión con tu numero teléfonico
            </button>
          </div> {/* Cierre de la sección de inicio de sesión con redes sociales */}
        </div> {/* Cierre del contenedor principal */}
    </div> 
    </Layout >

  ); 
}

export default LoginForm;
