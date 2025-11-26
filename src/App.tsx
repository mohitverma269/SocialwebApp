

// import React from "react";

// function App() {
//   return (
//     <div className="flex flex-wrap w-full min-h-screen">
//       {/* Left Section - Image */}
//       <div className="flex flex-1 min-h-[300px] justify-center items-center hidden xs:flex">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
//           alt="Hero"
//           className="w-2/5 max-w-[500px] object-cover"
//         />
//       </div>

//       {/* Right Section - Login Card */}
//       <div className="flex flex-1 justify-center items-center p-5">
//         <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">

//           <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
//             Login to Your Account
//           </h2>

//           {/* Email */}
//           <div className="mb-5">
//             <label htmlFor="email" className="block mb-1 text-gray-600">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="you@example.com"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-3">
//             <label htmlFor="password" className="block mb-1 text-gray-600">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="••••••••"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
//             />
//           </div>

//           {/* Forgot Password */}
//           <div className="text-right mb-5">
//             <a
//               href="#"
//               className="text-green-600 hover:text-green-800 text-sm font-medium"
//             >
//               Forgot Password?
//             </a>
//           </div>

//           {/* Login Button */}
//           <button
//             className="w-full py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all duration-300"
//           >
//             Login
//           </button>

//           {/* Sign Up Link */}
//           <p className="text-center text-sm text-gray-600 mt-6">
//             Don’t have an account?{" "}
//             <a
//               href="#"
//               className="text-green-600 hover:text-green-800 font-semibold"
//             >
//               Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <AppRoutes />
    </div>
  );
}

export default App;
