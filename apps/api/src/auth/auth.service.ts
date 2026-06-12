import { ConflictException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { UserService } from "../user/user.service";
import { User } from "../../generated/prisma/client";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async registerUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userService.findByEmail(createUserDto.email);

    if (user) throw new ConflictException("User already exists");
    return this.userService.create(createUserDto);
  }
}
