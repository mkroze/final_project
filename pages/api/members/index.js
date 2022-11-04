import dbConnect from "../../../utils/dbConnect";
import Member from "../../../models/Member";

dbConnect();

export default async (req, res) => {
    const {method,body} = req;

    switch(method){
        case 'GET':
            try {
                const members = await Member.find({});

                res.status(200).json({
                    success: true,
                    data: members
                })
            } catch (error) {
                res.status(400).json({ success: false });
                
            }
            break;
        case 'POST':
            try {
                const member = await Member.create(body);

                res.status(201).json({
                    success: true,
                    data: member 
                })
            } catch (error) {
                res.status(400).json({ success: false });
                console.log(error);
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}