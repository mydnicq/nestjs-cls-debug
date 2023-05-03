import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClsModule, InjectableProxy } from 'nestjs-cls';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './response.interceptor';

@InjectableProxy()
export class AsyncCtx {
  beforeRender: any[];
}

@Module({
  imports: [
    ClsModule.forRoot({
      global: true,
      interceptor: {
        mount: true,
      },
      proxyProviders: [AsyncCtx],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
