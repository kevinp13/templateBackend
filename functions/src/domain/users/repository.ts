import { User } from './models/user.models';

export interface UsersRepository {
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User>;
    create(user: User): boolean;
    update(id: string, user: User): User;
    delete(id: string): boolean;
}
