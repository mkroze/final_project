export default function Testimonial() {
    return (
        <section className="relative block py-24 lg:pt-0 bg-cyan-900">
        <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between lg:-mt-64 -mt-48">
            <div className="w-full  px-4">
            <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
            >
                <div className="flex-auto p-5 lg:p-10">
                <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
                 <img
                src="https://cdn.pixabay.com/photo/2018/01/09/16/11/angler-3071970__340.jpg"
                alt=""
                className="w-full h-full object-cover"
            />
            </div>
            <div className="relative lg:col-span-1">
            
            <blockquote className="mt-6 text-white flex flex-col justify-between">
                <p className="flex justify-around font-medium items-center text-gray-500">
                    <span className="text-2xl">Mohamed Yacine Kasmi</span>
                    <span>Full stack developer, beginner fishemen</span>
                </p>
                <p className="text-lg text-center text-cyan-800 font-medium w-2/3 m-auto ">
                Workflow has completely transformed how we interact with customers. We've seen record bookings, higher
                customer satisfaction, and reduced churn.
                </p>
                <footer className="mt-6">
                
                </footer>
            </blockquote>
            </div>
                </div>
                
                </div></div></div></div></section>
    // <div className="bg-white py-16 lg:py-24">
    //     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="relative py-24 px-8 bg-indigo-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
    //         
    //     </div>
    //     </div>
    // </div>
    )
}