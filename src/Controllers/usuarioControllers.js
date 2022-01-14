export class UsuarioController {
    post(req, res, next) {
        res.status(201).send('Rota POST!');
    };

    put(req, res, next) {
        let id = req.params.id;
        res.status(201).send(`Rota PUT com ID! --> ${id}`);
    };

    deletar(req, res, next) {
        let id = req.params.id;
        res.status(200).send(`Rota DELETE com ID! --> ${id}`);
    };

    get(req, res, next) {
        res.status(200).send('Rota GET!');
    };

    getById(req, res, next) {
        let id = req.params.id;
        res.status(200).send(`Rota GET com ID! ${id}`);
    }
}

