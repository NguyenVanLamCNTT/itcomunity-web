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
      refreshToken: 'api/auth/refresh-token',
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
      bookmark: 'api/posts/bookmark',
      getBookmarks: 'api/posts/bookmark/user',
      trending: 'api/posts/trending/top',
    },
    upload: {
      upload: 'api/dms/upload',
    },
    user: {
      allUser: 'api/users',
      getMe: 'api/users/me/info',
      byUsername: 'api/users/user',
      follow: 'api/users/user/follow',
    },
    series: {
      series: 'api/series',
      bookmark: 'api/series/bookmark',
      getBookmarks: 'api/series/bookmark/user',
    },
    topic: {
      topic: 'api/topics',
      addTopic: 'api/topics/add-topic-to-user',
      removeTopic: 'api/topics/remove-topic-to-user',
    },
    comment: {
      comment: 'api/comments',
    },
    qa: {
      question: 'api/questions',
      answer: 'api/questions/answers',
    }
  }
  