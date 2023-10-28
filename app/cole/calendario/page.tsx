import Image from 'next/image'
import {GoCole} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Calendario CEIP Benadressa',
  description: 'Calendario actualizado del curso escolar',
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="relative flex place-items-center" >
      <h1 className={`mb-3 text-3xl font-semibold`}>
        Calendario escolar
      </h1>
      </div>
      <div className="relative flex place-items-center" >
      
     
      </div>
      <div className="relative flex place-items-center  text-center" >
        
          <Image
          className="relative"
          src="/calendario-curso.jpeg"
          alt="Next.js Logo"
          width={1000}
          height={700}
          priority
        />
        </div>
      <GoCole/>
      <Tail/>
    </main>
  )
}
