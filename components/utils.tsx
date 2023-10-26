import Image from 'next/image'

export function Inicio(){
      const boton = {
        text:"Inicio",
        link:"/",
      }
      return (
        <Boton boton={boton}/>
      )
  }

  export function GoActividades(){

    const boton = {
      text:"Actividades",
      link:"/actividades",
    }
    return (
      <Boton boton={boton}/>
    )
  }
  export function GoCole(){

    const boton = {
      text:"Atras",
      link:"/cole",
    }
    return (
      <Boton boton={boton}/>
    )
  }

  interface BotonProp{
    boton: {
      text:string;
      link:string;
    }
  }
  
  export function Boton({boton}:BotonProp){
    return (
      <a href={boton.link} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex flex-col items-center">
        {boton.text}
      </a>
    )
  }
  
  interface ArticleProp{
    article: {
      title:string;
      preImageText:string;
      imageUrl: string;
      postImageText:string;
    }
  }
  
  export function Article({article}:ArticleProp){
    return (  
      <div className="relative place-items-center" >
        <h1 className={`mb-3 text-2xl font-semibold`}> {article.title}</h1>
        <p>{article.preImageText}</p>         
        <Image src={article.imageUrl} alt={article.title} width={1000} height={600} priority  className="p-5"/>
        <p>{article.postImageText}</p>
      </div>
    )
  }

  export function Cards({cards}:CardsProp) {
    return (
      <>
      {
            cards.map(
              function(card :CardProp) {
                return (<Card key={card.card.img} card={card.card}/>)
              } 
            )   
          } 
      </>
    ) 
  }
  
  export interface CardsProp{
    cards:CardProp[];
  }
  interface CardProp{
    card:{
      img:string;
      desc:string;
      link:string;
    }
  }
  export function Card({card}:CardProp) {
      return(
        <div className="group relative">
    
         
         <a href={card.link}>
        
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
             <Image 
            src={card.img} 
            alt="Item" 
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            width={1000}
            height={700}
          />
        </div>
        <div className="mt-4 flex justify-between">
            <h2 className="text-gray-700">
                {card.desc}
              </h2>
          </div>
    
          </a>
           </div>
           
     
      )
  }

  export function LogoAfa(){
    return (

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative"
          src="/afa_benadressa.png"
          alt="Next.js Logo"
          width={350}
          height={37}
          priority
        />
      </div>
    )
  }