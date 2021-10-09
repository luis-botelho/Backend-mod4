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
exports.CreateProfileDto = void 0;
const class_validator_1 = require("class-validator");
const profile_entity_1 = require("../entities/profile.entity");
const create_game_dto_1 = require("../../games/dto/create-game.dto");
const class_transformer_1 = require("class-transformer");
class CreateProfileDto extends profile_entity_1.Profile {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'The title must be string type.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'The title must not be empty.' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'The image must be a string type.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'The image must not be empty.' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_game_dto_1.CreateGameDto),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "games", void 0);
exports.CreateProfileDto = CreateProfileDto;
//# sourceMappingURL=create-profile.dto.js.map