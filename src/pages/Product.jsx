import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import ReleatedProducts from '../components/ReleatedProducts/ReleatedProducts';

const Product = () => {
  
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();


  const product = all_products && Array.isArray(all_products)
    ? all_products.find((e) => e.id === Number(productId))
    : null;


  if (!product) {
    return <div>Ürün bulunamadı veya yüklenemedi.</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>   
      <ReleatedProducts />
    </div>
  )
}

export default Product;