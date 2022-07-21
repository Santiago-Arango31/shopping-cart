import { Component } from "react";

class Producto extends Component {
    render(){
        // console.log('productos', this.props)
        const { producto, agregarAlCarro } = this.props
        return(
           <div>
            <img alt={producto.name} src={producto.img}></img>
            <h3>{producto.name}</h3>
            <p>{producto.price}</p>
           </div>
        )
    }
}

export default Producto