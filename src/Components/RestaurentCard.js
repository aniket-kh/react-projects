
const styleCard = {
    backgroundColor:"#f0f0f0"
}


const RestaurantCard = (props) => {
//const {resname,cuisines} = props
const {resData} = props
  
const {image,name,cuisines,avgRating }= resData 
    return (
        <div className="res-card" style={styleCard}>

            <img
                className="res-logo"
                src={image}
                alt="Restaurant"
            />

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating}</h5>


        </div>
    );
};

export default RestaurantCard
