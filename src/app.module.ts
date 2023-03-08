import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SongModule } from './song/song.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    url: '',
    autoLoadEntities: true,
    synchronize: false,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false
      }
    },
    logging: true

  }),
  SongModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
