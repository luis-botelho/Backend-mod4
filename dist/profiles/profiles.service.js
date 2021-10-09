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
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfilesService = class ProfilesService {
    constructor(prisma) {
        this.prisma = prisma;
        this._include = {
            games: {
                select: {
                    title: true,
                    cover: true,
                    description: true,
                    year: true,
                    trailer: true,
                    imdb: true,
                    gameplay: true,
                },
            },
        };
    }
    create(dto) {
        return this.prisma.profiles.create({ dto });
    }
    findAll() {
        return this.prisma.profiles.findMany({ include: { games: true } });
    }
    async findOne(id) {
        return this.prisma.profiles.findUnique({
            where: { id },
            include: { games: true },
            rejectOnNotFound: true,
        });
    }
    async update(id, data) {
        return this.prisma.profiles.update({ where: { id }, data });
    }
    async remove(id) {
        return this.prisma.profiles.delete({ where: { id } });
    }
};
ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfilesService);
exports.ProfilesService = ProfilesService;
//# sourceMappingURL=profiles.service.js.map