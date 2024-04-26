import * as React from 'react';
import Carousel from 'react-material-ui-carousel';

function Carouselcomp() {
    const imagedata = [
        { img: './images/carousel1.png' },
        { img: './images/carousel2.png' },
        { img: './images/carousel3.png' },
        { img: './images/carousel4.png' },
        { img: './images/carousel5.png' }
    ];

    return (
        <Carousel>
            {imagedata.map((item, index) => (
                <div key={index}>
                    <img
                        src={item.img}
                        alt={`image-${index}`}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            ))}
        </Carousel>
    );
}

export default Carouselcomp;
