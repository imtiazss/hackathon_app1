import { ClipboardType } from "lucide-react"
import { StaticImageData } from "next/image"
import cart1 from '../../public/images/cart-1.jpg'
import cart2 from '../../public/images/cart-2.jpg'
import cart3 from '../../public/images/cart-3.jpg'
import cart4 from '../../public/images/cart-4.jpg'
 type Cardtype= {
    id:number,
    title:string,
    image:StaticImageData,
    price:number,
    
}

const CardData:Cardtype []=[{
id:1,
title:'Products1',
image:cart1,
price:120
},
{
id:2,
title:'Products2',
image:cart2,
price:140
},
{
id:3,
title:'Products3',
image:cart3,
price:220
},
{
id:4,
title:'Products4',
image:cart4,
price:150
},
]

export default CardData