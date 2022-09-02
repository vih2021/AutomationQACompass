/// <reference types="cypress" />

import Ajv from 'ajv'
const ajv = new Ajv({allErrors: true, verbose:true, strict:false})

Cypress.Commands.add('validarContrato',(res, schema, status) => {
    cy.fixture(`schema/${schema}/${status}.json`).then(schema => {
        const validate = ajv.compile(schema)
        const valid = validate(res.body)
        if(!valid){
            let error = ""
            for(let each in validate.errors){
                let err = validate.errors[each]
                error += `\n${err.instancePath} + ${err.message} , but receive ${typeof err.data}`
            }
            throw new Error("Contrato Inválido, favor verificar" + error)
        }
        return "Contrato Validado"
    })
})

Cypress.Commands.add('realizarLogin', (info) =>{
    cy.request({
        method: 'POST',
        url: `${Cypress.env('BASE_URL_BACK')}/login`,
        failOnStatusCode: true,
        body: info
    })
})