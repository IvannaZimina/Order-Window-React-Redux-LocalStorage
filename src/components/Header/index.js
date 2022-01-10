import style from './style.module.scss';
import logo from './logo.png';
import bascket from './basket.png';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Header() {

  const count = useSelector(state => state.orderList.orderList);

  // тоже работает - возращает массив без дублей
  // const arr = count.filter((id, index) => count.indexOf(id) === index);

  return (
    <div className={style.headerContainer}>

      <div className={style.contentHeader}>

        <div>
          <NavLink to="/">
            <img src={logo} className={style.logo} alt="logo" title="Home page"/>
          </NavLink>
        </div>

        <div className={style.busketIcons}>
          <div className={style.countGoods}>{count.length}</div>
          <NavLink to="/order" >
              <img src={bascket} className={style.bascket} alt="bascket" title="Order page"/>
          </NavLink>
        </div>

      </div>

    </div>
  );
}

export default Header;
