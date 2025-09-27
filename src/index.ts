import Pessoa from "./entities/Pessoa.js";

const pessoa: Pessoa = new Pessoa("Leonardo");
console.log(pessoa.getNome());
pessoa.setNome("Miguel");
console.log(pessoa.getNome());
