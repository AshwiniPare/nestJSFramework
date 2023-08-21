import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if(user) {
       if( user && user.password === password) {
        console.log("pwd matched");
            return user;
        }
    }
    return null;
}
}
