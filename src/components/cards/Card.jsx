import React, { useEffect, useState } from 'react';
import './card.css';

const Card = () => {
  const [data, setData] = useState([]);
  const[searchTerm ,setSearchterm]=useState(' ');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/restaurants');
        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

 
  
const handleData=()=>{
  const newRatingdata= data.filter((res)=>res.info.avgRating > 4)
  console.log(newRatingdata);
  setData(newRatingdata);
}

const handleSearch=(e)=>{
  const term=e.target.value;
  setSearchterm(term);
  const filtered = data.filter((item) =>
      item?.info?.name.toLowerCase().includes(term)
    );


setData(filtered)



}

console.log(searchTerm)
 

  return (
    <div className="card12">
<button onClick={handleData}>sort data on rating 4</button>
<input type="text" onChange={handleSearch}/>

      <div className="parents" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Array.isArray(data) && data.map((items) => (
            <div className="card" id={items?.id} style={{ width :'25rem'}} key={items?.info?.id}>
              <img
                className="card-img-top"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${items?.info?.cloudinaryImageId}`}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{items?.info?.name}</h5>
                <p className="card-text">
                  {items?.info.avgRating} and {items?.info?.sla?.deliveryTime} minutes
                </p>
                <p>
                  {items?.info?.cuisines?.map((p) => (
                    <span key={p}>{p}&nbsp;</span>
                  ))}
                </p>
                <p>{items?.info?.locality}</p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
