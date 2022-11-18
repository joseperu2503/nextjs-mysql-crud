export default function handler(req, res){

    if(req.method === 'POST'){
        return res.status(200).json('creating one product ')
    }
    else{
        return res.status(200).json('getting a product ')
    }

    
}