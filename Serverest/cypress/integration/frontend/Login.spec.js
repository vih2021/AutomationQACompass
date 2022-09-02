import Testes from '../../pages/login.page'

describe("Realizar cadastro", () => {
    it(" Deve realizar o cadastro com sucesso", () => { 
        Testes.acessarSite()
        Testes.realizarLogin()
    
    })
})