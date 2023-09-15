import Image from 'next/image'
import {Atras} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Junta del AFA Benadressa',
  description: 'La junta directiva del AFA Benadressa',
}

const cards = [
  {
    posicion: "Presidenta",
    nombre: "Sole",
    img: "/sole.jpg",
  },
  {
    posicion: "Secretaria",
    nombre: "Vanessa",
    img: "/vanessa.jpg",
  },
  {
    posicion: "Tesorero",
    nombre: "Julián",
    img: "/julian.png",
  },

  {
    posicion: "Vicepresidenta",
    nombre: "Gemma",
    img: "/gemma.jpg",
  },
  ]

  interface CardProp{
    card: {
      posicion:string;
      nombre:string;
      img:string;
    }
  }

  function Card({card}:CardProp){
    return (
      <div
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
      >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {card.posicion}
      </h2>
      <Image
      className="relative rounded-3xl"
      src={card.img}
      alt="Next.js Logo"
      width={150}
      height={37}
      priority
    />
    <p className={`m-0 max-w-[30ch] text-sm  text-xl uppercase p-5`}>
      {card.nombre}
    </p>
    </div>
    )
  }

function Cards(){
  return(
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    {
      cards.map(
        function(card) {
          return (<Card key={card.nombre} card={card}/>)
        } 
      )   
    }  
    </div>

  )

}
export default function LaJunta() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="relative flex place-items-center" >
        <h1 className={`mb-3 text-3xl font-semibold`}>
          La junta provisional
        </h1>  
      </div>

      <Cards/>
      <Atras/>
      <Tail/>
    </main>
  )
}
