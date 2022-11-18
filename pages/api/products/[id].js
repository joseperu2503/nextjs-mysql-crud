import {pool} from '../../../config/db'

export default async function handler(req, res){
  switch (req.method) {
    case 'GET':
      return await getProduct(req,res)
    case 'PUT':
      return await updateProduct(req,res)
    case 'DELETE':
        return await deleteProduct(req,res)
  }
}

const getProduct = async (req,res) => {
  const { id } = req.query
  const  [product] = await pool.query('SELECT * FROM products WHERE id = ?', [id])
  return res.status(200).json(product[0])
}

const updateProduct = async (req,res) => {
  const { name, description, price} = req.body
  const { id } = req.query
  await pool.query('UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?', [name,description,price,id])
  return res.status(200).json()
}

const deleteProduct = async (req,res) => {
  const { id } = req.query
  await pool.query('DELETE FROM products WHERE id = ?', [id])
  return res.status(204).json()
}
