

const contactInfo = {
    email: "ampabenadresa@gmail.com",
    telefono: "651764514",
    facebook:"https://www.facebook.com/afabenadressa/",
    instagram:"https://www.instagram.com/afabenadressa/",
  }
export function Tail(){
    return(

<div className="relative flex place-items-center  ">
  
  <p className="p-5">
    {contactInfo.email}
    </p>
  <p className="p-5">
    {contactInfo.telefono}
  
  </p>
  <p className="p-5">
    {contactInfo.facebook}
    </p>
  <p className="p-5">
    {contactInfo.instagram}
    </p>
  </div>
    )
}