import Base from './_base.page '
import {INFO} from '../fixtures/info_login'
import {LOGIN} from './components/login.elements'

export default class Testes extends Base{

    static acessarSite(){
        cy.visit(`${Cypress.env('BASE_URL')}`)
    }
    
    static realizarLogin(){
        super.typeValue(LOGIN.campo_email, INFO.email)
        super.typeValue(LOGIN.campo_senha, INFO.senha)
        super.clickOnElement(LOGIN.btn_login)
                
    }
}

