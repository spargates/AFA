import {Atras,Cards,LogoAfa} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'

const cards = {
  cards: [
    {
      card:{
        img: "/matinera-vespertina.jpg",
        desc: "Matinera y vespertina",
        link: "/actividades/matinera-vespertina",
      },
    },
    {
      card:{
        img: "/extraescolar.png",
        desc: "Extraescolares",
        link: "/actividades/extraescolares",
      },
    },
    {
      card:{
        img: "/fiesta.png",
        desc: "Fiestas del AFA",
        link: "/actividades/fiestas",
      },
    },
    {
      card:{
        img: "/escuela-de-padres.png",
        desc: "Escuela de padres",
        link: "/actividades/escuela-de-padres",
      },
    },
  ]
}

export const metadata: Metadata = {
  title: 'Actividades CEIP Benadressa',
  description: 'Información de las actividades extraescolares organizadas por el AFA Benadressa',
}

export default function Actividades() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <h1 className={`mb-3 text-3xl font-semibold`}>
        Actividades
      </h1>
      <LogoAfa/>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <Cards cards={cards.cards}/>
      </div>
 
      <Atras/>
      <Tail/>

    </main>
  )
}
