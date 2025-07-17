import { NavLink } from "react-router"
import css from "./AllSection.module.css"

interface AllSectionProps {
    img:string,
    text: string,
    price: string,
    index:string,
}

function AllSection ({ img, text, price, index }: AllSectionProps) {
    const handleConsole = () => {
        console.log(`Clicked on ${text} with index ${index} and img ${img} and price ${price}`);
    }

  return (
    <li className={css.content}>
        <div className={css.picCont}>
            <img src={img} alt="фото курса" className={css.pic} id={index} />
        </div>
        <div className={css.textBlock}> 
            {text}
            {price}
            <NavLink to={'/' + index} onClick={() => handleConsole()} className={css.btn}>View More</NavLink>
        </div>
    </li>
  )
}

export default AllSection