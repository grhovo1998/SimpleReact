// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';

import { BrowserRouter, Router } from "react-router-dom";
import Route2 from "./Route2";

// import { routes } from './Routes';


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {
//           routes.map(({path, element}) => (
//             <Route key={path} path={path} element={element} />
//             ))
//         }
//         {/* <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/product/:id" element={<Product />} />
//         <Route path="*" element={<>Not found</>} /> */}
//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;


function App() {
  return (
    <BrowserRouter>
        <Route2 />
    </BrowserRouter>
 
  );
}

export default App;
