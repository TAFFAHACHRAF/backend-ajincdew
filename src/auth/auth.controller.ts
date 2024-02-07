import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Roles } from './roles.decorator';
import { User } from '../user/user.model';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
 
  @Post('login')
  async login(@Body() user: User) {
    return this.authService.login(user);
  }

  @Post('signup')
  async signUp(@Body() user: User) {
    return this.authService.signUp(user);
  }

  @UseGuards(LocalAuthGuard)
  @Roles('admin')
  @Get('data')
  async getData(){
    return ['data'];
  }
}