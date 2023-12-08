import {Inicio,Cards} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'
import Image from 'next/image'



export const metadata: Metadata = {
  title: 'Socios del AFA Benadressa',
  description: 'Información relevante para los socios del CEIP Benadressa',
}

const cards = {
  cards: [
   {
    card:{
     img: "/socios.jpg",
     desc: "Hazte socio para el curso 2023/24",
     link: "https://forms.gle/PmmffXFmkfAUAWVZ9",
   },
  },
   {
    card:{
     img: "/material.jpg",
     desc: "Gestión del material fungible 2023/24",
     link: "https://forms.gle/gP2m34xFippuePaM9",
   }
  },
    {
      card:{
     img: "/buzon.jpg",
     desc: "Buzón de sugerencias",
     link: "https://forms.gle/Q1DSNZVQRBfFWzWa6",
   }
  },
  {
    card:{
   img: "/miampa.png",
   desc: "Mi ampa. Codigo de AMPA: 2AEF1",
   link: "https://afabenadressa.miampa.com/authentication/login",
 }
},
  ]
}



export default function Socios() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 text-center">
      <div className="relative flex place-items-center" >
        <h1 className={`mb-3 text-3xl font-semibold`}>
          Socios
        </h1>
      </div>
      <div className="relative flex place-items-center text-xl" >
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Cards cards={cards.cards}/>
      </div>
      </div>
      <Inicio/>
      <Tail/>

    </main>
  )
}

