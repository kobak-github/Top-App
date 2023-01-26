import React from 'react'
import { ProductProps } from './Product.props'
import styles from './Product.module.css'
import cn from 'classnames'
import { Card } from '../Card/Card'
import { Rating } from '../Rating/Rating'
import { Tag } from '../Tag/Tag'
import { Button } from '../Button/Button'
import { priceRu } from '@/helpers/helpers'
import { Divider } from '../Divider/Divider'

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice && <Tag className={styles.oldPrice} color='green'>{priceRu(product.price - product.oldPrice)}</Tag>}
      </div>
      <div className={styles.credit}>{priceRu(product.credit)}/<span>мес</span></div>
      <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
      <div className={styles.tags}>{product.categories.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}</div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.ratingTitle}>{product.reviewCount} отзывов</div>
      <Divider className={styles.hline}/>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>fetchs</div>
      <div className={styles.advBlock}>
        {product.advantages && <div className={styles.advantages}>
          <div className={styles.advTitle}>Преимущества</div>
          <div>{product.advantages}</div>
        </div>}
        {product.disadvantages && <div className={styles.disadvantages}>
          <div className={styles.advTitle}>Недостатки</div>
          <div>{product.disadvantages}</div>
        </div>}
      </div>
      <Divider className={styles.hline}/>
      <div className={styles.actions}>
        <Button className={styles.btn} appearance='primary'>Узнать подробнее</Button>
        <Button className={styles.btn} appearance='ghost' arrow={'right'}>Читать отзывы</Button>
      </div>
    </Card>
  )
}
