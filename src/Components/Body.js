import resList from "../utils/mockData";
import RestaurantCard from "./RestaurentCard";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter((res) => res.avgRating > 4.3);
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {restaurantList.map((res) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;