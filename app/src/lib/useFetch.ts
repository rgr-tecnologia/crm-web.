export const get = <T>(url: string): Promise<T> => {
  return fetch(url).then((response) => response.json());
};

export const post = <T>(url: string, data: T): Promise<T> => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const put = <T>(url: string, data: T): Promise<T> => {
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const remove = (url: string): Promise<void> => {
  return fetch(url, {
    method: "DELETE",
  }).then((response) => response.json());
};
