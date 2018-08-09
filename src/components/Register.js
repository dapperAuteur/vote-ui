import React from 'react';
import { Link } from 'react-router-dom';

const Register = props => {
    console.log(props);
    return (
        <div>
            <Link
                to={{
                    pathname: '/qualify'
                }}
            >
                Register To Vote In The Unite States
            </Link>
        </div>
    )
}

export default Register;