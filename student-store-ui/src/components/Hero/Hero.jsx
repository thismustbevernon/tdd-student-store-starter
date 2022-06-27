import * as React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="heroItems">
        <div className="intro">
          Welcome!
          <h1 className="merch">Find your merch!</h1>
          <h2 className="intromsg">
            We have all kinds of goodies. Click on any of the items to start
            filling your shopping cart
          </h2>
        </div>
        <img className="hero-img" src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"/>
      </div>
    </div>
  );
}














// import * as React from "react";
// import "./Hero.css";

// export default function Hero() {
//   return (
//     <div id="bigger-container">
//       <div id="welcome" className="hero">
//         <div id="texts" className="intro">
//           <div>
//             {" "}
//             <h1> Welcome!</h1>
//             <div>
//               {" "}
//               <h1> Find Your Merch</h1>{" "}
//             </div>
//             <div>
//               <p>
//                 We have all kinds of goodies. Click on any of the items to start
//                 filling up your shopping cart. Checkout whenever you're ready
//               </p>
//             </div>
//           </div>
//         </div>

//         <img className="hero-img"
//           id="image"
//           src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
//         />
//       </div>
//     </div>
//   );
// }
