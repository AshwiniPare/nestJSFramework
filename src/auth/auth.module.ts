import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { Passport } from 'passport';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './localStrategy';

@Module({
    controllers: [AuthController],
    imports: [UserModule, PassportModule],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
