import express from 'express';
import { listarM, consultarPorIdM, consultarPorNomeM } from './service/montadoras.js';
import { listarV, consultarPorIdV, consultarPorNomeV, consultarPorMontadoraV, consultarPorPaNomeV } from './service/veiculos.js';

const app = express();

app.get('/montadoras', (req, res) => {
    let nome = req.query.nome;
    if (nome) {
        res.status(200).json(consultarPorNomeM(nome));
    } else {
        res.status(200).json(listarM());
    }
});

app.get('/montadoras/:id', (req, res) => {
    let id = req.params.id;
    let resultConsulta = consultarPorIdM(id);
    if (resultConsulta) {
        res.status(200).json(resultConsulta);
    } else {
        res.status(404).json({ "erro": "recurso não encontrado" });
    }
});

app.get('/veiculos', (req, res) => {
    let nome = req.query.modelo;
    if (nome) {
        res.status(200).json(consultarPorNomeV(modelo));
    } else {
        res.status(200).json(listarV());
    }
});

app.get('/veiculos/:id', (req, res) => {
    let id = req.params.id;
    let resultConsulta = consultarPorIdV(id);
    if (resultConsulta) {
        res.status(200).json(resultConsulta);
    } else {
        res.status(404).json({ "erro": "recurso não encontrado" });
    }
});

app.get('/veiculos/montadora/:id', (req, res) => {
    let idMontadora = req.params.id;
    let veiculosMontadora = consultarPorMontadoraV(idMontadora);
    if (veiculosMontadora.length > 0) {
        res.status(200).json(veiculosMontadora);
    } else {
        res.status(404).json({ "erro": "nenhum veículo encontrado para essa montadora" });
    }
});

app.get('/veiculo', (req, res) => {
    let searchTerm = req.query.search;
    if (searchTerm) {
        const result = consultarPorPaNomeV(searchTerm);
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ "erro": "Nenhum veículo encontrado para a busca fornecida" });
        }
    } else {
        res.status(400).json({ "erro": "Por favor, forneça um termo de busca válido" });
    }
});

app.listen(80);