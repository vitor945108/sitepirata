
import Exibirperfil from "../ExibirPerfil/ExibirPerfil";


import './Equipe.css';
function Equipe({listp}) {
     
          return(
                    <>
                    <h1>equipe </h1>
                    <div className="div-exibe">
                              {listp.map((p)=>
                              <Exibirperfil nome={p.nome} img={p.imagem} ano={p.ano}/>   )  }
                    </div>
                    </>
          )  
}
export default Equipe;