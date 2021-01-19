function reducer(cart, book) {
  let bookInCart = cart.find(b => b.id === book.id);
  if (!bookInCart) {
    cart.push({
      ...book,
      amount: 1
    })
  } else {
    bookInCart.amount++;
  }
  return cart;
}


export default function normalize(cart) {
  let cartNormalized =  cart.reduce( reducer, [] );
  
  return cartNormalized;
}

