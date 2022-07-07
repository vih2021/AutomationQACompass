import { CADASTRO } from './components/cadastro.elements'
import Base from './_base.page '
import FACTORY2 from '../dynamics/factory2'
import FACTORY from '../dynamics/factory'

let telefone = 11987654321
let email =  FACTORY2.email()
let senha = "senhaAlatoria123456"
let nome = FACTORY2.nome()
let cpf = FACTORY.cpf()
let data = FACTORY2.dataNascimento()

export default class Cadastro extends Base{

    static acessarPagina(){
        cy.visit(`${Cypress.env('BASE_URL')}`)
    }

    static realizarCadastro(){

        super.clickOnElement(CADASTRO.Btn_cadastro)
        cy.wait(5000)
        super.typeValue(CADASTRO.input_name, nome)
        super.typeValue(CADASTRO.input_cpf, cpf)
        super.typeValue(CADASTRO.input_data, data)
        super.typeValue(CADASTRO.input_telefone, telefone)
        super.typeValue(CADASTRO.input_email, email)
        super.typeValue(CADASTRO.input_email2, email)
        super.typeValue(CADASTRO.input_senha, senha)
        super.typeValue(CADASTRO.input_senha2, senha)
        cy.writeFile('info_cadastro.json', {name: nome, cpf: cpf, dataNascimento: data, phone : telefone, email: email, senha: senha })
        super.clickOnElement(CADASTRO.avancar_btn)
        super.validarUrl('https://701523.commercesuite.com.br/nocache/info.php?loja=701523')
    }
}