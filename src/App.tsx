
import _NavBar from "./components/Navbar";
import './App.css';
import {ReactComponent as _GitHubIcon} from './img/github.svg';
import  _Listing from "./pages/Listing";

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  import Listing from 'pages/Listing';
  import Form from 'pages/Form';
  import Navbar from "components/Navbar";

function App() {
  return (
    <><body>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Listing />} />
                  <Route path="/form">
                      <Route path=":movieId" element={<Form />} />
                  </Route>
              </Routes>
          </BrowserRouter></body></>
  );
}

export default App;
