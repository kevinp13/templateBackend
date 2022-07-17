
import { User } from '../../../domain/users/models/user.models';
import { UsersRepository } from '../../../domain/users/repository';
import { getAllDocumentsCollection, getDocument } from '../helpers/firestore';

export class Users implements UsersRepository {
    getAll(): Promise<User[]> {
        return getAllDocumentsCollection('users');
    }
    async getById(id: string) {
        return getDocument<User>('users', id);
    }
    create(user: User): boolean {
        throw new Error('Method not implemented.');
    }
    update(id: string, user: User): User {
        throw new Error('Method not implemented.');
    }
    delete(id: string): boolean {
        throw new Error('Method not implemented.');
    }
}
