import './Slider.css';
import { useState, useEffect } from 'react';

export function Slider() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [showText, setShowText] = useState(false);

    const goToSlide = (slideNumber: number) => {
        setCurrentSlide(slideNumber);
    }

    const nextSlide = () => {
        setCurrentSlide(prevSlide => prevSlide < 3 ? prevSlide + 1 : 1);
    }

    const prevSlide = () => {
        setCurrentSlide(prevSlide => prevSlide > 1 ? prevSlide - 1 : 3);
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 6000); // Автопрокрутка каждые 5 секунд
        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, []);

    useEffect(() => {
        setShowText(false); // Скрываем текст перед переключением слайда
        const timer = setTimeout(() => {
            setShowText(true); // Показ текста с задержкой в 1 секунду
        }, 500);
        return () => clearTimeout(timer); // Очистка таймера при смене слайда
    }, [currentSlide]);

    return (
        <section className="section-slider">
            <div className="wrapper">
                <input type="radio" name="point" id="slide1" checked={currentSlide === 1} onChange={() => goToSlide(1)} />
                <input type="radio" name="point" id="slide2" checked={currentSlide === 2} onChange={() => goToSlide(2)} />
                <input type="radio" name="point" id="slide3" checked={currentSlide === 3} onChange={() => goToSlide(3)} />

                <div className="slider">
                    <div className={`slides slide1 ${currentSlide === 1 && showText ? 'show-text' : ''}`}>
                        <div className="background"></div>
                        <div className="text">
                            <p className="text-center">З НАМИ</p>
                            <p className="text-center line_2">Ви завжди на шаг попереду</p>
                            <p className="text-center line_3">Стратегії наших адвокатів допоможуть упередити помилки та підвищити шанси</p>
                        </div>
                        <div className="image" style={{ backgroundImage: "url('img/chess.jpg')" }}></div>
                        
                    </div>
                    <div className={`slides slide2 ${currentSlide === 2 && showText ? 'show-text' : ''}`}>
                        <div className="background"></div>
                        <div className="image" style={{ backgroundImage: "url('img/me.png')" }}></div>
                        <div className="text text-slide2">
                            <p className="text-center">МИ ПРОПОНУЄМО</p>
                            <p className="text-center line_2">Доступну та ефективну юридичну допомогу</p>
                            <p className="text-center line_3">Наша команда здійснює необхідний юридичний супровід справ різних категорій</p>
                        </div>
                    </div>
                    <div className={`slides slide3 ${currentSlide === 3 && showText ? 'show-text' : ''}`}>
                        <div className="background"></div>
                        <div className="image" style={{ backgroundImage: "url('img/pazl.jpg')" }}></div>
                        <div className="text">
                            <p className="text-center">НАША МЕТА</p>
                            <p className="text-center line_2">Знайти найкоротший шлях до результату</p>
                            <p className="text-center line_3">Ми володіємо обширним досвідом в різних сферах права</p>
                        </div>
                    </div>
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