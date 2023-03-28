import { classToPlain, deserialize, Expose, serialize } from 'class-transformer';

export class User {
    id?: Number;

    @Expose({ name: 'fullname' })
    fullname?: string;

    @Expose({ name: 'email' })
    email?: string;

    @Expose({ name: 'password' })
    password?: string;

    @Expose({ name: 'username' })
    username?: string;

    @Expose({ name: 'gender' })
    gender?: string;

    @Expose({ name: 'age' })
    age?: Number;

    @Expose({ name: 'last_login' })
    lastLogin?: Date;

    @Expose({ name: 'followers_number' })
    followersNumber?: Number;

    @Expose({ name: 'posts_number' })
    postsNumber?: Number;

    @Expose({ name: 'likes_number' })
    likesNumber?: Number;

    @Expose({ name: 'is_admin' })
    isAdmin?: Boolean;

    @Expose({ name: 'confirm_email' })
    confirmEmail?: Boolean;

    avatar?: string;
    fullName?: string;
    about?: string;

    static fromJson(user: any): User {
        return deserialize(User, user);
    }

    serialize(): string {
        return serialize(this);
    }

    toPlain(): any {
        return classToPlain(this);
    }
}
