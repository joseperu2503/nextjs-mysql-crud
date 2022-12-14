import {pool} from '../../../config/db'

export default async function handler(req, res){
  switch (req.method) {
    case 'GET':
      return await getProducts(req,res)
    case 'POST':
      return await saveProduct(req,res)
  }
}

const saveProduct = async (req,res) => {
  try {
    const { name, description, price} = req.body
    const [result] = await pool.query('INSERT INTO products SET ?',{
      name,
      description,
      price
    })
    return res.status(200).json('creating one product ', result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({error})
  }

}

const getProducts = async (req,res) => {
  try {
    const  [products] = await pool.query('SELECT * FROM products')
    return res.status(200).json(products)
  } catch (error) {
    console.log(error)
    return res.status(500).json({error})
  }
}
