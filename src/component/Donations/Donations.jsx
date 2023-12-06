import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Utility/localStorage";

const Donations = () => {
    const donations = useLoaderData()
    const [donationCards, setDonationCards] = useState([])
    const [dataLength, setDataLength] = useState(4)



    useEffect(() => {
        const storedDonationIds = getStoredDonation()
        if (donations.length > 0) {
            const donation = donations.filter(donation => storedDonationIds.includes(donation.id))
            console.log(donations)
            setDonationCards(donation)
        }
    }, [donations])


    return (
        <div className="px-36">



            <p> Donations :{donationCards.length}</p>

            <div className="grid grid-cols-2 gap-6  ">

                {
                    donationCards.slice(0, dataLength).map(donation => <div key={donation.id} className={"flex  rounded-lg"} style={{ backgroundColor: `${donation.card_bg}` }} >


                        <img className=" w-56 h-52  " src={donation.picture} alt="" />
                        <div className=" pl-6">
                            <button className="px-4 rounded-md  py-1 text-sm font-normal my-5"  style={{backgroundColor:donation.category_button_bg,color:donation.text_color}}>{donation.category}</button>
                            <h1 className="text-2xl font-semibold">{donation.title}</h1>
                            <h1 className="text-xl font-bold" style={{color:donation.text_color}}>${donation.price}</h1>
                            <button className="text-lg font-semibold py-2  w-28 my-5 text-white rounded" style={{backgroundColor:donation.text_color}}>View Details</button>
                        </div>
                    </div>)
                }


            </div>

            <ul>



            </ul>

            <div className={` ${ donationCards.length <= 4 ? 'hidden' : ''}`}>
                <button onClick={() => setDataLength(donationCards.length)} className="btn btn-primary  ">Show more</button>
            </div>


        </div>
    );
};




export default Donations;