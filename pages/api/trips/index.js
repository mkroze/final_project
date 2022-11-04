import dbConnect from "../../../utils/dbConnect";
import Trip from "../../../models/Trip";

dbConnect();

export default async (req, res) => {
    const {method,body} = req;

    switch(method){
        case 'GET':
            try {
                const trips = await Trip.find({});

                res.status(200).json({
                    success: true,
                    data: trips
                })
            } catch (error) {
                res.status(400).json({ success: false });
                
            }
            break;
        case 'POST':
            try {
                const trip = await Trip.create(body);

                res.status(201).json({
                    success: true,
                    data: trip 
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