import React from 'react';
import {useSelector} from 'react-redux';

function Home() {

    const state = useSelector (state => state);

    return (
        <div>
            home
            <h5>Hello {state.name}</h5>
            <h5>Hello {state.email}</h5>
            <h5>Hello {state.phone}</h5>
        </div>
    )
}

export default Home;
