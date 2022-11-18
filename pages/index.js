import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import ProductForm from '../components/ProductForm';
import { Icon } from '@iconify/react';
import AppLayout from '../components/AppLayout';

const HomePage = () => {
  const [productId, setProductId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get('/api/products')
    .then((response) => {
      console.log(response);
      setProducts(response.data);
    })
    .catch(error => {
      console.log(error)
    });
  };

  const closeForm = () => {
    setShowForm(false)
  }

  const editProduct = (id) => {
    setProductId(id)
    setShowForm(true)
  }

  const newProduct = (id) => {
    setProductId(null)
    setShowForm(true)
  }

  const deleteProduct = (id) => {
    axios.delete(`/api/products/${id}`)
    .then((response) => {
      console.log(response);
      getProducts()
    });
  }

  return (
    <div>
      <Button onClick={newProduct}>New Product</Button>
      <table className="w-full text-sm text-left text-gray-500 mt-8">
        <thead className="text-xs text-gray-700 uppercase bg-blue-100">
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
            <th scope="col" className="py-3 px-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          { products.map( (product, index) => (
            <tr className="bg-white border-b hover:bg-gray-100" key={index}>
              <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.name}
              </th>
              <td className="py-4 px-6">{product.description}</td>
              <td className="py-4 px-6">${product.price}</td>
              <td className="py-4 px-6">
                <div className='flex gap-2'>
                  <Icon icon="material-symbols:edit" className='h-5 w-5 cursor-pointer hover:text-amber-600' onClick={() => editProduct(product.id)}/>
                  <Icon icon="material-symbols:delete-rounded" className='h-5 w-5 cursor-pointer hover:text-red-600' onClick={() => deleteProduct(product.id)}/>
                </div>
              </td>
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

HomePage.PageLayout = AppLayout

export default HomePage;

