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
      sendOTP: 'api/auth/send-otp',
      verifyOTP: 'api/auth/validate-otp',
    },
    posts: {
      posts: 'api/posts',
      postsByUserFollow: 'api/posts/users/user-follow',
      postsBySeries: 'api/posts/series',
      view: 'api/posts/view',
    },
    upload: {
      upload: 'api/dms/upload',
    },
    user: {
      allUser: 'api/users',
      getMe: 'api/users/me/info',
      byUsername: 'api/users/user',
    },
    series: {
      series: 'api/series',
    },
    topic: {
      topic: 'api/topics',
      addTopic: 'api/topics/add-topic-to-user',
    },
    comment: {
      comment: 'api/comments',
    },
    qa: {
      question: 'api/questions',
      answer: 'api/questions/answers',
    }
  }
  