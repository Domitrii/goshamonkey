import css from './PaymentSection.module.css'
import { loadStripe } from "@stripe/stripe-js";
// import dotenv from 'dotenv';

// dotenv.config();

type PaymentProps = {
    img: string;
    text: string;
    price: string;
    index: string;
}

function PaymentSection ({ img, text, price, index }: PaymentProps) {
    // const handleConsole = () => {
    //     console.log(`Clicked on ${text} with index ${index} and img ${img} and price ${price}`);
    // }

    const makePayment = async () => {
        const stripe = await loadStripe('pk_test_51Rhue9QTjbClfquJ6uYmcrzrVFboBBroIqU5h17Q5uGP17sd6At9MyBw5l75KF20pYapHbuAqVVkcvIyGTUagIkR00sFcx7PK9');
        if (!stripe) {
            console.error("Stripe not loaded");
            return;
        }


        const response = await fetch('http:/localhost:3000/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ priceId: price }),
        });
        const session = await response.json();
        const result = await stripe.redirectToCheckout({ sessionId: session.id });
        if (result.error) {
            console.error(result.error.message);
        }
    }

  return (
    <li className={css.content}>
        <div className={css.picCont}>
            <img src={img} alt="фото курса" className={css.pic} id={index} />
        </div>
        <div className={css.textBlock}> 
            {text}
            {price}
            <p onClick={() => makePayment()} className={css.btn}>View More</p>
        </div>
    </li>
  )
}
export default PaymentSection