export default function handler(req, res){
    return res.status(200).json('getting one product ' + req.query.id)
}