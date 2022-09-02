describe("Realizar Login", () => {
    it("Deve realizar o login", () => {
        cy.fixture('info').then(info => {
            cy.realizarLogin(info).then(resp => {
                expect(resp.body).to.have.property("message")
                expect(resp.body).to.have.property("authorization")
                console.log(cy.validarContrato(resp, 'POST', '200'))
            })
        })
    })
})