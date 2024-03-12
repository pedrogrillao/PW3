import { montadoras } from "../data/dados.js";

export const listarM = () => {
    return montadoras;
}

export const consultarPorIdM = (id) => {
    return montadoras.find(montadora => montadora.id == id);
}

export const consultarPorNomeM = (nome) => {
    return montadoras.filter(montadora => montadora.nome.toLowerCase().includes(nome.toLowerCase()))
}