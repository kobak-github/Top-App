import React, { useState } from 'react'
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '@/components'
import { withLayout } from '@/layout/Layout'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { MenuItem } from '@/interfaces/menu.interface'

function Home({menu}: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4)
  return (
    <>
      <Htag tag='h1'>what this text</Htag>
      <Button appearance='primary' arrow='down'>BUTTON</Button>
      <Button appearance='ghost' arrow='right'>BUTTON2</Button>
      <P size='s'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eos, ratione hic illo molestiae necessitatibus voluptatum quidem officiis adipisci vero accusantium laboriosam. Nostrum, aliquam laboriosam eaque tempora repellendus voluptatum amet!</P>
      <P size='m'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima debitis omnis sit excepturi numquam atque rerum? In est sequi harum laborum. Corporis quod aspernatur vero, sequi perspiciatis in vitae odit.</P>
      <P size='l'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, harum sunt facilis ducimus quod laboriosam rem, similique magnam, eaque beatae natus minima. Exercitationem asperiores placeat repellendus modi temporibus error quas?</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag size='m' color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder='Test'/>
      <Textarea placeholder='Test'/>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}