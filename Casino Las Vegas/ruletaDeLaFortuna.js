"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.RuletaDeLaFortuna = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var RuletaDeLaFortuna = /** @class */ (function (_super) {
    __extends(RuletaDeLaFortuna, _super);
    function RuletaDeLaFortuna() {
        var _this = _super.call(this) || this;
        _this.valorApuesta = 300;
        _this.tematica = "Ruleta de la Fortuna";
        _this.probabilidad = 3;
        return _this;
    }
    return RuletaDeLaFortuna;
}(Tragamonedas_1.Tragamonedas));
exports.RuletaDeLaFortuna = RuletaDeLaFortuna;
