import React from 'react';
import Card from '../../molecules/Card/index'
import styles from './styles.module.scss'

const CardList  = ({cards}) => {

  return (
    <div>
      <div className={styles.cardList}>
        {cards.map((card) => (
          <Card
					key={card.uuid}
					name={card.name}
					birthday={card.birthday}
					img={card.img}
					status={card.status}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList ;