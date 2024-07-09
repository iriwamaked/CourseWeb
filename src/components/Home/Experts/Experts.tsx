import { useEffect } from 'react';
import './Experts.css';

export function Experts() {

    useEffect(() => {
        const handleResize = () => {
            const thumbnails = document.querySelectorAll('.thumbnail-variant-2-wrap');
            thumbnails.forEach(thumbnail => {
                if (window.innerWidth >= 992) {
                    thumbnail.classList.add('desktop');
                } else {
                    thumbnail.classList.remove('desktop');
                }
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (

        <section >
            <h3 className="text-center mb-5 fs-1">Склад Адвокатського об'єднання "Македонські та партнери"</h3>
            <div className="container">
                <div className="row row-40 align-items-sm-end">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="thumbnail-variant-2-wrap">
                            <div className="thumbnail thumbnail-variant-2">
                                <figure className="thumbnail-image"><img src="./img/team/i.jpg" alt=""  />
                                </figure>
                                <div className="thumbnail-inner">
                                    <div className="link-group"><i className="bi bi-telephone-fill gold-color"></i><a className="link-white ls" href="tel:#">+380630599225</a></div>
                                    <div className="link-group"><i className="bi bi-telephone-fill gold-color"></i><a className="link-white ls" href="tel:#">+380683861485</a></div>
                                    <div className="link-group"><i className="bi bi-envelope-at-fill gold-color"></i><a className="link-white" href="mailto:#">adv.makedonskaya@gmail.com</a></div>
                                </div>
                                <div className="thumbnail-caption">
                                    <p className="text-header"><a href="#">Ірина МАКЕДОНСЬКА</a></p>
                                    <div className="divider divider-md bg-teak"></div>
                                    <p className="text-caption">Адвокат, керуючий партнер</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="thumbnail-variant-2-wrap">
                            <div className="thumbnail thumbnail-variant-2">
                                <figure className="thumbnail-image"><img src="./img/team/dad.jpg" alt=""  width="246" height="300"/>
                                </figure>
                                <div className="thumbnail-inner">
                                    <div className="link-group"><i className="bi bi-telephone-fill gold-color"></i><a className="link-white ls" href="tel:#">+380679047543</a></div>
                                    <div className="link-group"><i className="bi bi-telephone-fill gold-color"></i><a className="link-white ls" href="tel:#">+380739047543</a></div>
                                    <div className="link-group"><i className="bi bi-envelope-at-fill gold-color"></i><a className="link-white" href="mailto:#">adv.makedonskui@gmail.com</a></div>
                                </div>
                                <div className="thumbnail-caption">
                                    <p className="text-header"><a href="#">Олександр МАКЕДОНСЬКИЙ</a></p>
                                    <div className="divider divider-md bg-teak"></div>
                                    <p className="text-caption">Адвокат, старший партнер</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="thumbnail-variant-2-wrap">
                            <div className="thumbnail thumbnail-variant-2">
                                <figure className="thumbnail-image"><img src="./img/team/eu.jpg" alt=""  />
                                </figure>
                                <div className="thumbnail-inner">
                                    <div className="link-group"><i className="bi bi-telephone-fill gold-color"></i><a className="link-white ls" href="tel:#">+380509267146</a></div>
                                    <div className="link-group"><i className="bi bi-envelope-at-fill gold-color"></i><a className="link-white" href="mailto:#">bikova.eu@ukr.net</a></div>
                                </div>
                                <div className="thumbnail-caption">
                                    <p className="text-header"><a href="#">Олена БИКОВА</a></p>
                                    <div className="divider divider-md bg-teak"></div>
                                    <p className="text-caption">Aдвокат, партнер</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="thumbnail-variant-2-wrap">
                            <div className="thumbnail thumbnail-variant-2">
                                <figure className="thumbnail-image"><img src="./img/team/buhor.jpg" alt=""  />
                                </figure>
                                <div className="thumbnail-inner">
                                    <div className="link-group"><i className="bi bi-sign-stop-fill gold-color fs-1"></i>
                                    <p className="link-white" href="#">Право на заняття <br />адвокатською діяльністю зупинено <br />на період служби в ЗСУ</p>
                                    </div>
                                  
                                </div>
                                <div className="thumbnail-caption">
                                    <p className="text-header"><a href="#">Олександр БУГОР</a></p>
                                    <div className="divider divider-md bg-teak"></div>
                                    <p className="text-caption">Адвокат, партнер</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}