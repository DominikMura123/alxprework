console.log('Hello world !!');

const shopping = [
    {
      id: 1,
      name: "banan",
      quantity: 3,
      price: 3.99
    },
    {
      id: 2,
      name: "Chleb",
      quantity: 1,
      price: 4.99
    },
    {
      id: 3,
      name: "Wiśnie",
      quantity: 0.5,
      price: 19.99
    }
  ]

  let suma = 0;
  shopping.forEach( id =>{
    suma = suma + id.quantity* id.price;
  });
  console.log(`${suma}`);


  suma =0;
  const eSign = shopping.filter(el =>{
    return el.name.includes('e');
  })
  eSign.forEach(id =>{
    suma = suma + id.quantity* id.price;
  });
  console.log(`${suma}`);