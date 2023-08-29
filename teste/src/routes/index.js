import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin"
import Scanner from "../pages/scaner"

const Private = ({ Item }) => {
    const signed = true;

    return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/home" element={<Private Item={Home} />} />
                <Route exact path="/scanner" element={<Private Item={Scanner} />} />
                <Route path="/" element={<Signin />} />
                <Route path="*" element={<Signin />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;