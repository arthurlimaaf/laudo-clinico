import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login"
import CadastroLaudo from "../pages/CadastroLaudo";
import EditaLaudo from "../pages/EditaLaudo";
import EditaSemAlteracoes from "../pages/EditaSemAlteracoes";
import CadastroSemAlteracoes from "../pages/CadastroSemAlteracoes";
import LaudoPDFSemAlteracoes from "../pages/LaudoPDFSemAlteracoes";
import LaudoPDF from "../pages/LaudoPDF";
import Teste from "../pages/Teste";

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
                <Route path="/edit-laudo" element={<Private Item={EditaLaudo} />} />
                <Route path="/edit-sem-alteracoes" element={<Private Item={EditaSemAlteracoes} />} />
                <Route path="/cad-sem-alteracoes" element={<Private Item={CadastroSemAlteracoes} />} />
                <Route path="/laudo-pdf" element={<Private Item={LaudoPDF} />} />
                <Route path="/laudo-pdf-sem-alteracoes" element={<Private Item={LaudoPDFSemAlteracoes} />} />
                <Route path="/teste" element={<Private Item={Teste} />} />

                <Route exact path="/" element={<Login />} />
                {/* <Route path="*" element={<Login />} /> */}
            </Routes>
        </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;