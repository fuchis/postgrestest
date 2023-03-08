import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { Song } from './entities/song.entity';

@Injectable()
export class SongService {

  constructor(
    @InjectRepository(Song) private songRepository: Repository<Song>,
  ) {
  }
  
  async create(song: Song): Promise<Song> {
    return await this.songRepository.save(song);
  }

  async findAll(): Promise<Song[]> {
    return await this.songRepository.find();
  }

  async findOne(id: number): Promise<Song> {
    return await this.songRepository.findOne({where: {id}})
  }

  async remove(id: number): Promise<void> {
    await this.songRepository.delete(id);
  }
  
}
