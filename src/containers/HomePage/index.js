/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { getData } from '../../store/productAC';
import { useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCard';

function HomePage() {

  const dispatch = useDispatch();

  useEffect( () => {
    getData(dispatch);
  }, [])

  return (
    <>
      <ProductCard />
    </>
  );
}

export default HomePage;
