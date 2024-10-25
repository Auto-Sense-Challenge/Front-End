export type TipoMecanico = {

    id: number;
    nome:string;
    email: string;
    senha: string;
    telefone: number;
    endereco:string;
    linkInsta: string;
    descricao:string;
}

export type TipoUsuario = {

    id:number;
    cpf:number;
    nome: string;
    email: string;
    dtNasc: Date;
    senha:string;
}