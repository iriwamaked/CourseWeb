import './Footer.css'

export function Footer(){
   return(
   <footer className="bg-secondary-subtle mt-3">
        <ul className="nav justify-content-center border-bottom">
        <li className="nav-item"> <a href=" " className="nav-link px-2 text-muted">Головна</a></li>
            <li className="nav-item"> <a href="" className="nav-link px-2 text-muted">Про нас</a></li>
            <li className="nav-item"> <a href="" className="nav-link px-2 text-muted">Контакти</a></li>
            
        </ul>
        <p className="text-center text-muted border-top border-secondary-subtle mb-1 copy">&copy;2024 Македонська І.О.</p>
    </footer>);
}