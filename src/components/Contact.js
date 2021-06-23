import React from 'react';
import {useSelector} from 'react-redux';

function Contact() {

    const state = useSelector (state => state);

    return (
        <div>
            contact
            <h5>Hello {state.name}</h5>
            <h5>Hello {state.email}</h5>
        </div>
    )
}

export default Contact
