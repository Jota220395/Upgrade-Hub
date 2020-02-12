import React, { Component } from 'react';

/* como hemos importado el componente directamente, no hace falta poner abajo React.Component
 */
class CrearUsuario extends Component{
    //this.props es un objetos con datos públicos de React
    //this.state objeto con datos privados de React, es decir,
    //el estado interno del componente
    //las variables miembro de la clase privadas

    constructor(props){
        super(props);   //invocamos al constructor del padre pasándole las propiedades públicas

        //para evitar el problema del this con javascript:
        this.onChangeNombre = this.onChangeNombre.bind(this); //bind vincula algo k en el futuro será this
                                                            //es decir, k en el futuro cuando se invoque al método, this sea realmente this
                                                            //this es el objeto instanciado basado en la clase, en estado, cada uno de los componentes
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit  = this.onSubmit.bind(this);

        this.state = {      //creamos un objeto vacío 
           nombre:'juan desde react',
            email:'aaa@aaa.com',
            password:'1234'
        }
    }
    //Metodo invocado x react cada vez k se cambia el valor del input y se envía un objeto
    //con la informacion del evento
    onChangeNombre(evt){
        this.setState({nombre:evt.target.value
        });
    }
    onChangeEmail(evt){
        this.setState({email:evt.target.value
        });
    }
    onChangePassword(evt){
        this.setState({password:evt.target.value
        });
    }
    onSubmit(evt){
        evt.preventDefault();
        //aki invocariamos al servicio cliente http, Ajax, fetch...
        console.log(`Datos: ${this.state.nombre} , ${this.state.email} , ${this.state.password}`);
        window.fetch('http://127.0.0.1:4000/api/usuarios/registro', {
            method: 'post',
            body: JSON.stringify({
                "nombre": this.state.nombre,
                "email": this.state.email,
                "password":this.state.password
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=> alert("Ha ido DPM"))
        .catch(()=>"Ha ido mal");
    }
  
    render(){
        return ( /* como en react no hay ngmodel para captar los datos
            lo vinculamos directamente con el objero this.state.email --> */
            <div>
                <h2>Formulario crear usuario</h2>
                <form onSubmit={this.onSubmit}>
                <div>
                        <label>Nombre:</label>
                        <input type="text" 
                        placeholder="Francisco"

                        onChange = {this.onChangeNombre}></input> 
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" 
                        placeholder="ejemplo@email.com"

                        onChange = {this.onChangeEmail}></input> 
                    </div>
                    <div>
                    <label>password:</label>
                        <input type="password" 
                        placeholder="C@ntRaSeñ*a"
                       
                        onChange={this.onChangePassword}></input>
                    </div>
                    <div>
                    <input type="submit" value= "enviar"/>
                    </div>
                </form>
            </div>
        );
    }
}


export default CrearUsuario;

