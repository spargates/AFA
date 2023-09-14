import {Atras} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Actividades CEIP Benadressa',
  description: 'Información de las actividades extraescolares organizadas por el AFA Benadressa',
}

export default function Actividades() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center" >
      <h1 className={`mb-3 text-3xl font-semibold`}>
        Actividades
      </h1>
      </div>
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
          <li className="p-2">
            <h2 className={`mb-3 text-2xl font-semibold`}>
             Extraescolar: Bailes regionales
            </h2>
            <p className="p-2"> Para el curso 2023/24, Elisa la mamá de Lucía, enseñará bailes regionales a nuestros peques.
            </p>
            <p className="p-2" > 
              Elisa forma parte de <a href="http://www.grupramell.com" className="text-brand-500 font-bold"> Grup Ramell </a> 
              y el CEIP Benadressa tendrá el placer de salir con ellos en el pregó de la Magdalena
            </p>
            <ul className='list-disc p-5'>
                <li className="break-normal">
                  ¿Cuando es la extraescolar?: Los martes de 15:30 a 16:30 a partir de octubre
                </li>
                <li className="break-normal">
                  ¿Donde?: En el cole
                </li>
                <li className="break-normal">
                  ¿Que precio tiene?: Es una actividad gratuita, pero tenemos que darlo todo en el pregó
                </li>
                <li className="break-normal">
                  ¿Cómo me apunto?: <a href="https://forms.gle/bNj6swZUtuyWfqEd8" className="text-brand-500 font-bold"> Aquí </a> 
                </li>
              </ul>
          </li>
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
{/**
      <div className="flex flex-col justify-center items-center h-[100vh]">
            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div className="mt-2 mb-8 w-full">
                    <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
                    General Information
                    </h4>
                    <p className="mt-2 px-2 text-base text-gray-600">
                    As we live, our hearts turn colder. Cause pain is what we go through
                    as we become older. We get insulted by others, lose trust for those
                    others. We get back stabbed by friends. It becomes harder for us to
                    give others a hand. We get our heart broken by people we love, even
                    that we give them all...
                    </p>
                </div> 
                <div className="grid grid-cols-2 gap-4 px-2 w-full">
                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Education</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        Stanford University
                    </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Languages</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        English, Spanish, Italian
                    </p>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Department</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        Product Design
                    </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Work History</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        English, Spanish, Italian
                    </p>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Organization</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        Simmmple Web LLC
                    </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Birthday</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        20 July 1986
                    </p>
                    </div>
                </div>
            </div>  
            <p className="font-normal text-navy-700 mt-20 mx-auto w-max">Profile Card component from <a href="https://horizon-ui.com?ref=tailwindcomponents.com" target="_blank" className="text-brand-500 font-bold">Horizon UI Tailwind React</a></p>  
        </div>

 */}
 
      <Atras/>
      <Tail/>

    </main>
  )
}
