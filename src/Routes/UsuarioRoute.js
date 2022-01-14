import { UsuarioController } from '../Controllers/usuarioControllers.js'

export default function (app) {
    const usuarioControlador = new UsuarioController()

    app.post('/usuario', usuarioControlador.post);
    app.put('/usuario/:id', usuarioControlador.put);
    app.delete('/usuario/:id', usuarioControlador.deletar);
    app.get('/usuarios', usuarioControlador.get);
    app.get('/usuario/:id', usuarioControlador.getById);
}