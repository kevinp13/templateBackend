import { User } from './models/user.models';
import { UsersRepository } from './repository';

export class UsersUsecase {
    constructor(private usersRepository: UsersRepository) {}

    async getAllUsers(): Promise<User[]> {
        const users = await this.usersRepository.getAll();
        console.log('trayendo todos los usuarios', users);
        return users;
    }

    async getUserData(id: string): Promise<User> {
        const user = await this.usersRepository.getById(id);
        console.log('User:', user);
        return user;
    }
}
