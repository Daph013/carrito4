import { Link } from "react-router-dom"
import logo from '../assets/logo.jpg'
import FiltroCategorias from "./Filtrocategorias"
import { CartFill } from 'react-bootstrap-icons';
//context carrito
import { useContext } from "react";
import { carritoContext } from "../contexts/carritoContext";
const Header = () => {
    const { cart, vaciar, comprar } = useContext(carritoContext)
    const total = cart.reduce((acc, item) => acc + item.cantidad, 0);
    

    const totalCantidad = cart.reduce((total, item) => total + item.cantidad, 0);
    const totalPrecio = cart.reduce((total, item) => total + item.cantidad * item.price, 0);
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light fixed-top" data-bs-theme="light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} alt="" width={100} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to={"/inicio"} className="nav-link active fs-5" aria-current="page" href="#">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link to={"/movil"} className="nav-link fs-5" href="#">Movil</Link>
            </li>
            <li className="nav-item">
                <Link to={"/laptop"} className="nav-link fs-5" href="#">Laptop</Link>
            </li>
            <li className="nav-item">
                <Link to={"/tienda"} className="nav-link fs-5" href="#">Tienda</Link>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
            </a>
            <ul className="dropdown-menu">
               <FiltroCategorias/>
               
            </ul>
            </li>
            <li className="nav-item">
                <Link to={"/habilidades"} className="nav-link fs-5" href="#">Habilidades</Link>
            </li>
        </ul>
        <button className='btn btn-danger me-2 mx-3'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">  <CartFill  size={25} /> <span className="bagbe">{cart.length} / {total} / {totalPrecio.toFixed()}</span></button>
        <button className='btn btn-info me-2 mx-3'  data-bs-toggle="modal" data-bs-target="#exampleModal">  <CartFill  size={25} /> <span className="bagbe">{cart.length} / {total} / {totalPrecio.toFixed()}</span></button>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            
        </form>
        </div>
    </div>
    
    </nav>
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Ver Carrito</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
              
                        {cart.map((item) => (
                            <div className="card mb-3" key={item.id}>
                                <div className="card-header p-0">
                                    <img src={item.thumbnail} alt={item.title}  className="img-fluid"  />
                                   
                                </div>
                                <div className="card-body text-center">
                                    <h5>{item.title}</h5>
                                    <p className="text-success">{item.brand}</p>
                                    <h5 className="text-danger">Precio: {item.price.toFixed(0).toLocaleString()}$</h5>
                                    <h5 className="text-danger">Cantidad: {item.cantidad}</h5>
                                    <h5 className="text-danger">Cantidad: {(item.cantidad*item.price).toFixed(0).toLocaleString()}$</h5>
                                </div>
                            </div>
                        ))}
                        {cart.length > 0 ? (
                            <>
                                <div className="card p-3">
                                <h5>Total Productos: {totalCantidad}</h5>
                                <h5>Total A Pagar: {totalPrecio}$</h5>
                                </div>
                                <div className="card p-3 my-3">
                                <button className="btn btn-danger btn-sm mx-1 mb-2" onClick={() => vaciar()}>
                                    Vaciar Carrito
                                </button>
                                <button className="btn btn-success btn-sm mx-1" onClick={() => comprar()}>
                                    Comprar
                                </button>
                                </div>
                            </>
                            ) : (
                            <div className="card p-3 my-3">
                                <h5>Carrito Vacío</h5>
                            </div>
                            )}
                        </div>
                    </div>



                   
<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">

      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
      <table className="table table-bordered">
        <thead>
        <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
        </tr>
</thead>
<tbody>
{cart.map((item) => (
        <tr key={item.id}>
            <td><img className="img-fluid" src={item.thumbnail} alt="Descripción de la imagen"/></td>
            <td>{item.title}</td>
            <td>{totalCantidad}</td>
            <td>{item.price}</td>
            <td>{totalPrecio}</td>
        </tr>

))}
</tbody>
        </table>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>










    </>

  )
}

export default Header