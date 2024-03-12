import { veiculos } from "../data/dados.js";

export const listarV = () => {
    return veiculos;
}

export const consultarPorIdV = (id) => {
    return veiculos.find(veiculo => veiculo.id === id);
}

export const consultarPorNomeV = (modelo) => {

    const searchLowerCase = modelo.toLowerCase();
    return veiculos.filter(veiculo => veiculo.modelo.toLowerCase().includes(searchLowerCase));
}

export const consultarPorMontadoraV = (montadora) => {
    return veiculos.filter(veiculo => veiculo.montadora === montadora);
}
