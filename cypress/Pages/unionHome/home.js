/// <reference types='cypress'/>

export class home{
    campoPesquisa = '[id="pesquisa"]';
    btnOK = '[]';
    segundoCampoPesquisa = '[class="select2-search__field"]';
    abrirSegundatelaPesquisa(){
        cy.get(this.campoPesquisa).click();
        
    }
    preencherCampoPesquisa(palavra){
        cy.get(this.segundoCampoPesquisa).type(palavra);
        cy.get(this.segundoCampoPesquisa).type('{enter}');  //comando de teclado exemplo: Enter, Delete e etc.
    }
}