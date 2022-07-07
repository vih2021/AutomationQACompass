let faker = require('faker-br');

export default class FACTORY {

    static cpf(){
        let cpf  =  faker.br.cpf()
        return cpf
    }

    static telefone(){
        let faker = require('faker-br');
        faker.phoneNumber()
    }
}