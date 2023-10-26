import {Inicio,LogoAfa,Cards} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'CEIP Benadressa',
  description: 'Información del funcionamiento general del CEIP Benadressa',
}


const cards = {
  cards: [
    {
      card:{
        img: "/empty.jpg",
        desc: "Comedor",
        link: "/cole/comedor",
      },
    },
    {
      card:{
        img: "/empty.jpg",
        desc: "Calendario CEIP Benadressa",
        link: "/cole/calendario",
      },
    },
  ]
}
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <h1 className={`mb-3 text-3xl font-semibold`}>
        Actividades
      </h1>
      <LogoAfa/>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <Cards cards={cards.cards}/>
      </div>
 
      <Inicio/>
      <Tail/>

    </main>
  )
}