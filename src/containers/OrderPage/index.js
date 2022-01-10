import style from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addProductActionCreator, substractProductActionCreator, deleteProductActionCreator} from '../../store/orderAC';

function OrderPage() {

  const dispatch = useDispatch();
  const order = useSelector(state => state.orderList.orderList);

  const substractCount = (data) => {

    if (data.count === 0) {
      const rmItem = {
        id: data.id
      }
      return deleteProductActionCreator(rmItem, dispatch)
    } 

    const item = {
      id: data.id,
      count: data.count - 1,
      amount: data.amount - data.price
    };

    substractProductActionCreator(item, dispatch);
  };

  const addCount = (data) => {

    const item = {
      id: data.id,
      count: data.count + 1,
      amount: data.amount + data.price
    };

    addProductActionCreator(item, dispatch);
  };

  const deleteItem = (data) => {
      const rmItem = {
        id: data.id
      }

      deleteProductActionCreator(rmItem, dispatch)
  };

  const cardinBusket = order.map((data) => (
    <>
      <div className={style.cardLine}>
        <div className={style.cardImage}><img src={data.image} alt="" /></div>
        <div className={style.cardTitle}>{data.title}</div>
        <div className={style.cardPrice}>{(data.price/100).toFixed(2)}</div>

        <div className={style.itemEditCount}>
          <button onClick={() => substractCount(data)}> - </button>
          <div className={style.cardCount}>{data.count}</div>
          <button onClick={() => addCount(data)}> + </button>
        </div>

        <div className={style.catdAmount}>{(data.amount/100).toFixed(2)}</div>

        <button className={style.deleteCardLine} onClick={() => deleteItem(data)}>X</button>
      </div>
    </>
  ))

  const totalCount = order.reduce( (acc, item) => {
    return  acc += item.count;
  }, 0);

  const totalAmount = order.reduce( (acc, item) => {
    return  acc += item.amount
  }, 0)


  return (
    <div className={style.orderContainer}>
      <h2>ORDER</h2>

      <div className={style.orderListContain}>{cardinBusket}</div>

      <div className={style.totalNumber}>Total count: {totalCount}</div>
      <div className={style.totalNumber}>Total amount: {(totalAmount/100).toFixed(2)} UAH</div>

    </div>
  );
}

export default OrderPage;
