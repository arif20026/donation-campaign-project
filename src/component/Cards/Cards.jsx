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
        <div className="text-center ">

            <h2 className="text-5xl">Donations  : {cards.length} </h2>

            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-4 gap-6">
                {
                    cards.map( card => <Card key={card.id} card={card}></Card>)
                }
            </div>


            

        </div>
    );
};

export default Cards;