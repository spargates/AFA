import {Atras} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'
import Image from 'next/image'



export const metadata: Metadata = {
  title: 'Socios del AFA Benadressa',
  description: 'Información relevante para los socios del CEIP Benadressa',
}

const items = [
  {
    img: "/sole.jpg",
    desc: "Hazte socio para el curso 2023/24",
    link: "https://forms.gle/PmmffXFmkfAUAWVZ9",
  },
  {
    img: "/sole.jpg",
    desc: "Gestión del material fungible 2023/24",
    link: "https://forms.gle/gP2m34xFippuePaM9",
  },
  {
    img: "/sole.jpg",
    desc: "Buzón de sugerencias",
    link: "https://forms.gle/Q1DSNZVQRBfFWzWa6",
  },
]

interface ItemProp{
  item: {
    img:string;
    desc:string;
    link:string
  }
}

export default function Socios() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24   text-center">
      <div className="relative flex place-items-center" >
        <h1 className={`mb-3 text-3xl font-semibold`}>
          Socios
        </h1>
      </div>
      <div className="relative flex place-items-center text-xl" >
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {
          items.map(
            function(item) {
              return (<Item key={item.img} item={item}/>)
            } 
          )   
        }  

    </div>
      </div>
      <Atras/>
      <Tail/>

    </main>
  )
}

function Item({item}:ItemProp) {
    return(
      <div className="group relative">
      
      <a href={item.link}>
      
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
           <Image 
          src={item.img} 
          alt="Front of men&#039;s Basic Tee in black." 
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          width={1000}
          height={700}
        />
      </div>
      <div className="mt-4 flex justify-between">
          <h2 className="text-gray-700">
              {item.desc}
            </h2>
        </div>
  
        </a>
        </div>
         
   
    )
}