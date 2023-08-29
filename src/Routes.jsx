import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login/Login";

const Routes = () => {

    return (
        <BrowserRouter>
            {/* <Switch> */}
                <Route component={Login} path="/" exact />
                {/* <Route component={Alunos} path="/cadastro-aluno" />
                <Route component={Docentes} path="/cadastro-docente" />
                <Route component={Index} path="/index" />  
                <Route component={Docentes2} path="/consulta-docente" />
                <Route component={Alunos2} path="/consulta-aluno" />
                <Route component={Escola2} path="/consulta-escola" />
                <Route component={Turma2} path="/consulta-turma" />
                <Route component={EsolaCad} path="/cadastro-escola" />
                <Route component={Turma1} path="/cadastro-turma" /> */}
            {/* </Switch>  */}
        </BrowserRouter>
    )
}

export default Routes;
