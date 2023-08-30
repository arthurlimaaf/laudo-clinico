import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login"
import CadastroLaudo from "../pages/CadastroLaudo";
// import Scanner from "../pages/scaner"

const Private = ({ Item }) => {
    const signed = true;

    return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/home" element={<Private Item={Home} />} />
                <Route exact path="/cad-laudo" element={<Private Item={CadastroLaudo} />} />
                {/* <Route exact path="/scanner" element={<Private Item={Scanner} />} /> */}
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Login />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;