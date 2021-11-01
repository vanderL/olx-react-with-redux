import React from 'react';
import{ Link } from 'react-router-dom';

import { Item } from './styles';

function AdItem({data}) {
  let price = '';

  if(data.priceNegotiable) {
    price = 'Preço Negociável'
  } else {
    price = `R$ ${data.price}`
  }

  return (
    <Item className="aditem">
        <Link to={`/ad/${data.id}`}>
          <div className="itemImage">
            <img src={data.image} alt={data.title} />
          </div>
          <div className="itemName">
            {data.title}
          </div>
          <div className="itemPrice">
            {price}
          </div>
        </Link>
    </Item>
  )
}

export default AdItem;