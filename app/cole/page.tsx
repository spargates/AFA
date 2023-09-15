import Image from 'next/image'
import {Atras} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'CEIP Benadressa',
  description: 'Información del funcionamiento general del CEIP Benadressa',
}

export default function ElCole() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center" >
      <h1 className={`mb-3 text-3xl font-semibold`}>
        El cole
      </h1>
      </div>
      <div className="relative flex place-items-center" >
      
     
      </div>
      <div className="relative flex place-items-center  text-center" >
        <ul>
          <li ><h2 className={`mb-3 text-xl font-semibold`}>
            Calendario escolar      
          </h2>
          <Image
          className="relative"
          src="/calendario-curso.png"
          alt="Next.js Logo"
          width={1000}
          height={700}
          priority
        />
          </li>
          {/**
           
          <li><h2 className={`mb-3 text-xl font-semibold`}>
            Horarios de entrada y salida      
          </h2></li>
          

          <li><h2 className={`mb-3 text-xl font-semibold`}>
            Comedor      
          </h2></li>
          
           */}
        </ul> 
      </div>
      <Atras/>
      <Tail/>
    </main>
  )
}
