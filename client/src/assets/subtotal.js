export const subTotal = (value) => {
  let total = 0;

  if (value.length <= 0) {
    return total;
  } else {
    for (let i = 0; i < value.length; i++) {
      total += value[i].price * value[i].pcs;
    }
    return total;
  }
};
