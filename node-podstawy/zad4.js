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
    // 1
    const sortedShoppingList = shopping.sort((a, b) => {
        return a.price < b.price ? 1 : -1;
    })
    console.log(sortedShoppingList[0])

    //  2
    const findPrice = (collection, product) =>{
        return collection.find(el => el.name === product).price
    }
    console.log(findPrice(shopping, 'Chleb'));

    // 3
    const avgHeight = (param) =>{
        const studentHeightSum = param.reduce((accumulator, person)=>{
            return accumulator + person;    
        }, 0);
        return studentHeightSum / param.length;
    }
    const students = [178, 164, 199];
    console.log(avgHeight(students));