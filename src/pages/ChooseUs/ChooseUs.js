import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const ChooseUs = () => {
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        fetch('about.json')
            .then(res => res.json())
            .then(data => setAbouts(data));
    },[])
    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl my-5'>Why You Choose Us</h2>

            <div>
                {
                    abouts.map(about => <Cards about={about} key={about.id} />)
                }
            </div>
        </div>
    );
};

export default ChooseUs;