const str = JSON.stringify;
export default {
    has: (obj) => !!localStorage.getItem(str(obj)),
    get: (obj) => JSON.parse(localStorage.getItem(str(obj)) || ''),
    set: (obj, data) => localStorage.setItem(str(obj), str(data))
};
