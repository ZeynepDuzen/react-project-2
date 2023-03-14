import star from '../images/star.png';

function Card(props){
   console.log("public url", process.env.PUBLİC_URL);                           

   let badgeText;

   if(props.data.openSpots === 0){
      badgeText = "Sold Out";                        
   }
   else{
      badgeText = "Online";                        
   }
   return(
     <>                         
      <div className="card">
          <div className="card-badge">{badgeText}</div>                    
          <img src={process.env.PUBLIC_URL + "/images/" + props.data.coverImg} className="card-img" alt="" />  

        <div className="card-stats">
          <img src={star} className="card-rating-icon" alt="" />
          <span className="card-rating">{props.data.stats.rating}</span>
          <span className="gray">({props.data.stats.reviewCount})</span>
          <span className="gray">{props.data.location}</span>
        </div>
        <p>{props.data.title}</p>
        <p><span className="bold">From ${props.data.price} /</span>person</p>
      </div> 
      </>                       
   );                           
}

export default Card;