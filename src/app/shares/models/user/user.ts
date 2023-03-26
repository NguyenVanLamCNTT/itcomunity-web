import { classToPlain, deserialize, Expose, serialize } from 'class-transformer';

export class User {
    id?: Number;

    @Expose({ name: 'fullname' })
    fullname?: String;

    @Expose({ name: 'email' })
    email?: String;

    @Expose({ name: 'password' })
    password?: String;

    @Expose({ name: 'username' })
    username?: String;

    @Expose({ name: 'gender' })
    gender?: String;

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

    avatar?: String;
    fullName?: String;
    about?: String;

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
