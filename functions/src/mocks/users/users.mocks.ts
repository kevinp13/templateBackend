import { User } from '../../domain/users/models/user.models';

export const userMock: User = {
    id: 1,
    name: 'pepito',
    email: 'pepe@gmail.com',
    state: true,
    password: 'jhDbg.yg43r67yb2',
};

export const usersMock: User[] = [
    userMock,
    {
        id: 2,
        name: 'valeria',
        email: 'vale@gmaicl',
        state: true,
        password: 'fff',
    },
];
