export type TipoMecanico = {

    id: number;
    telefone: number;
    nome:string;
    endereco:string;
    avaliacao:number;
}

export type TipoUsuario = {

    id:number;
    email: string;
    nome: string;
    cpf:number;
    dtNasc: Date;
    senha:string
}