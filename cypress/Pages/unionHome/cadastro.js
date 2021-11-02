/// <reference types='cypress'/>

export class cadastro{
    menuCadastro = '[class="link-menu"]';
    campoNome = '[id="nome2"]';
    campoEmail = '[id="email"]';
    campoSenha = '[id="password"]';
    camporSenha = '[id="rpassword"]';
    btnRegistrar = '[id="btn-enviar"]';
       
    
    // abrirMenuCadastro(){
    //     cy.get(this.menuCadastro).click();
        
    // }
    
    

    preencherCadastro(text,email,password,rpassword){
        cy.get(this.campoNome).type(text);
        cy.get(this.campoEmail).type(email); 
        cy.get(this.campoSenha).type(password);
        cy.get(this.camporSenha).type(rpassword);
        cy.get(this.btnRegistrar).click();
        
    }

    validarCamposObrigatorio(){
        cy.get(this.btnRegistrar).click();
        cy.contains('Por favor, informe seu usuário.')
        cy.contains('Por favor, informe o E-mail.'); 
        cy.contains('Por favor, informe a Senha.'); 
        cy.contains('Por favor, informe a repetição de senha.');
               
    }
       
}