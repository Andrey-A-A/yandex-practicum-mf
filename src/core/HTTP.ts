// const METHODS = {
//   GET: 'GET',
//   POST: 'POST',
//   PUT: 'PUT',
//   DELETE: 'DELETE',
// };

enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE' 
};

type Options = {
  method: METHOD;
  data?: any;
  //data?: Record<string, unknown> | string;
  timeout?: number;
  headers?: Record<string, string>
};

// type OptionsWithoutMethod = Omit<Options, 'method'>;

// Самая простая версия. Реализовать штучку со всеми проверками им предстоит в конце спринта
// Необязательный метод
function queryStringify(data: Record<string, unknown> | string) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  // Здесь достаточно и [object Object] для объекта
  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

export class HTTP {
  get = (url:string, options = {}) => {
    return this.request(url, { ...options, method: METHOD.GET });
  };

  post = (url:string, options = {}) => {
    return this.request(url, { ...options, method: METHOD.POST });
  };

  put = (url:string, options = {}) => {
    return this.request(url, { ...options, method: METHOD.PUT });
  };

  delete = (url:string, options = {}) => {
    return this.request(url, { ...options, method: METHOD.DELETE });
  };

  request = (url:string, options: Options = {method: METHOD.GET}, timeout: Options["timeout"] = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHOD.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
