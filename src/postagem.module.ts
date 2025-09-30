import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaModule } from './tema/tema.module';
import { PostagemController } from './postagem/controllers/postagem.controller';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemService } from './postagem/services/postagem.service';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
  providers: [PostagemService],
  controllers: [PostagemController],
  exports: [],
})
export class PostagemModule {}
