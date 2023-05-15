import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NODE_ENV } from 'src/shared/constants/env';

@Module({
  /* в метод инициализации следует
      передать инстанс сервера NEXT.js */
  imports: [
    RenderModule.forRootAsync(Next({ dev: NODE_ENV === 'development' }), {
      viewsDir: null,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
