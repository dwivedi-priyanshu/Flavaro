import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path='/success' element={<ProtectedRoute element={<Success/>}/>}></Route>
       <Route path='/*' element={<Error/>}></Route>
    </Routes>
    </>
  );
}

export default App;
