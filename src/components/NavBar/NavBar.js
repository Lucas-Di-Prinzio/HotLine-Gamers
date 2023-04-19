import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
   return (
    <nav>
        <h3>Hotline Gamers</h3>
        <div>
            <button>básico</button>
            <button>entusiasta</button>
            <button>extreme</button>
        </div>
        <CartWidget />
    </nav>
   ) 
}

export default NavBar