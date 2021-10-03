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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGameDto = void 0;
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const game_entity_1 = require("../entities/game.entity");
class CreateGameDto extends game_entity_1.Game {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'The title must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'The title must not be empty' }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'The cover must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'The cover must not be empty' }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "cover", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'The description must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'The description must not be empty' }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'The year must be an integer' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'The year must not be empty' }),
    __metadata("design:type", Number)
], CreateGameDto.prototype, "year", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'The IMDB must not be empty' }),
    __metadata("design:type", Number)
], CreateGameDto.prototype, "imdb", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'The trailer link must to be a string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateGameDto.prototype, "trailer", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'The game player must be a string' }),
    (0, class_validator_1.IsOptional)({ message: 'The game player must not be empty' }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "gameplay", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateGameDto.prototype, "users", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateGameDto.prototype, "genres", void 0);
exports.CreateGameDto = CreateGameDto;
//# sourceMappingURL=create-game.dto.js.map