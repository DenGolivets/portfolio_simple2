import Card01 from '../../img/categories/cat-01.jpg'
import ArrowImg from '../../img/icons/arrow.svg'
import styles from './Card.module.css'

function Card({ img, title }) {
    return (
        <div className={styles.card}>
            <img className={styles.card__img} src={img} alt='Card01' />
            <div className={styles.card__body}>
                <div className={styles.text}>
                    <div className={styles.card__title}>
                        <a href='#!'>{title}</a>
                    </div>
                    <div className={styles.card__muted}>
                        <a href='#!'>Explore Now!</a>
                    </div> 
                </div>
                <div className={styles.card__icon}>
                    <a href='#!'><img src={ArrowImg} alt='ArrowImg' /></a>
                </div>

            </div>
        </div>
    )
}

export default Card;