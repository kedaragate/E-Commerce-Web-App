let total = 0;
export default function calculateTotalAmount(cart, pagePath) {
  if (location.pathname !== pagePath) {
    return;
  }
  if (cart.length !== 0) {
    let total = cart.reduce((prev, curr) => {
      return prev.amount + curr.amount;
    }, 0);
    console.log(total);
    return total;
  }
}
