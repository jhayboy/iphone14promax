import React, {useState, useEffect} from "react"; 
// import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
 
export default function PayPalPay() {
  // const navigate = useNavigate()
  const [setSuccess] = useState(false);
  const [setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState("");
  const [credents, setCredents] = useState("")

   const [backendData, setBackendData] = useState({});
  //  console.log(credents)

    useEffect(() => {
      fetch("https://iphone14promax-api.up.railway.app/api")
          .then(response => response.json())
          .then(data => {
              setBackendData(data); // Set the entire backendData object
              setCredents(data.clientId); // Extract clientId from data and set it in credents
            console.log(credents)
          });
    }, [credents]);
          
  //  const createOrder = (data, actions) => {
  //     return actions.order 
  //       .create({
  //         purchase_units: [
  //           {
  //             description: "iPhone 14 Pro Max",
  //             amount: {
  //               currency_code: "USD",
  //               value: 499.99,
  //             },
  //           },
  //         ],
  //         // not needed if a shipping address is actually needed
  //         application_context: {
  //           shipping_preference: "NO_PREFERENCE",
  //         },
  //       })
  //       .then((orderID) => {
  //         setOrderID(orderID); // Update the state with the order ID
  //         return orderID;

  //       });
  //   };


      const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "iPhone 14 Pro Max",
                    amount: {
                        currency_code: "USD",
                        value: 499.99,
                    },
                },
              ],
              // application_context: {    
              //   shipping_preference: "NO_PREFERENCE",
              // },
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };


 
 // check Approval
 const onApprove = (data, actions) => {
   return actions.order.capture().then(function (details) {
     
     setSuccess(true);
    //  navigate('/success')
   });
 };
 //capture likely error
 const onError = (data, actions) => {
   setErrorMessage("An Error occured with your payment ");
 };

   return (
       <PayPalScriptProvider options={{ "client-id": credents}}>
           <PayPalButtons 
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
       </PayPalScriptProvider>
   );
}















// import { PayPalButtons } from "@paypal/react-paypal-js";
// function PayPalPay () {
//   const createOrder = (data) => {
//     // Order is created on the server and the order id is returned
//     return fetch("/api/create-paypal-order", {
//       method: "POST",
//        headers: {
//         "Content-Type": "application/json",
//       },
//       // use the "body" param to optionally pass additional order information
//       // like product skus and quantities
//       body: JSON.stringify({
//         product: {
//           description: "Wooden Candy Sofa",
//           cost: "389.00"
//         }
//       }),
//     })
//     .then((response) => response.json())
//     .then((order) => order.id);
//   };
//   const onApprove = (data) => {
//      // Order is captured on the server and the response is returned to the browser
//      return fetch("/api/capture-paypal-order", {
//       method: "POST",
//        headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         orderID: data.orderID
//       })
//     })
//     .then((response) => response.json());
//   };
//   return (
//     <div>
//       <div className='flex justify-between items-center w-full px-5 py-3 bg-yellow-400 mb-3'>
//          <div>
//            <p className='font-bold'>Moshino</p>
//          </div>
//          <div className='font-semibold flex gap-4'>
//            <p>login</p>
//            <p>Cart</p>
//          </div>
//        </div>
//       <PayPalButtons
//         createOrder={(data, actions) => createOrder(data, actions)}
//         onApprove={(data, actions) => onApprove(data, actions)}
//       />
//     </div>
//   );
// }
//  export default PayPalPay



// import React from 'react'
// import { PayPalButtons} from "@paypal/react-paypal-js"

// export default function PayPalPay() {
//   return (
//     <div className='App w-full h-full'>
//       <div className='flex justify-between items-center w-full px-5 py-3 bg-yellow-400 mb-3'>
//         <div>
//           <p className='font-bold'>Moshino</p>
//         </div>
//         <div className='font-semibold flex gap-4'>
//           <p>login</p>
//           <p>Cart</p>
//         </div>
//       </div>
//       <PayPalButtons/>
//     </div>
//   )
// }
