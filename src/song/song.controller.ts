import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { SongService } from './song.service';
import { Song } from './entities/song.entity';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {
  }

  @Post()
  async create(@Body() song: Song): Promise<Song> {
    return await this.songService.create(song);
  }

  @Get()
  async findAll(): Promise<Song[]> {
    return await this.songService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Song> {
    return await this.songService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.songService.remove(id);
  }
}
