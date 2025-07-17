import css from "./Footer.module.css"
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div className={css.footerCont}>
        <div className={css.firstFooterBlock}>
            <h2>Gosha</h2>
            <p>Gosh the best monkey travel blogger ever!!!</p>
            <ul className={css.list}>
                <li><a href="https://t.me/goshamonkey" target="_blank"><FaTelegramPlane /></a></li>
                <li><a href="https://www.youtube.com/@monkeygosha" target="_blank"><FaYoutube /></a></li>
                <li><a href="https://www.tiktok.com/@goshamonkey" target="_blank"><FaTiktok /></a></li>
            </ul>
            <p>All rights reserved!!</p>
        </div>
        {/* <div className={css.contacts}>
            <h3>Contact</h3>
        </div> */}
    </div>
  )
}

export default Footer