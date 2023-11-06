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
    <div className="bg-black p-4 rounded-lg shadow-md mb-4 flex flex-col gap-3">
      <div>
        <div className="flex justify-between items-center ">
            <div className="text-white flex items-center gap-2">
                <div className="rounded-full bg-pink-400 p-2 w-10 h-10 text-center">
                    <p>S</p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold ">Stella Owen</h3>
                    <p className="text-xs">11-06-23</p>
                </div>
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
            OMG this is a really good business model, wish this can last for a longer time
        </p>
      </div>


      <div>
        <div className="flex justify-between items-center ">
            <div className="text-white flex items-center gap-2">
                <div className="rounded-full bg-blue-400 p-2 w-10 h-10 text-center">
                    <p>B</p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold ">Ben Marcus</h3>
                    <p className="text-xs">11-04-23</p>
                </div>
            </div>
            <div className="flex items-center">
            <span className="text-yellow-500 mr-1 flex gap-1">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar className="text-gray-500"/>
            </span>
            <span className="text-gray-500">(4.0)</span>
            </div>
        </div>
        <p className="mt-2 text-gray-500 text-sm">
            Got this for $499 and sold it for $800 on ebay, too bad its one per customer
        </p>
        </div>



        <div>
            <div className="flex justify-between items-center ">
                
                <div className="text-white flex items-center gap-2">
                    <div className="rounded-full bg-red-400 p-2 w-10 h-10 text-center">
                        <p>M</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold ">Mary Sylvia</h3>
                        <p className="text-xs">11-01-23</p>
                    </div>
                </div>
                <div className="flex items-center">
                <span className="text-yellow-500 mr-1 flex gap-1">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar className="text-gray-500"/>
                </span>
                <span className="text-gray-500">(4.0)</span>
                </div>
            </div>
            <p className="mt-2 text-gray-500 text-sm">
                Don't know how my son came across this, it is really amazing
            </p>
        </div>


        <div>
            <div className="flex justify-between items-center ">
               
                <div className="text-white flex items-center gap-2">
                    <div className="rounded-full bg-pink-400 p-2 w-10 h-10 text-center">
                        <p>L</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold ">Ladi Harry</h3>
                        <p className="text-xs">10-29-23</p>
                    </div>
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
               I want to get one more put payment isn't going through, someone should assist please
            </p>
        </div>


        <div>
            <div className="flex justify-between items-center ">
               
                <div className="text-white flex items-center gap-2">
                    <div className="rounded-full bg-green-400 p-2 w-10 h-10 text-center">
                        <p>M</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold ">Micheal Alaska</h3>
                        <p className="text-xs">10-29-23</p>
                    </div>
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
                I was really surprised when it was delivered, was thinking it was refurbished but it wasn't 100% legit. little secret use a different device to purchase as many as possible
            </p>
        </div>
    </div>
  );
};

export default StaticReview;
