import Image from 'next/image'
import {Tail} from '@/components/tail'

const cards = [
{
  titulo: "Socios",
  link: "/socios",
  descripcion: "Hazte socio aquí.",
},
{
  titulo: "Actividades",
  link: "/actividades",
  descripcion: "Descubre las actividades que vamos a organizar.",
},
{
  titulo: "Cole",
  link: "/cole",
  descripcion: "Resolvemos las dudas que todos los padres tenemos.",
},

{
  titulo: "Junta",
  link: "/junta",
  descripcion: "Presentación de la junta directiva.",
},
]

interface CardProp{
  card: {
    link:string;
    titulo:string;
    descripcion:string;
  }
}
function Card({card}:CardProp){
  
  return (
    <a
    href={card.link}
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

  >
    <h2 className={`mb-3 text-2xl font-semibold`}>
      {card.titulo}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
      {card.descripcion}
    </p>
  </a>

  )
}


export default function Home() {
   return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   

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

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
     
        {
          cards.map(
            function(card) {
              return (<Card key={card.link} card={card}/>)
            } 
          )   
        }  
      </div>
      <Tail/>
    </main>
  )
}
