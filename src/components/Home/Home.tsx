import './Home.css';
import { useState } from 'react';
export function Home() {
    const [currentSlide, setcurrentSlide]=useState(1);
    const goToSlide = (slideNumber:number) => {
        setcurrentSlide(slideNumber);
    }

    const nextSlide = () => {
        if (currentSlide < 3) {
            setcurrentSlide(currentSlide + 1);
        }
        else {
            setcurrentSlide(1);
        }
    }

    const prevSlide = () => {
        if (currentSlide > 1) {
            setcurrentSlide(currentSlide - 1);
        } else {
            setcurrentSlide(3);
        }
    }
    return (
        <section>
            <div className="wrapper">
                <input type="radio" name="point" id="slide1" checked={currentSlide === 1} onChange={() => goToSlide(1)} />
                <input type="radio" name="point" id="slide2" checked={currentSlide === 2} onChange={() => goToSlide(2)} />
                <input type="radio" name="point" id="slide3" checked={currentSlide === 3} onChange={() => goToSlide(3)} />

                <div className="slider" >
                    <div className="slides slide1"></div>
                    <div className="slides slide2"></div>
                    <div className="slides slide3"></div>
                </div>
                <div className="controls">
                    <label htmlFor="slide1" onClick={() => goToSlide(1)}></label>
                    <label htmlFor="slide2" onClick={() => goToSlide(2)}></label>
                    <label htmlFor="slide3" onClick={() => goToSlide(3)}></label>
                </div>
                <div className="navigation">
                    <button className="prev" onClick={prevSlide}><i className="bi bi-arrow-left-circle-fill"></i></button>
                    <button className="next" onClick={nextSlide}><i className="bi bi-arrow-right-circle-fill"></i></button>
                </div>
            </div>
        </section>
    );
}