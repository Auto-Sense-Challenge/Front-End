export type TipoMecanico = {

    id: number;
    telefone: number; 
    nome: string; 
    senha: string; 
    descricao: string; // N OBRIGATORIO
    email: string; 
    linkInsta: string; // N OBRIGATORIO
    endereco: TipoEndereco; 
}

export type TipoEndereco = {

    cep: number; 
    numero: number;
    complemento: string; // N obrigatorio
}

export type TipoUsuario = {

    id:number;
    email: string; 
    nome: string; 
    cpf: number; 
    dtNasc: string; // N obrigatorio
    senha:string; 
    telefone: number; 

}

export type TipoVeiculo = {

    id: number; 
    placar: string;
    cor: string;
    modelo: string;
    ano: number;
}

export type TipoComentario = {

    id:number;
    comentario: string; // N Obrigatorio
    qualidade: string;
}