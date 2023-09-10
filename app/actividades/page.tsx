import {Atras} from '@/components/utils'
import {Tail} from '@/components/tail'
export default function Actividades() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center" >
      <h1 className={`mb-3 text-3xl font-semibold`}>
        Actividades
      </h1>
      </div>
      <div className="relative flex place-items-center" >
        <ul className="list-disc ">
          <li>Matinera y vespertina</li>
          <li>Fiestas del AFA</li>
          <li>Escola d &apos; estiu</li>
        </ul> 
      </div>
      <Atras/>
      <Tail/>

    </main>
  )
}
