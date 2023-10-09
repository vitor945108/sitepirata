

function exibirperfil(props) {
           return(
                    <div>
                       <img className="img-exibirperfil" src={props.img} alt={props.nome}/>
                       <h2>{props.nome}</h2>
                       <p> {props.ano}</p>
                    </div>
           )

           
          
}
export default exibirperfil