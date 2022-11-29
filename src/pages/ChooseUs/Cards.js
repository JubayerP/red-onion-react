import React from 'react';

const Cards = ({ about }) => {
    console.log(about);
    const { name, img, icon, desc } = about;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Cards;