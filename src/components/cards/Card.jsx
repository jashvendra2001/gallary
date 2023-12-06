import React, { useCallback, useEffect, useState } from 'react';
import './card.css';
import Navbar from '../navbar/Navbar';
import { debounce } from 'lodash';


const Card = () => {
  const [data, setData] = useState([]);
  const[prevData,setprevData]=useState([ ]);
  const[value,setvalue]=useState("");
  


  const[login,setLogin]=useState(true);

  useEffect(() => {

      const fetchData = async () => {
        try {
          const response = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4794366&lng=77.01758319999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
          const jsonData = await response.json();
          console.log(jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants );
         setData(jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
         setprevData(jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
        } 
        catch (error) {
          console.error('Error fetching data:', error);
        }
      };
   fetchData();

  },[]);
  

 
  
const handleData123=()=>{
  const newRatingdata= data.filter((res)=>res.info.avgRating > 4)
  console.log(newRatingdata);
  setprevData(newRatingdata);
}




const handleSearch = ( ) => { 
 

 const filtered = data.filter((item) => item.info.name.toLowerCase().includes(value.toLowerCase())
  );
  if(filtered.length===0)
  {
   alert("rest is not present")
   return;
  
  }
 
  setprevData(filtered);  
};



const deb = useCallback(
  
  

  debounce((value) =>
  {setvalue(value)},
  1000) ,[setvalue]);

const handlevalue = (e) => {
  deb(e.target.value);
};




const handleSorting=()=>{
  const sorted=[...prevData].sort((a, b) =>  b?.info?.avgRating - a?.info?.avgRating)
  setprevData(sorted)
  console.log(sorted)
}







const handlelogin=()=>{
  setLogin(!login)
}


  return (data.length===0?"loading...":


  <div className="container">
     <Navbar/>
  
    
    <div className="card12" style={{margin:12}}>
      
     
      {
        console.log("second called")
      }
<button style={{border:'1px solid black',background:"gray",borderRadius:"2px"}} onClick={handleData123}>sort data on rating </button>
<button  onClick={handleSorting}   style={{border:'1px solid black',background:"gray",borderRadius:"2px"}} >sort high to low </button>
<button onClick={handlelogin}> {login?"login":"logout"} </button>

<div className="search" style={{display:"flex"}}>
  <input style={{border:'1px solid black',borderRadius:"2px",paddingLeft:1}}  placeholder="enter your ret" type="text" className='search-box'  onChange={ handlevalue}/>

  <button onClick={handleSearch}>search</button>
</div>


      <div className="parents" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Array.isArray(prevData)  && prevData.map((items) => (
            <div className="card" id={items?.id} style={{ width:'20rem'}} key={items?.info?.id}>
              <img
                className="card-img-top"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${items?.info?.cloudinaryImageId}  `}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{items?.info?.name}</h5>
                {
                  console.log("lkldnff")
                }
                <p className="card-text">
                  {items?.info?.avgRating} and {items?.info?.sla?.deliveryTime} minutes
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
 </div>
  );
};

export default Card;
