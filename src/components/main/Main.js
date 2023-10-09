import it from '../../imagens/it.jpg';
import spider from '../../imagens/spider.jpg';
import vingadores from '../../imagens/poster-marvel.jpg';
import venom from '../../imagens/venom.jpg';
import consta from '../../imagens/constantine.jpg';
import Equipe from "../equipe/Equipe";
function Main() {
    const destaque=[
      {nome:"it",imagem: it , ano: "2023"},
      {nome:"spider man " ,imagem:spider, ano: "2002"},
      {nome:"vingadores" ,imagem: vingadores, ano: "2018"},
      {nome:"venom" ,imagem: venom, ano: "2018"},
      {nome:"constatine" ,imagem:consta, ano: "2006"},
    
  ]
   
  const series=[
          {nome:"",imagem: "", ano: ""},
          {nome:"" ,imagem: "", ano: ""},
          {nome:"" ,imagem: "", ano: ""},
          {nome:"" ,imagem: "", ano: ""},
          {nome:"" ,imagem: "", ano: ""},
        
      ]
  
          return(
          <main>
          <Equipe listp={destaque}/>
          <Equipe listp={series}/>
                  
                      </main>  )
          
}
export default Main;