import Detalle from "./Detalle"
//carrito
import { useContext } from "react";
import { carritoContext } from "../contexts/carritoContext";


const Cardprod = ({ item }) => {

    const { cart, agregar, vaciar, eliminar, comprar } = useContext(carritoContext)
    const getCantidad = (item) => {
        return cart.find((producto) => producto.id === item.id)?.cantidad || 0
    }
    const totalProd = getCantidad(item)

    return (
        <>
            <div className="col-md-4 col-lg-3 mb-4" >
                <div className="card h-100" data-bs-theme="dark">
                    <div className="card-header p-0">
                        {
                            totalProd > 0 && (
                                <span
                                    className="badge rounded-pill text-bg-warning fs-3 m-1" style={{ position: 'absolute', top: '0', right: '0', zIndex: '1' }}>
                                    {totalProd}
                                </span>
                            )
                        }
                        <img src={item.thumbnail} alt={item.title} className="img-fluid" />
                    </div>
                    <div className="card-body text-center">
                        <h5>{item.title}</h5>
                        <p className="text-success">{item.brand}</p>
                        <p className="text-success"><span className="lead">Articulos disponibles:</span><span className="text-danger"> {item.stock}</span> </p>
                        <h5 className="text-danger">{item.price.toFixed(2).toLocaleString()}$</h5>
                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-outline-danger btn-sm mx-1" data-bs-toggle="modal" data-bs-target={`#${item.id}`} >Detalle</button>
                        
                        <hr />
                        <button className="btn btn-success btn-sm mx-1" onClick={() => agregar(item)}>+ Agregar al carrito</button>
                        {
                            totalProd > 0 && (
                                <button className="btn btn-danger btn-sm mx-1" onClick={() => eliminar(item)}>- Restar</button>
                            )

                        }
                    </div>
                </div>
            </div>
            <Detalle item={item} key={item.id} />
        </>
    )
}

export default Cardprod