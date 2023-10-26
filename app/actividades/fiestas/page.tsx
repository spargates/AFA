import {GoActividades, Article} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Actividades CEIP Benadressa',
  description: 'Información de las actividades extraescolares organizadas por el AFA Benadressa',
}

export default function Page() {
  const  article= {
    title: "Fiestas",
    preImageText:"El AFA organiza fiestas fuera de clase para así fomentar encuentros sociales con las familias. ",
    imageUrl: "/fiesta.png",
    postImageText:"Durante el curso 2023/24, hemos planeado 4 fiestas:",
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">

      <Article article={article}/>   
      <Fiestas fiestas={fiestas.fiestas}/>
 
      <GoActividades/>
      <Tail/>

    </main>
  )
}

const fiestas = {
  fiestas: [
    {
      fiesta:{
        img: "/matinera-vespertina.jpg",
        titulo: "Fiesta de bienvenida",
        link: "/actividades/fiestas",
        fecha:"22 de Septiembre",
      },
    },
    {
      fiesta:{
        img: "/extraescolar.png",
        titulo: "Fiesta de Navidad",
        link: "/actividades/fiestas",
        fecha:"15 de Diciembre",
      },
    },
    {
      fiesta:{
        img: "/fiesta.png",
        titulo: "Fiesta de Carnaval",
        link: "/actividades/fiestas",
        fecha:"9 de Febrero",
      },
    },
    {
      fiesta:{
        img: "/escuela-de-padres.png",
        titulo: "Fiesta fin de curso",
        link: "/actividades/fiestas",
        fecha:"21 de Junio",

      },
    },
  ]
}

interface FiestaProp{
  fiesta: {
    fecha:string;
    titulo:string;
    link:string;
  }
}
 interface FiestasProp{
  fiestas:FiestaProp[];
}

 function Fiestas({fiestas}:FiestasProp) {
  return (
    <>
    <ul className='list-disc p-5'>
    {
          fiestas.map(
            function(fiesta :FiestaProp) {
              return (<Fiesta key={fiesta.fiesta.link} fiesta={fiesta.fiesta}/>)
            } 
          )   
        } 
        </ul>
    </>
  ) 
}

 function Fiesta({fiesta}:FiestaProp) {
  return (
    <>
    {
       <li className="break-normal">
       {fiesta.fecha}: {fiesta.titulo}           
     </li>
            
      } 
    </>
  ) 
    }