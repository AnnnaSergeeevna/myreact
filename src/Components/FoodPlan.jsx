import React, { useState } from 'react';
import classes from '../App.css';
import image1 from '../Components/PicsForFoodPlan/image1.jpg';
import image2 from '../Components/PicsForFoodPlan/image2.jpg';
import image3 from '../Components/PicsForFoodPlan/image3.jpg';
import image4 from '../Components/PicsForFoodPlan/image4.jpg';
import image5 from '../Components/PicsForFoodPlan/image5.jpg';
import image6 from '../Components/PicsForFoodPlan/image6.jpg';
import image7 from '../Components/PicsForFoodPlan/image7.jpg';
import image8 from '../Components/PicsForFoodPlan/image8.jpg';
import image9 from '../Components/PicsForFoodPlan/image9.jpg';

const Controls = ({ onPrev, onNext, onZoomOut }) => {
    return (
        <div className="controls">
            <button className="controlButton" onClick={onPrev}>←</button>
            <button className="controlButton" onClick={onNext}>→</button>
        </div>
    );
};

const FoodPlan = () => {
    const [zoomedIndex, setZoomedIndex] = useState(null);

    const handleImageClick = (index) => {
        setZoomedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleZoomOut = () => {
        setZoomedIndex(null);
    };

    const handlePrev = () => {
        setZoomedIndex((prevIndex) => (prevIndex === 0 ? null : prevIndex - 1));
    };

    const handleNext = () => {
        setZoomedIndex((prevIndex) => (prevIndex === images.length - 1 ? null : prevIndex + 1));
    };

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

    return (
        <>
            <h2>⬇ This is a link to my current project ⬇</h2>
            <a className='foodPlanLink' href="https://65b6bea4213eeea16b80d924--phenomenal-liger-ccb02d.netlify.app/" target="_blank">Food Plan</a>
            <p>It has a lot of tables, forms, required fields, requests to the server.</p>
            <p>There is animation of pressing buttons, colors of buttons depending on ID, modal windows.</p>
            <h3>Push on pic, this is a screenshots of working backend:</h3>

            {zoomedIndex !== null ? (
                <>
                    <div className='gridCont zoomed'>
                        <img
                            src={images[zoomedIndex]}
                            alt={`Image ${zoomedIndex + 1}`}
                            className={`gridImage`}
                            onClick={handleZoomOut}
                        />
                        <Controls onPrev={handlePrev} onNext={handleNext} onZoomOut={handleZoomOut} />

                    </div>


                </>
            ) : (
                <div className='gridCont'>
                    {images.map((image, index) => (
                        <div key={index} className='gridImageContainer'>
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                title={`Image ${index + 1}`}
                                className={`gridImage`}
                                onClick={() => handleImageClick(index)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default FoodPlan;

