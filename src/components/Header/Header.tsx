import './Header.css'
import { Link } from "react-router-dom";
export function Header() {
    return (
        <>
            <header >
                <nav className="navbar bg-body-tertiary ps-4 fsm-nav1" >
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-start">
                            <ul className="navbar-nav d-flex flex-row text-sm fw-medium text-secondary">
                                <li className="nav-item me-3 d-flex align-items-center">
                                    <i className="bi bi-telephone-fill me-1"></i> +380630000000
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <i className="bi bi-envelope-fill me-1"></i> attorney_test@gmail.com
                                </li>
                            </ul>
                        </div>
                        <div className="additional-content d-flex justify-content-end">
                            <ul className="navbar-nav d-flex flex-row fw-medium text-secondary">
                                <li className="nav-item d-flex align-items-center">
                                    <i className="bi bi-facebook text-primary me-2"></i>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <i className="bi bi-whatsapp text-success me-2"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


             
                    <nav className="navbar navbar-expand-lg bg-body-secondary fsm-nav2  border border-2" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="53px" data-xl-stick-up-offset="53px" data-xxl-stick-up-offset="53px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
                        <Link className="navbar-brand text-wrap d-flex align-items-center justify-content-center" to="">
                            <img src="/img/logo.png" alt="Logo" width="30" height="24" className="d-inline me-2 d-inline-block align-text-top" />
                            <div className="d-inline fsm-3">
                                <div className="text-center">Aдвокатське об'єднання</div>
                                <div className="text-center">&laquo;Македонські та партнери&raquo;</div>
                            </div>
                        </Link>


                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto nav-tabs">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="">Головна</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="about">Про нас</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="contacts">Контакти</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </header >
        </>
    );
}