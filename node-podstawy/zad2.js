// Mamy listę ksiązek
// 1. Przy uzyciu funkcji filter, wyswietl tablice ksiazek z kategorii adventure
// 2. Przy uzyciu funkcji filter, wyszukaj elementy, ktore maja w swojej nazwie ciag znakow 'er'
// 3. Przy uzyciu funkcji map, stworz tablice zawierajaca ile jest liter w nazwie ksiazki

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

//1
    let adventure = books.filter(el =>el.category.includes('adventure'));
    adventure.forEach( book => { 
        console.log(`adventure: ${book.name}`)
    })

// 2 
    let er = books.filter(el => el.name.includes('er'));
    er.forEach( book => { 
        console.log(`er: ${book.name}`)
    })

//3
    let ile = books.map(book => book.name.length);
    console.log(`ile: ${ile}`) 