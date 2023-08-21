import { FaStar } from 'react-icons/fa'

function RatingPopup({info}) {

  function StarRating({ average }) {
    const renderStars = () => {
      const stars = [];
  
      if(average === 0){
        for (let i = 0; i < 5; i++) {
          stars.push(<FaStar key="empty" style={{ color:"#D9D9D9" }} />);
        }
      }else{
      const fullStars = Math.floor(average);
      const remainingStar = average - fullStars;
      const remainingStarColor = " #D9D9D9";
  
  
      for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full_${i}`} style={{ color: '#F11A7B' }} />);
      }
  
      if (remainingStar >= 0.5) {
        stars.push(<FaStar key="half" style={{ color: '#F11A7B' }} />);
        stars.push(<FaStar key="empty" style={{ color: remainingStarColor }} />);
      } else if (remainingStar > 0) {
        stars.push(<FaStar key="empty" style={{ color: remainingStarColor }} />);
      }
    }
      return stars;
    };
    return <div>{renderStars()}</div>;
  }
  // console.log(info.obj_id.rating)
  return (
    <div className="rating-popup">
      <div className="rating-heading">
        <h3>My Ratings</h3>  
      <p>Rate the app based on your experience.</p>
    </div>
    <div class="line"></div>
    <div className="ratings">
      <div className='rating-item'>
        <p>Usability</p><StarRating average={info.obj_id.rating.Usability}/>
      </div>
      <div className='rating-item'>
        <p>Performance</p><StarRating average={info.obj_id.rating.Perfomance}/>
      </div>
      <div className='rating-item'>
        <p>Features</p><StarRating average={info.obj_id.rating.Features}/>
      </div>
      <div className='rating-item'>
        <p>Company</p><StarRating average={info.obj_id.rating.Company}/>
      </div>
      <div className='rating-item'>
        <p>Value</p><StarRating average={info.obj_id.rating.Value}/>
      </div>
      <div className='rating-item'>
        <p>Support</p><StarRating average={info.obj_id.rating.Support}/>
      </div>
    </div>
    <div className="rating-buttons">
    <button className="button">Cancel</button>
    <button className="button-light">Rating</button>
    </div>
    </div>
  )   

}

export default RatingPopup