import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-diretiva';

  textoBotao = "Esconder";
  esconder = false;

  pessoas = [
    { nome: "José", idade: 18, cidade: "Santo Andre", estado: "São Paulo" },
    { nome: "Maria", idade: 22, cidade: "Santos", estado: "São Paulo" },
    { nome: "Elcio", idade: 51, cidade: "São Bernardo", estado: "São Paulo" },
    { nome: "Murillo", idade: 23, cidade: "São Caetano do sul", estado: "São Paulo" },
    { nome: "Danilo", idade: 22, cidade: "Rio de Janeiro", estado: "Rio de Janeiro" }
    ];

  alterarExibicao() {
  this.textoBotao = this.esconder ? "Esconder" : "Exibir";
  this.esconder = !this.esconder;
  }

  pegarCor(idade){
    return idade >= 40 ? "red": "blue"
  }
}
