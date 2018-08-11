import React from 'react';
import { Link } from 'react-router-dom';
import './Qualify.css';

const Register = props => {
    console.log(props);
    let pathname = props.location.pathname;
    if (pathname === "/qualify/es") {
        return (
            <div>
                <p>¿Es usted ciudadano de Estados Unidos de América?</p>
                <p>Y</p>
                <p>¿Habrá cumplido los 18 años de edad para el día de las elecciones?</p>
                <Link
                    to={{
                        pathname: '/qualify'
                    }}
                    className="reg-link btn default-btn"
                >
                    Sí
                </Link>
                <Link
                    to={{
                        pathname: '/no-qualify'
                    }}
                    className="reg-link btn default-btn"
                >
                    No
                </Link>
            </div>
        )
    } else {
        return (
            <div>
                <p>Are you a citizen of the United States of America?</p>
                <p>And</p>
                <p>Will you be 18 years old on or before election day?</p>
                <Link
                    to={{
                        pathname: '/qualify'
                    }}
                    className="reg-link btn default-btn"
                >
                    Yes
                </Link>
                <Link
                    to={{
                        pathname: '/no-qualify'
                    }}
                    className="reg-link btn default-btn"
                >
                    No
                </Link>
            </div>
        )
    }
}

export default Register;