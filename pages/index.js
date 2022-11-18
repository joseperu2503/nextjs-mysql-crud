import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import ProductForm from '../components/ProductForm';

const HomePage = () => {
  const [productId, setProductId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get('/api/products').then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  };

  const closeForm = () => {
    setShowForm(false)
  }

  return (
    <div>
      <Button onClick={() => setShowForm(!showForm)}>Nuevo</Button>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Description
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          { products.map( (product, index) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
              <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.name}
              </th>
              <td className="py-4 px-6">{product.description}</td>
              <td className="py-4 px-6">${product.price}</td>
            </tr>
          ))}


        </tbody>
      </table>

      {showForm && (
        <ProductForm productId={productId} close={closeForm} getProducts={getProducts}/>
      )}
    </div>
  );
};

export default HomePage;
