import {Tail} from '@/components/tail'
import {Cards,LogoAfa} from '@/components/utils'


const cards = {
  cards: [
    {
      card:{
        img: "/socios.jpg",
        desc: "Gestiones para socios",
        link: "/socios",
      },
    },
    {
      card:{
        img: "/actividades.jpg",
        desc: "Actividades que organizamos",
        link: "/actividades",
      },
    },
    {
      card:{
        img: "/cole.jpg",
        desc: "CEIP Benadressa",
        link: "/cole",
      },
    },
    {
      card:{
        img: "/junta.jpg",
        desc: "Asociación",
        link: "/junta",
      },
    },
  ]
}

export default function Page() {
   return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 text-center">

      <LogoAfa/>
      
      <div className="relative flex place-items-center text-xl" >
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Cards cards={cards.cards}/>
        </div>
      </div>
      <Tail/>
    </main>
  )
}
