import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/listar-empresas'>Listado Empresas</Link>
            <Link to='/crear-empresa'>Crear Empresa</Link>
        </nav>
    </header>
  )
}

export default Header