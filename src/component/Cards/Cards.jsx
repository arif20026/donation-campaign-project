import { useEffect, useState } from "react";
import Card from "../Card/Card";



const Cards = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('donations.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="text-center my-20 ">

            

            <div className="grid grid-cols-4 gap-6">
                {
                    cards.map( card => <Card key={card.id} card={card}></Card>)
                }
            </div>


            

        </div>
    );
};

export default Cards;