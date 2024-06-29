import Detalle from "./Detalle"
//carrito
import { useContext, useState } from "react";
import { carritoContext } from "../contexts/carritoContext";


const Cardprod = ({ item }) => {

    const { cart, agregar, vaciar, eliminar, comprar } = useContext(carritoContext)
   
   
    const getCantidad = (item) => {
        return cart.find((producto) => producto.id === item.id)?.cantidad || 0
    }
    
    
    const [cant, setCant] = useState(1);
    const handleChange = (event) => {
        setCant(event.target.value);
      };

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
                        <div className="d-flex justify-content-center">    
                        <select
                value={cant}
                onChange={handleChange}
                className="form-control input- bg-dark text-white-50"
                style={{ width: 80 }}
                >
                {Array.from({ length: item.stock +1}, (_, i) => i+1).map((option) => (
                    <option key={option} value={option}>
                    {option}
                    </option>
                ))}
                </select>
          
           {/*}
            <input 
            type="number" 
            value={cant} 
            onChange={handleChange}  
            className="form-control bg-dark text-white"  
            style={{width:80}} 
            onFocus={(e) => e.target.select()}
            min={0}
            />
     */}          
      
                        <button className="btn btn-success mx-1 btn-sm" onClick={() => agregar(item, cant)}>Agregar al carrito</button>
                        <button className="btn btn-outline-warning btn-sm mx-1 " onClick={() => agregar(producto, cant)}>Actualizar</button>
            
            
          
                        
                    </div>
                </div>
            </div>
            </div>
            <Detalle item={item} key={item.id} />
        </>
    )
}

export default Cardprod