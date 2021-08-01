"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var usuario_1 = __importDefault(require("../routes/usuario"));
var cors_1 = __importDefault(require("cors"));
var Server = /** @class */ (function () {
    function Server() {
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        //initial conf
        this.middleware();
        this.routes();
    }
    Server.prototype.middleware = function () {
        //CORS
        this.app.use(cors_1.default());
        //body json parse
        this.app.use(express_1.default.json());
        //static folder 
        this.app.use(express_1.default.static('public'));
    };
    Server.prototype.routes = function () {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server running || port: " + _this.port);
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map