export const apiPath = {
    cookie: {
      ID_KEY:'auth-token',
      USERNAME_KEY: 'username',
      Refresh_Token: 'refresh',
      CART: 'cart',
      USER: 'user',
      isVerify: 'isVerify'
    },
    auth: {
      login: 'api/auth/login',
      refreshToken: 'api/auth/refreshToken',
      changePassword: 'api/auth/changePassword',
      register: 'api/auth/register',
    },
    posts: {
      posts: 'api/posts',
      postsByUserFollow: 'api/posts/users/user-follow',
      postsBySeries: 'api/posts/series',
    },
    upload: {
      upload: 'api/dms/upload',
    }
  }
  