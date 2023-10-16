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
import na from '../../imagens/naruto-classico-capa-1.jpg';
import one from '../../imagens/one.jpg';
import to from '../../imagens/tokio.jpg';
import yu from '../../imagens/yu.jpg';
import black from '../../imagens/black.jpg';
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
      const animes=[
        {nome:"naruto",imagem: na , ano: "2002"},
        {nome:"one piece" ,imagem:one, ano: "1990"},
        {nome:"tokio gun" ,imagem: to, ano: "2018"},
        {nome:"yu gio" ,imagem: yu, ano: "2000"},
        {nome:"black clover" ,imagem:black, ano: "2023"},
      
    ]
  
          return(
          <main>
          <Equipe listp={destaque} titulo={"Filmes"} />
          <Equipe listp={series} titulo={"Series"}/>
          <Equipe listp={animes} titulo={"animes"}/>
                     </main>  )
          
}
export default Main;