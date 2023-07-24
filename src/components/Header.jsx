import logo from '../assets/logo.jpeg'
const Header = () => {
  return (
    <header>
      <img
        src={logo}
        alt="imagen que representa un logo de un ciclista bajando una pendiente"
        width="75"
      />
      <nav>
        <a href="">Inicio</a>
        <a href="">Accesorios</a>
        <a href="">Reparaciones</a>
        <a href="">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
