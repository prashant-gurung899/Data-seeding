import { Module } from '@nestjs/common';
import { Global } from '@nestjs/common/decorators';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
