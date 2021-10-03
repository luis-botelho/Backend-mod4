import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  private readonly notFound = (id) =>{
    throw new HttpException(`The genre '${id}' does not exist`, 404);
  }

  @Post()
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genresService.create(createGenreDto);
  }

  @Get()
  findAll() {
    return this.genresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genresService.findOne(+id).catch((e) => this.notFound(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genresService
      .update(+id, updateGenreDto)
      .catch((e) => this.notFound(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genresService.remove(+id).catch((e) => this.notFound(id));
  }
}
