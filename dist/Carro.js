"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo_1 = __importDefault(require("./Veiculo"));
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    // responsável por receber os parâmetros no momento de instanciação da classe
    function Carro(modelo, numeroDePortas) {
        var _this = _super.call(this) || this;
        // variavel private só pode ser acessada dentro da classe
        // não pode ser acessada diretamente pelo objeto
        _this.numeroDePortas = 4;
        _this.modelo = modelo;
        _this.numeroDePortas = numeroDePortas;
        return _this;
    }
    return Carro;
}(Veiculo_1.default));
exports.default = Carro;
