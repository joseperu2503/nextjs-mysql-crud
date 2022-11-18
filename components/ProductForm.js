import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import axios from 'axios';

const ProductForm = ({productId, close, getProducts}) => {

  const [form, setForm] = useState({
    name: '',
    price: '',
    description: ''
  });

  const [title, setTitle] = useState('');

  useEffect(() => {
    if(productId){
      setTitle('Update Product')
    }
    else{
      setTitle('New Product')
    }
  }, []);

  const onSubmit = async () => {
    if(productId){
      await axios.put(`/`,form)
    }else{
      await axios.post(`/api/products`,form)
      .then(response => {
        console.log(response)
        close()
        getProducts()
      })
    }

  }

  return (
    <Modal>
      <h2 className="text-lg text-slate-700 mb-8">{title}</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label>Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label>Price</label>
          <input
            type="number"
            value={form.price}
            onChange={(e) => setForm({...form, price: e.target.value})}
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label>Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({...form, description: e.target.value})}
            className="input"
          ></textarea>
        </div>
      </div>
      <div className="flex gap-4 mt-8 justify-end">
        <button
        onClick={close}
          type="button"
          className="py-1 px-3 text-slate-800 text-base rounded-md bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-700"
        >
          Cancel
        </button>
        <button onClick={onSubmit} className="py-1 px-3 text-white text-base rounded-md bg-blue-700 hover:bg-blue-600">{ productId ? 'Update' : 'Save'}</button>
      </div>
    </Modal>
  );
};

export default ProductForm;
