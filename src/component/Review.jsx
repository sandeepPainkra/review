import React from "react";

const Review = ({url,job,name,quote}) => {
   return (
      <div className="review">
         <div className="img__sec">
            <img src={url} />
         </div>
         <h3>{name}</h3>
         <h5>{job}</h5>
         <p>{quote}</p>
      </div>
   );
};

export default Review;
