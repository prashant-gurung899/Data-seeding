import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService){}
 
  findAll() {
    return this.prismaService.user.findMany()
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({where: {id: id}})
  }

}
