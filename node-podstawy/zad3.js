// PURE FUNCTION
const filterElements = (collection, phrase) => {
    return collection.filter(element => {
      return element.name.includes(phrase)
    })
  }


const multiply = (a, b) =>{
    return a * b;
}
console.log(multiply(3,3));

const checkLettrs = (name) =>{
    return name.length;
} 
console.log(checkLettrs('Damian'));

const findByCategory = (collection, category) => {
    const filteredCollection = collection.filter(el => {
        return el.category === category;
    })
    // Early return
    if(filteredCollection.length === 0) return 'No books'
    
    return filteredCollection
}

const books = [
    {
      name: "Harry Potter",
      category: "adventure"
    },
    {
      name: 'Alice in Wonderland',
      category: 'fantasy'
    },
    {
      name: 'Lord of the Rings',
      category: 'fantasy'
    }
  ]
console.log(findByCategory(books, 'fantas'));

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


