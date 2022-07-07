import Cadastro from "../pages/cadastro.page";

describe("Realizar cadastro", () => {
    it(" Deve realizar o cadastro com sucesso", () => { 
        Cadastro.acessarPagina()
        Cadastro.realizarCadastro()
    })

})