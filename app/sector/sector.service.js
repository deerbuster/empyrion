"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var SectorService = (function () {
    function SectorService(http) {
        this.http = http;
        this.serviceUrl = '/Sectors.yaml';
    }
    Object.defineProperty(SectorService.prototype, "sectorFileName", {
        get: function () {
            return this.serviceUrl;
        },
        set: function (newValue) {
            this.serviceUrl = newValue;
        },
        enumerable: true,
        configurable: true
    });
    SectorService.prototype.getSectors = function () {
        return this.http.get(this.serviceUrl)
            .do(function (data) { return console.log(data); });
    };
    SectorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SectorService);
    return SectorService;
}());
exports.SectorService = SectorService;
//# sourceMappingURL=sector.service.js.map