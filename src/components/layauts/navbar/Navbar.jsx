import { Link } from "react-router-dom";
import CartWidget from "../../common/CartWidget/CartWidget";


// eslint-disable-next-line react/prop-types
const Navbar = ({ menuOpen, toggleMenu }) => {  
    return (  
        <div className="w-full h-full relative ">  
            <header className="flex justify-between items-center text-black px-6 py-8 md:px-32 drop-shadow-md bg-orange-400"> 
                <Link to= "/">
                <h1 className="text-lg sm:text-2xl md:text-3xl"> 
                    Cura <span className="text-amber-300 font-semibold">Fácil</span>  
                </h1>  
                </Link>

                <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">  
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">CONTACTO</li>  
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">PRODUCTOS</li>  
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">SERVICIOS</li>  
                </ul>  

                <div className="relative hidden md:flex items-center justify-center gap-3">  
                    <i className="bx bx-menu xl:hidden block text:5xl cursor-pointer" onClick={toggleMenu}></i>  
                </div>  

                <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${menuOpen ? "opacity-100" : "opacity-0"} ${menuOpen ? "translate-y-0" : "-translate-y-4"}`}  
                    style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>  
                    <li className="list-none w-full text-center p-4 hover:bg-sky-400 cursor-pointer">CONTACTO</li>  
                    <li className="list-none w-full text-center p-4 hover:bg-sky-400 cursor-pointer">PRODUCTOS</li>  
                    <li className="list-none w-full text-center p-4 hover:bg-sky-400 cursor-pointer">SERVICIOS</li>  
                </div>  


                <div>
                <Link to="/cart">
                <CartWidget />
                </Link>
                </div>
            </header>  
        </div>  
    );  
};  

export default Navbar;