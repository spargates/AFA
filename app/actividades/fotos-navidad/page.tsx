import {Boton,Article, GoActividades} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'Fotos de navidad',
  description: 'Antes de navidad, organizamos una sesión de fotos con un fotografo profesional',
}

export default function Page() {
  const preinscripcion = {
    text: "Reserva tu sesión de fotos",
    link: "https://calendly.com/ampabenadresa/fotografias",
  }
  const  article= {
    title: "Fotos de navidad",
    preImageText:<></>,
    imageUrl: "/pack-fotos.png",
    postImageText:<></>,
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <Article article={article}/>    
      <Boton boton={preinscripcion}/>    
      <Image
          className="relative"
          src="/bolas-de-nieve.png"
          alt="Next.js Logo"
          width={1000}
          height={600}
          priority
        />  
      <GoActividades/>
      <Tail/>

    </main>
  )
}

