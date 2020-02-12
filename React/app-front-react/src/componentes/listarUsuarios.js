import React, { Component } from 'react';

/* como hemos importado el componente directamente, no hace falta poner abajo React.Component
 */
class ListarUsuarios extends Component{
   
    componentDidMount(){
        this.state=null; //aunk es redundante

        let promesaHTTP = window.fetch('http://127.0.0.1:4000/api/usuarios/');
        promesaHTTP.then((res) => {
            let promesaJSON = res.json();
            //cuando por fin recibimos la coleccion y ha sido convertido en JSON
            promesaJSON.then((objColeccionUsu)=>{
                     console.log(JSON.stringify(objColeccionUsu));
                     this.setState({
                         listarUsuarios:objColeccionUsu
                     });
            });
        });

    }
    componentWillUnmount(){
            //Aki se ejecuta cuando se desmonta el componente
    }
    render(){

        let objViDomJSX;
        if(this.state===null){   //si todo va bien
            objViDomJSX = (<p>Cargando...</p>);
        } else{
            
            let filasTr = this.state.listarUsuarios.map((usu)=>(
               
                     <tr key={usu._id}>
                                <td>{usu.nombre}</td>
                                <td>{usu.email}</td>
                            </tr>
            ));
            objViDomJSX = (
                <div>
                    <h2>Lista de usuarios</h2>
                    <table>
                        <thead>
                            <tr><th>Nombre</th>
                            <th>Email</th></tr>
                        </thead>
                        <tbody>
                            {filasTr}
                            
                        </tbody>
                    </table>
                </div>
            );
        };

        
       
        return objViDomJSX;
    }
}

export default ListarUsuarios;