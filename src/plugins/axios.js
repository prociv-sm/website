export default function({ $axios, redirect, store }) {

  let failedQueue = [];

  const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });

    failedQueue = [];
  };

  $axios.onError(error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return new Promise(function (resolve, reject) {
        store.dispatch("auth/refresh").then(() => {
          resolve($axios(originalRequest));
        }).catch((err) => {
          processQueue(err, null);
          store.dispatch("user/logout");
          redirect('/');
          reject(error);
        })
      })
    }

    return Promise.reject(error);
  });
}


