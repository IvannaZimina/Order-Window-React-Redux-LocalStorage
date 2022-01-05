/* eslint-disable react-hooks/exhaustive-deps */
import style from './style.module.scss';
import { useState, useEffect } from 'react';
import { goodsActionCreator } from '../../store/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function HomePage() {

  const dispatch = useDispatch();

  const url = 'https://fakestoreapi.com/products/';
  const [goodsList, setGoodsList] = useState([]);
  console.log()

  useEffect(async () => {
    const { data } = await axios.get(url);

    let product = [];
    data.forEach( elem => {
      const mass = {
        id: elem.id,
        title: elem.title,
        image: elem.image,
        price: Math.floor(elem.price)
      }
      product.push(mass)
    })

    await setGoodsList(product);
  }, [])

  const addToBusket = async (item) => { 
    const good = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      count: 1,
      amount: Math.floor(item.price)
    }
    
    await goodsActionCreator(good, dispatch);
  }

  const card = goodsList.map(item => (
    <>
      <div key={item.id} className={style.itemCard}>
        <h3 className={style.titleCard}>{item.title}</h3>
        <div className={style.imageCard}> <img src={item.image} alt="" /> </div>
        <h3 className={style.priceCard}> Price: {item.price}</h3>
        <div className={style.buyNav}>
          <button className={style.buyBtnCard} onClick={() => addToBusket(item)}>BUY</button>
        </div>
      </div>
    </>
  ))

  return (
    <>
      <div className={style.goodsList}>
        {card}
      </div>
    </>
  );
}

export default HomePage;
