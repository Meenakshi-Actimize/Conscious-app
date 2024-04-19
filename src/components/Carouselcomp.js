import * as React from 'react';
import Carousel from 'react-material-ui-carousel';

function Carouselcomp() {
    const imagedata = [
        { img: './images/Screenshot 2024-04-04 145205.png' },
        { img: './images/Screenshot 2024-04-04 145052.png' },
        { img: './images/Screenshot 2024-04-04 145115.png' },
        { img: './images/Screenshot 2024-04-04 145143.png' },
        { img: './images/Screenshot 2024-04-04 153240.png' }
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
