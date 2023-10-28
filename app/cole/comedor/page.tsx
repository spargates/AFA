import {GoCole} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Comedor del CEIP Benadressa',
  description: 'Información básica del comedor',
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="relative flex place-items-center" >
      <h1 className={`mb-3 text-3xl font-semibold`}>
        Comedor
      </h1>
      </div>
      <div className="relative flex place-items-center  text-center" >
    
            <a href="https://play.google.com/store/apps/details?id=com.mobincube.intur_colectividades.sc_DQBDID&pcampaignid=web_share"
  className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex flex-col items-center">App de Intur</a>
          
      </div>
      <GoCole/>
      <Tail/>
    </main>
  )
}
