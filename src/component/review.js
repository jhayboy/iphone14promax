// import React from "react";

// const Review = ({ name, rating, comment }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md mb-4">
//       <div className="flex justify-between items-center">
//         <h3 className="text-xl font-semibold">{name}</h3>
//         <div className="flex items-center">
//           <span className="text-yellow-500 mr-1">
//             {Array.from({ length: rating }).map((_, index) => (
//               <i key={index} className="fas fa-star"></i>
//             ))}
//           </span>
//           <span className="text-gray-600">
//             ({rating.toFixed(1)})
//           </span>
//         </div>
//       </div>
//       <p className="mt-2 text-gray-700">{comment}</p>
//     </div>
//   );
// };

// export default Review;


import React from "react";
import {AiFillStar} from "react-icons/ai"

const StaticReview = () => {
  return (
    <div className="bg-black p-4 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center ">
        <div className="text-white">
            <h3 className="text-lg font-semibold ">Stella Owen</h3>
             <p className="text-sm">11-06-23</p>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1 flex gap-1">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
          </span>
          <span className="text-gray-500">(5.0)</span>
        </div>
      </div>
      <p className="mt-2 text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        venenatis, justo a laoreet fringilla, tortor nisi bibendum libero.
      </p>
    </div>
  );
};

export default StaticReview;
