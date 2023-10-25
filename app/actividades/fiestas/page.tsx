import {Atras} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Actividades CEIP Benadressa',
  description: 'Información de las actividades extraescolares organizadas por el AFA Benadressa',
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <h1 className={`mb-3 text-3xl font-semibold`}>
        Fiestas
      </h1>

      <div className="relative flex place-items-center" >
        <ul>
          <li className="p-2">
            <h2 className={`mb-3 text-2xl font-semibold`}>
             Fiestas del AFA
            </h2>
            <p className="p-2" > 
              El AFA organiza fiestas fuera de clase para así fomentar encuentros sociales con las familias.
            </p>
            <p className="p-2" > 
              Durante el curso 2023/24, hemos planeado 4 fiestas:
            </p>
              <ul className='list-disc p-5'>
                <li className="break-normal">
                  22 de Septiembre: Fiesta de Bienvenida
                </li>
                <li className="break-normal">
                  15 de Diciembre: Navidad
                </li>
                <li className="break-normal">
                  9 de Febrero: Carnaval
                </li>
                <li className="break-normal">
                  21 de Junio: Fin de Curso           
                </li>
              </ul>
          </li> 
        </ul> 
      </div>
 
      <Atras/>
      <Tail/>

    </main>
  )
}
