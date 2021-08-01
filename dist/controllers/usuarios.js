"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
var getUsuarios = function (req, res) {
    res.json({
        msg: 'getUsuarios'
    });
};
exports.getUsuarios = getUsuarios;
var getUsuario = function (req, res) {
    var id = req.params.id;
    res.json({
        msg: 'getUsuario',
        id: id
    });
};
exports.getUsuario = getUsuario;
var postUsuario = function (req, res) {
    var body = req.body;
    res.json({
        msg: 'postUsuario',
        body: body
    });
};
exports.postUsuario = postUsuario;
var putUsuario = function (req, res) {
    var id = req.params.id;
    var body = req.body;
    res.json({
        msg: 'putUsuario',
        body: body
    });
};
exports.putUsuario = putUsuario;
var deleteUsuario = function (req, res) {
    var id = req.params.id;
    res.json({
        msg: 'deleteUsuario',
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map