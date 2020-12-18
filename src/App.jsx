import { Button } from "@material-ui/core";
import React, { useState } from "react";
import data from "./component/data";
import Review from "./component/Review";

const App = () => {
   const [index, setIndex] = useState(0);
   const { name, url, job, quote } = data[index];

   const Increment = () => {
      setIndex(index + 1);
      if (index + 1 == 4) {
         setIndex(0);
      }
      console.log(index + 1);
   };
   const Decrement = () => {
      if (index - 1 == -1) {
         setIndex(3);
      } else {
         setIndex(index - 1);
      }
   };
   const RandomNum = () => {
      let rnum = Math.floor(Math.random() * data.length);
      console.log(rnum);
      setIndex(rnum);
   };
   return (
      <div className="app">
         <div className="review_div">
            <h2>Our Review</h2>
            <hr />
            <Review name={name} url={url} job={job} quote={quote} />
            <div className="btn__div">
               <Button onClick={Decrement}>
                  <i class="fa fa-chevron-left" aria-hidden="true"></i>
               </Button>
               <Button onClick={Increment}>
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
               </Button>
               <br />
               <br />
               <Button onClick={RandomNum} className="random">
                  Random Person
               </Button>
            </div>
         </div>
      </div>
   );
};

export default App;
