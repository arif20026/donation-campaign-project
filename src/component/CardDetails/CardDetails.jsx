import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../../Utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find((card) => card.id === idInt);

    const handleDonate = () => {
        saveDonation(idInt);
        toast('You have Donated successfully')
    };

    return (
        <div className="relative px-20 py-20">
            <div className="relative">
                <img src={card.picture} alt="" className="w-full h-96" />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-black opacity-50"></div>
                <div className="absolute bottom-6 right-30 ">
                    <button
                        className=" btn border border-[#FF444A] bg-[#FF444A] text-white text-xl font-semibold  px-4 py-2 rounded-md hover:bg-black focus:outline-none ml-8"
                        onClick={handleDonate}
                    >
                        Donate ${card.price}
                    </button>
                </div>
            </div>

            <p className=" pt-14 pb-6 text-4xl font-bold">{card.title}</p>
            <p className="text-base font-normal">{card.description}</p>

            <ToastContainer />
        </div>
    );
};

export default CardDetails;
