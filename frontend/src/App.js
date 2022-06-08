import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";

import AddProduct from "./component/AddProduct";
import EditProduct from "./component/EditProduct";
import ProductList from "./component/ProductList";


function App() {
  
  
  return (
   
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter"> 
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<ProductList/>} />
                <Route path='/add' element={<AddProduct/>} />
                <Route path="/edit/:id" element={<EditProduct/>}/>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    
  );
}

export default App;
