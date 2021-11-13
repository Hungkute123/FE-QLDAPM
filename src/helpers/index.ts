export const a = () => {};

export function getQueryStringValue(key: string) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        '^(?:.*[&\\?]' +
          encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') +
          '(?:\\=([^&]*))?)?.*$',
        'i',
      ),
      '$1',
    ),
  );
}

export const objToQueryUrl = (obj: any, attr: any): string => {
  if (!obj) return '';

  var query = [];
  let count = 0;

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (encodeURIComponent(prop) === attr.name) {
        if (attr.value) query.push(attr.name + '=' + attr.value);
        count = 1;
      } else query.push(encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop]));
    }
  }
  if (count === 0 && attr.value) {
    query.push(attr.name + '=' + attr.value);
  }

  return '?' + query.join('&');
};

export const transformPriceFormat = (price: number) => {
  return new Intl.NumberFormat().format(price);
};
