import { NavLink } from 'react-router'
import css from './Courses.module.css'

function Courses() {
  return (
    <div className={css.coursesBlock}>
        <div>
            {/* <h2 className={css.courseTitle}>Курсы</h2> */}
            <div className={css.coursesContent}>
                <div className={css.backImg}>
                    <div className={css.courseBack}></div>
                    <div className={css.coursesItem}>
                        <h2>Курс по созданию видео</h2>
                        <p>Научитесь создавать видео как у Гоши Бомжезьяна.</p>
                        <NavLink to='/courses' className={css.infoBtn}>Подробнее</NavLink>
                    </div>
                </div>
                <div className={css.backImg}>
                    <div className={css.courseBack}></div>
                    <div className={css.coursesItem}>
                        <h2>Привет от Гоши</h2>
                        <p>Получить привет от Гоши</p>
                        <NavLink to='/hi-price' className={css.infoBtn}>Получить привет</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses