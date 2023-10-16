
import './Exibirperfil.css';
function exibirperfil(props) {
           return(
                    <div className='perfil'>    
                     <figure id="container">
                       <figcaption>destaques</figcaption>
               <img className="img-exibirperfil" src={props.img} alt={props.nome}/>
                       </figure>
                       <h2>{props.nome}</h2>
                       <p> {props.ano}</p>
                    </div>
           )

           
          
}
export default exibirperfil