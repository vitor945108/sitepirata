import it from '../../imagens/it.jpg';
import spider from '../../imagens/spider.jpg';
import vingadores from '../../imagens/poster-marvel.jpg';
import venom from '../../imagens/venom.jpg';
import stra from '../../imagens/stra.jpg';
import the from '../../imagens/witcher.jpg';
import la from '../../imagens/the-last.jpg';
import de from '../../imagens/demolidor.jpg';
import consta from '../../imagens/constantine.jpg';
import dra from '../../imagens/dragon.jpg';
import Equipe from "../equipe/Equipe";
import './main.css';
function Main() {
    const destaque=[
      {nome:"It",imagem: it , ano: "2023"},
      {nome:"Spider man " ,imagem:spider, ano: "2002"},
      {nome:"Vingadores" ,imagem: vingadores, ano: "2018"},
      {nome:"Venom" ,imagem: venom, ano: "2018"},
      {nome:"Constatine" ,imagem:consta, ano: "2006"},
    
  ]
   
  const series=[
          {nome:"Stranger things",imagem: stra, ano: "2015"},
          {nome:"The witcher" ,imagem: the, ano: "2018"},
          {nome:"The last of us " ,imagem: la, ano: "2023"},
          {nome:"Demolidor" ,imagem: de, ano: "2014"},
          {nome:"Dragon ball z" ,imagem: dra, ano: "1997"},
        
      ]
  
          return(
          <main>
          <Equipe listp={destaque} titulo={"Filmes"} />
          <Equipe listp={series} titulo={"Series"}/>
                     </main>  )
          
}
export default Main;