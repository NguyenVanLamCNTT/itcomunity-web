import {classToPlain, deserialize, Expose, serialize} from 'class-transformer';

export class Token {
  @Expose({name: 'accessToken'})
  accessToken!: String;

  @Expose({name: 'refreshToken'})
  refreshToken!: String;

  @Expose({name: 'isConfirmEmail'})
  isConfirmEmail!: Boolean;

  @Expose({name: 'isAdmin'})
  isAdmin!: Boolean;

  @Expose({name: 'lastLogin'})
  lastLogin!: Date;

  static fromJson(iohToken: any): Token {
    return deserialize(Token, iohToken);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}
