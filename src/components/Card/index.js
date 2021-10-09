import React from 'react';
import styles from './styles.module.scss';

function Card({data}) {
    return (
        <div className={styles.cardItem}>
            <div className={styles.cardInner}>
                <div className={styles.cardTop}>
                    <img src={data.url} alt="cat"/>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.cardInfo}>
                        {data.categories.map(categorie=> <p>{categorie.name}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
