const low = (/** @type {string} */ word) => word?.toLowerCase();

export default {
  isMatch: (searchValue, /** @type {string[]} */ values) => values.find(v => low(v)?.startsWith(low(searchValue)))
};
