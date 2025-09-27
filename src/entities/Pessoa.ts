export default class Pessoa {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(novoNome: string): void {
        this.nome = novoNome;
    }
}
