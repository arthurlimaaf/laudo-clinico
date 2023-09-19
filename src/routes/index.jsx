import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login"
import CadastroLaudo from "../pages/CadastroLaudo";
import ConsultaLaudo from "../pages/ConsultaLaudo";
import EditaLaudo from "../pages/EditaLaudo";
import ConsultaSemAlteracoes from "../pages/ConsultaSemAlteracoes";
import EditaSemAlteracoes from "../pages/EditaSemAlteracoes";
import CadastroSemAlteracoes from "../pages/CadastroSemAlteracoes";
// import Laudo from "../pages/Reports/Laudo";
import LaudoPDF from "../pages/LaudoPDF";

const Private = ({ Item }) => {
    const signed = true;

    return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route path="/home" element={<Private Item={Home} />} />
                <Route path="/cad-laudo" element={<Private Item={CadastroLaudo} />} />
                <Route path="/consult-laudo" element={<Private Item={ConsultaLaudo} />} />
                <Route path="/edit-laudo" element={<Private Item={EditaLaudo} />} />
                <Route path="/consult-sem-alteracoes" element={<Private Item={ConsultaSemAlteracoes} />} />
                <Route path="/edit-sem-alteracoes" element={<Private Item={EditaSemAlteracoes} />} />
                <Route path="/cad-sem-alteracoes" element={<Private Item={CadastroSemAlteracoes} />} />
                <Route path="/laudo-pdf" element={<Private Item={LaudoPDF} />} />

                <Route exact path="/" element={<Login />} />
                {/* <Route path="*" element={<Login />} /> */}
            </Routes>
        </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;