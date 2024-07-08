import './Cards.css';

export function Cards() {
    return (

        <>
            <div className="grid">
                <div className="row my-3">
                    <h2 className="text-center">Ми надаємо послуги:</h2>
                </div>
                <div className="row justify-content-evenly">
                    <div className="col col-4">
                        <div className="card">
                            <div className="card-content">
                                <i className="bi bi-briefcase-fill bi-card"></i>
                                <h2>Юридичним особам</h2>
                                
                            </div>

                        </div>

                    </div>
                    <div className="col col-4">
                        <div className="card">
                            <div className="card-content">
                                <i className="bi bi-person-standing bi-card"></i>
                                <h2>Фізичним особам</h2>
                               
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
                <div className="row my-3">
                    <h2 className="text-center">Адвокати нашої команди компетентні в наступних сферах:</h2>

                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-content">
                                <img src="./img/icons/business.png" className="icons"/>
                                <h2>Господарське право та процес</h2>
                                <p>Cпеціалізовані послуги для суб'єктів господарювання</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-content">
                              <img src="./img/icons/civil.png" className="icons"/>
                                <h2>Цивільне право та процес</h2>
                                <p>Представництво та захист прав клієнтів у цивільному судочинстві</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-content">
                                <img src="./img/icons/court.png" className="icons"/>
                                <h2>Адміністративне право та процес</h2>
                                <p>Ведення справ зі спорів із суб'єктами владних повноважень</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-content">
                                 <img src="./img/icons/criminal.png" className="icons"/>
                                <h2>Кримінальне право та процес</h2>
                                <p>Захист учасників кримінальних проваджень</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}