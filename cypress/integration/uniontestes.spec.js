/// <reference types='cypress'/>

import { home } from "../Pages/unionHome/home";
import { cadastro } from "../Pages/unionHome/cadastro";

// const hom = new home();
// describe('Testes voltados para tela home da Union.',()=>{
//     it('Testes voltados para Home Union.',() =>{
//         cy.visit("https://unionmangas.top/home");
//         hom.abrirSegundatelaPesquisa();
//         hom.preencherCampoPesquisa('Black');
//         cy.wait(8000);
//         cy.contains('Black Bird').click();
//         //cy.contains('Black Bird').click({force:true, multiple:true}).eq(23);  //click forçado em situações que o framework apresente que o elemento não está visivél
//         //Multiple -> é para situações que tibver mais de um botão que faz mesma ação na página para garantir que o teste faça validação na página + eq para informar o numero.

//     })
// })

const cad = new cadastro();
describe('Testes voltados para tela cadastro da Union.',()=>{
    // it('Testes voltados para cadastro Union.',() =>{
    //     cy.visit("https://unionmangas.top/registro");
    //     cad.preencherCadastro("paty","patysonar@gmail.com", "123456", "123456");
    //     cy.wait(8000);
       
    // })
    it('Testes voltados para validar campos obrigatorio no cadastro Union.',() =>{
        cy.visit("https://unionmangas.top/registro");
        cad.validarCamposObrigatorio();
       
       
    })
})