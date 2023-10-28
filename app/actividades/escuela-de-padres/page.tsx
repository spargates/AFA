import {Inicio,Boton,Article, GoActividades} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Escuela de padres',
  description: 'Organizamos charlas para que los padres se adapten a los nuevos tiempos',
}

export default function Page() {
  const preinscripcion = {
    text:"Preinscripción",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfskm_lXxwvmuqHECTnc-cSaWV6QquALB2bwgejDHmx5vVddg/viewform",
  }
  const  article= {
    title: "Escuela de padres",
    preImageText:<>
      <p> En AFA Benadressa, entendemos que la crianza es un viaje emocionante y desafiante que requiere orientación y apoyo. Estamos encantados de presentar nuestra Escuela de Padres, un espacio diseñado para ayudar a madres y padres a navegar por esta importante etapa de la vida con confianza y habilidad. </p>
    </>,
    imageUrl: "/escuela-padres.png",
    postImageText:<>
    <p>
      Creemos en la importancia de aprender juntos y apoyarnos mutuamente. Nuestra Escuela de Padres es un lugar donde puedes compartir tus experiencias, 
      hacer preguntas y conectarte con otros padres que enfrentan desafíos similares. Hemos seleccioado expertos en crianza y desarrollo infantil para 
      brindarte orientación y asesoramiento. ¡No dejes pasar esta oportunidad de crecer como padre o madre! 
    </p>
    <p>
      Te invitamos a unirte a nosotros en esta emocionante aventura de la crianza. Si estás interesado en participar en alguna de 
      nuestras charlas o talleres, te animamos a preinscribirte utilizando el enlace proporcionado a continuación. 
    </p> 
    <p>
      ¡Nos vemos en la Escuela de Padres de AFA Benadressa!
    </p> 
    
    </>,
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

