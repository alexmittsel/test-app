export const scientificToDecimal = function (num) {
  let nsign = Math.sign(num);
  //remove the sign
  num = Math.abs(num);
  //if the number is in scientific notation remove it
  // eslint-disable-next-line no-useless-escape
  if (/\d+\.?\d*e[\+\-]*\d+/i.test(num)) {
    let zero = '0',
      parts = String(num).toLowerCase().split('e'), //split into coeff and exponent
      e = parts.pop(), //store the exponential part
      l = Math.abs(e), //get the number of zeros
      sign = e / l,
      coeff_array = parts[0].split('.');
    if (sign === -1) {
      l = l - coeff_array[0].length;
      if (l < 0) {
        num =
          coeff_array[0].slice(0, l) +
          '.' +
          coeff_array[0].slice(l) +
          (coeff_array.length === 2 ? coeff_array[1] : '');
      } else {
        num = zero + '.' + new Array(l + 1).join(zero) + coeff_array.join('');
      }
    } else {
      const dec = coeff_array[1];
      if (dec) l = l - dec.length;
      if (l < 0) {
        num = coeff_array[0] + dec.slice(0, l) + '.' + dec.slice(l);
      } else {
        num = coeff_array.join('') + new Array(l + 1).join(zero);
      }
    }
  }

  return nsign < 0 ? '-' + num : num;
};

export const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
