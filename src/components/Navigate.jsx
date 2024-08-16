import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Fondo from '../background/Fondo';
import Figure from '../three/Figure';
import Figure2 from '../three/Figure2';

export default function Navigate() {

    return (
        /*<Router>*/

        //        <ShoppingCartProvider>
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/porta" index element={<Figure2></Figure2>} />
            <Route path="/back" element={<Fondo></Fondo>} />
            <Route path="/figure" element={<Figure></Figure>} />
            {/* comodin para dar por defecto la pagina que no sirve */}
            <Route path="*" element={<NotFound />} />
        </Routes>
        //      </ShoppingCartProvider>

        /*</Router>*/
    );
}

function Boxes() {
    return <>asd</>
}

function Navbar() {
    // visible on every page
    return <> <h1>NAVEGACION DE RUTAS  </h1></>
}

function Home() {
    return (
        <>
            <p>SISTEMA DE NAVEGACION DE RUTAS ABRAHAM PARA SISTEMAS</p>
            <ul>
                <li><Link to='/regixpress'> Inicio </Link></li>
                <li><Link to='/json'>ejemplo de json</Link></li>                
            </ul>
        </>);
}

function About() {
    return (
        <>
            <p>ACERCA DE</p>
            <ul>
                PAGINAS PROTEGIDAS VERSION NATIVA QUE DETALLE
            </ul>
        </>);
}


function NotFound() {
    return (<><p>Ha llegado a una página que no existe :| </p></>);
}