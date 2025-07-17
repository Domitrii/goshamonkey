import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import PaymentSection from "../PaymentSection/PaymentSection"
import css from "./HiPrice.module.css"

const hiProducts = [
    {img: "../../../course1.png",text: "Гоша привет",price: "100р",index: "hi-price"},
    {img: "../../../course1.png",text: "Гоша привет",price: "300р",index: "hi-price"},
    {img: "../../../course1.png",text: "Гоша привет",price: "300р",index: "hi-price"},
    {img: "../../../course1.png",text: "Гоша привет",price: "300р",index: "hi-price"},
]

function HiPrice() {
  return (
    <div>
        <Header />
        <div>
            <div className={css.hiPriceStartBlock}>
                <h1>Gosha The monkey</h1>
                <p>Получи привет от макаки</p>
            </div>
            <ul className={css.list}>
                {hiProducts.map((i, idx) => (
                    <PaymentSection
                        key={idx}
                        img={i.img}
                        text={i.text}
                        price={i.price}
                        index={i.index}
                    />)) }
            </ul>
        </div>
        <Footer />
    </div>
  )
}

export default HiPrice