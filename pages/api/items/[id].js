import dbConnect from "../../../utils/dbConnect";
import Item from "../../../models/Item";

dbConnect();

export default async (req, res) => {
    const {
        query:{id},
        method
    } = req;

    switch(method){
        case 'GET':
            try {
                const item = await Item.findById(id);
                if(!item){
                    res.status(400).json({success:false})
                    console.log('item not found');
                }
                res.status(200).json({ success: true, data: item });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            
            break;
        
    }
}