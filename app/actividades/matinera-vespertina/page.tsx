import {Atras} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Actividades CEIP Benadressa',
  description: 'Información de las actividades extraescolares organizadas por el AFA Benadressa',
}

export default function Actividades() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="relative place-items-center" >

      
      <h1 className={`mb-3 text-3xl font-semibold`}>
        Matinera y Vespertina
      </h1>
        <ul>
          <li className="p-2">
            <h2 className={`mb-3 text-2xl font-semibold`}>
             Matinera
            </h2>
            <p className="p-2"> “Ofertas Costa Azahar, S.L.” es la empresa responsable para la escuela matinera en el 
              horario de 7:30 a 9:00 hores, de lunes a viernes, durante todo el curso escolar 2023-2024.
            </p>
            <p className="p-2" > 
              Este es un servicio subvencionado por el Ayntamiento de Castellón y su principal función es de ayudar en la conciliación 
              laboral a las familias.
            </p>
            <p className="p-2" > 
              Es un servicio disponible todos los años si el AFA o el centro lo gestionan, y se llega al mínimo de plazas reservadas ( 6 ).
            </p>
          </li>
           
          <li className="p-2">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Vespertina
            </h2>
            <p className="p-2"> “Ofertas Costa Azahar, S.L.” también se habia asignado para la escuela vespertina en el 
              horario de 17:00 a 18:30 hores, de lunes a viernes, durante todo el curso escolar 2023-2024.
            </p>
            <p className="p-2" > 
              Este es un servicio subvencionado por el Ayntamiento de Castellón y su principal función es de ayudar en la conciliación 
              laboral a las familias.
            </p>
            <p className="p-2" > 
              Es un servicio disponible todos los años si el AFA o el centro lo gestionan, y se llega al mínimo de plazas reservadas ( 6 ).
            </p>
            <p className="p-2" > 
              Este año, no se ha conseguido el mínimo de alumnos necesarios.
            </p>
          </li>

        </ul> 
      </div>
 
      <Atras/>
      <Tail/>

    </main>
  )
}
