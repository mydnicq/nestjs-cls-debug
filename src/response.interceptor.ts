import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { AsyncCtx } from './app.module';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private readonly asyncCtx: AsyncCtx) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe();
  }
}
