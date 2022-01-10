import style from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { goodsActionCreator } from '../../store/orderAC';
import Loading from '../Loading';

function ProductCard() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.productList);

  const addToBusket = async (item) => {

    const good = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      count: 1,
      amount: item.price
    };

    await goodsActionCreator(good, dispatch);
  };

  const card = products.productList.map(item => (
    <>
      <div key={item.id} className={style.itemCard}>
      <button className={style.cardBtn} onClick={() => addToBusket(item)}>
        <h3 className={style.titleCard}>{item.title}</h3>
        <div className={style.imageCard}> <img src={item.image} alt="" /> </div>
        <h3 className={style.priceCard}> Price: {(item.price / 100).toFixed(2)}</h3>
        <div className={style.buyNav}>
          <button className={style.buyBtnCard} onClick={() => addToBusket(item)}>BUY</button>
        </div>
        </button>
      </div>
    </>
  ));

  const loading = products.loadingStatus !== 'ok';


  return (
    <>
      {loading ? (

        <div className={style.goodsList}>
          <Loading />
        </div>

      ) : (

        <div className={style.goodsList}>
          {card}
        </div>

      )}

    </>
  );
}

export default ProductCard;
