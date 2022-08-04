let hat = {
  name: 'czapka',
  price: 100,
  getPriceIncTax(){
    return Number(this.price) * 1.2;
  }
};

console.log(`czapka: ${hat.price}, ${hat.getPriceIncTax()}`);
