import {Inicio,Boton,Article, GoActividades} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'





export const metadata: Metadata = {
  title: 'Extraescolares AFA Benadressa',
  description: 'Información de las actividades extraescolares organizadas por el AFA Benadressa',
}

export default function Actividades() {
  const preinscripcion = {
    text:"Preinscripción",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfskm_lXxwvmuqHECTnc-cSaWV6QquALB2bwgejDHmx5vVddg/viewform",
  }
  const  article= {
    title: "Escuela de padres",
    preImageText:"",
    imageUrl: "/escuela-padres.png",
    postImageText:"",
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <Article article={article}/>    
      <Boton boton={preinscripcion}/>      
      <GoActividades/>
      <Tail/>

    </main>
  )
}

