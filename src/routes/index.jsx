import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login"
import CadastroLaudo from "../pages/CadastroLaudo";
import ConsultaLaudo from "../pages/ConsultaLaudo";
import EditaLaudo from "../pages/EditaLaudo";

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
                <Route exact path="/consult-laudo" element={<Private Item={ConsultaLaudo} />} />
                <Route exact path="/edit-laudo" element={<Private Item={EditaLaudo} />} />
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Login />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;