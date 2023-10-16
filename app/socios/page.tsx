import {Atras} from '@/components/utils'
import {Tail} from '@/components/tail'
import type { Metadata } from 'next'
import Image from 'next/image'



export const metadata: Metadata = {
  title: 'Socios del AFA Benadressa',
  description: 'Información relevante para los socios del CEIP Benadressa',
}


export default function Socios() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24   text-center">
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
            <a
            href="https://forms.gle/Q1DSNZVQRBfFWzWa6"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
            Buzón de sugerencias
            </a>
          </li>
        </ul> 
      </div>
      <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image 
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" 
            alt="Front of men&#039;s Basic Tee in black." 
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            width={1000}
            height={700}
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
    </div>
  </div>
</div>
      <Atras/>
      <Tail/>

    </main>
  )
}

