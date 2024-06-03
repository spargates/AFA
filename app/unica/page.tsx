import {Tail} from '@/components/tail'
import {LogoAfa} from '@/components/utils'

import Markdown from "markdown-to-jsx";
import { GoCole } from '../../components/utils';

const markdown = `

# Socios 

Hazte [socio para el curso 2023/24](https://docs.google.com/forms/d/e/1FAIpQLSci8dr47PlBMO5iJeu_hmYF3HUaHY3Rr6B9I2x1ocs4kQvs9g/viewform). 

Recuerda que para que el AFA [gestione el material fungible](https://docs.google.com/forms/d/e/1FAIpQLSclsBMZi6LJtY23Fj9kC0kUavnEeO42zK0GkfdRf6sRE9Tpaw/viewform) de tu hijo, tienes que ser socio en el curso actual.


# ¿Que hemos hecho en el AFA Benadressa últimamente?

- Gestionado el material fungible de los niños del Cole
- Organizado las extraescolares de Zumba, Zumba Infantil, Bailes regionales y Kizune
- Organizado la sesión de fotos de Navidad 
- Hemos organizado la fiesta fin de curso 2023
- Hemos organizado la bienvenida de los socios del curso
- Hemos organizado talleres de navidad con la compañía Sagals

<ExampleText/>
`;

export default function Page() {
  
   return (
    <main className="flex min-h-screen flex-col justify-between md:p-12 text-center">
      <div className='flex flex-col items-center justify-between text-center'>

      <LogoAfa/>
      </div>
      
      
      

      
<div className="text-justify" >
      <Markdown
        options={{
          overrides: {  ExampleText: { component: ExampleText } }
        }}
        >
        {markdown}
      </Markdown>
      </div>
      <Tail/>
    </main>
  )
}


function ExampleText(){
return <>
</>
}
