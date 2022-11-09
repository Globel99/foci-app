const str = JSON.stringify;

export default {
  has: (obj: Object) => !!localStorage.getItem(str(obj)),
  get: (obj: Object) => JSON.parse(localStorage.getItem(str(obj)) || ''),
  set: (obj: Object, data: Object) => localStorage.setItem(str(obj), str(data))
};
