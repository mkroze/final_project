import dbConnect from "../../../utils/dbConnect";
import Member from "../../../models/Member";

dbConnect();

export default async (req, res) => {
    const {
        query:{email,password},
        method
    } = req;
    
    switch(method){
        case 'GET':
            try {
                const member = await Member.findOne({"email":email, "password":password});
                if(!member){
                    res.status(400).json({success:false})
                    console.log('not found')
                }
                res.status(200).json({ success: true, data: member });
                console.log('success');
            } catch (error) {
                res.status(400).json({ success: false });
                console.log(error)
            }
            
            break;
        
    }
}