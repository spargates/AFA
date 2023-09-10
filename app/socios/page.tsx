import {Atras} from '@/components/utils'
import {Tail} from '@/components/tail'

export default function Socios() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24   text-center">
      <div className="relative flex place-items-center" >
        <h1 className={`mb-3 text-3xl font-semibold`}>
          Socios
        </h1>
      </div>
      <div className="relative flex place-items-center text-xl" >
        <ul >
          <li className='p-5'>
            <a
            href="https://forms.gle/PmmffXFmkfAUAWVZ9"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              Hazte socio para el curso 2023/24
            </a>
          </li>
          <li className='p-5'>
            <a
            href="https://forms.gle/gP2m34xFippuePaM9"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
            Gestión del material fungible 2023/24
            </a>
          </li>
          <li className='p-5'>
            Buzón de sugerencias (Pendiente)
          </li>
          <li className='p-5'>
            Da un paso más y forma parte del AFA (pendiente)
          </li>
        </ul> 
      </div>
      <Atras/>
      <Tail/>

    </main>
  )
}
