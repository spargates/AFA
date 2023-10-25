import {Tail} from '@/components/tail'
import {Cards,LogoAfa} from '@/components/utils'


const cards = {
  cards: [
    {
      card:{
        img: "/empty.jpg",
        desc: "Socios",
        link: "/socios",
      },
    },
    {
      card:{
        img: "/empty.jpg",
        desc: "Actividades",
        link: "/actividades",
      },
    },
    {
      card:{
        img: "/empty.jpg",
        desc: "Cole",
        link: "/cole",
      },
    },
    {
      card:{
        img: "/empty.jpg",
        desc: "Junta",
        link: "/junta",
      },
    },
  ]
}

export default function Home() {
   return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
   

      <LogoAfa/>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <Cards cards={cards.cards}/>
      </div>
      <Tail/>
    </main>
  )
}
