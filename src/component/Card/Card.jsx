
const Card = ({card}) => {

    const {id, picture, title, category, category_button_bg, card_bg, text_color, description, price
    } =card

    const categoryStyle = {
        backgroundColor: category_button_bg  ,
        
      };

      const textStyle ={
        color: text_color,
      };

      const cardStyle ={

        backgroundColor:card_bg 

      }

      
      
    return (
        <div className="card card-compact   shadow-xl " style={cardStyle} >
        <figure><img src={picture} className="w-full h-52" alt="" /></figure>
        <div className="card-body">
            <button style={categoryStyle} className="text-center card-title  px-3 py-1  w-40 rounded-md"  > {category}</button>
          <h2 style={textStyle} className="text-left text-xl">{title}</h2>

          
          
        </div>
      </div>
    );
};

export default Card;