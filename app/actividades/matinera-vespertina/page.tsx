import {GoActividades} from '@/components/utils'
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

      <p className="p-2" > 
        La matinera y la vespertina son servicios subvencionados por el Ayntamiento de Castellón y su principal función es de ayudar en la conciliación 
        laboral a las familias.
      </p>
      <p className="p-2" > 
        Son servicios disponibles todos los años si el AFA o el centro lo gestionan, y se llega al mínimo de plazas reservadas ( 6 ).
      </p>

      <p className="p-2"> 
        “Ofertas Costa Azahar, S.L.” es la empresa responsable para la escuela matinera en el durante todo el curso escolar 2023-2024.
      </p>
      
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Matinera
      </h2>
      <p className="p-2"> 
        El horario de la matinera es de <strong>7:30 a 9:00 </strong>horas, de lunes a viernes, durante todo el curso escolar 2023-2024.
      </p>
           
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Vespertina
      </h2>
      <p className="p-2"> Normalmente, el horario de la vespertina, es de <strong>17:00 a 18:30 </strong>hores, de lunes a viernes, durante todo el curso escolar </p>
      <p className="p-2" > 
        Este año, no se ha conseguido el mínimo de alumnos necesarios.
      </p>
      </div>
           
      <GoActividades/>
 
      <Tail/>

    </main>
  )
}
