const storagePrefix = "rs_boilerplate_";

const storage = {
  getToken: () => {
    return JSON.parse(localStorage.getItem(`${storagePrefix}token`) as string);
  },
  setToken: (token: string) => {
    localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    localStorage.removeItem(`${storagePrefix}token`);
  },
};

export default storage;
