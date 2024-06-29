import { useState } from "react"

const Login = () => {
const [usuario, setUsuario]=useState("emilys")
const [clave, setClave]=useState("emilyspass")
function manejoUsuario(event){
    setUsuario(event.target.value)


}
function manejoClave(event){
    setClave(event.target.value)


    
}
function enviarDatos(event){
event.preventDefault();
fetch('https://dummyjson.com/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: usuario,
      password: clave,
      expiresInMins: 30, // optional, defaults to 60
    })
  })
  .then(res => res.json())
  .then(console.log);


}


return (
    <div className="modal fade" id="formlogin" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">LOGIN</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
                <form onSubmit={enviarDatos}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
                        <input onChange={manejoUsuario} type="text" value={usuario} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={manejoClave} type="password" value={clave} className="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>

            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default Login