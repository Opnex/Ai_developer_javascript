document.getElementById("task1").addEventListener("click", function() {
    let movies = [
    {
        title: "Bahubali",
        director: "James Brown",
        releaseYear: 2014,
        rating: 9,
    },
    {
        title: "Amaran",
        director: "Steve Ben",
        releaseYear: 2019,
        rating: 7,
    },
    {
        title: "KM7",
        director: "William Ibori",
        releaseYear: 2017,
        rating: 8,
    }
];

function getSummary() {
    let summaries = [];
    for (let movie of movies) {
        summaries.push(
            `${movie.title} (${movie.releaseYear}) - Directed by ${movie.director}, Rating: ${movie.rating}/10`
        );
    }
    return summaries.join('\n');
}


for (let movie of movies) {
    movie.isWatched = false;  
}

function overRated() {
    let aboveEight = [];
    for (let movie of movies) {
        if (movie.rating >= 8) {
            aboveEight.push(movie.title);
        }
    }
    return `Movies with rating over 8: ${aboveEight.join(', ')}`;
}

console.log("Summary:\n" + getSummary());
console.log("Movies after adding isWatched:\n", movies);
console.log(overRated());
});



                                                    // TASK2
document.getElementById("task2").addEventListener("click", function() {
let cartItem = {
    name: "Shoes",
    price: 5000,
    quantity: 2,
    
    
    getTotal: function () {
        return this.price * this.quantity;
    }
};


let cart = [
    cartItem,
    {
        name: "Bag",
        price: 3000,
        quantity: 1,
        getTotal: function () {
            return this.price * this.quantity;
        }
    },
    {
        name: "Watch",
        price: 7000,
        quantity: 3,
        getTotal: function () {
            return this.price * this.quantity;
        }
    }
];


function getCartTotal(cart) {
    let total = 0;
    for (let item of cart) {
        total += item.getTotal();
    }
    return total;
}

// TESTING
console.log("Cart items:", cart);
console.log("Total Cart Value:", getCartTotal(cart));
});



                                                // TASK3
document.getElementById("task3").addEventListener("click", function() {
let member = {
    name: "Steve Mike",
    membershipType: "premium", 
    borrowedBooks: [],

    
    borrowBook: function(book) {
        this.borrowedBooks.push(book);
    },

    
    getBorrowedCount: function() {
        return this.borrowedBooks.length;
    },

    
    getMembershipInfo: function() {
        if (this.membershipType === "basic") {
            return `${this.name} has a Basic membership. Limit: 3 books.`;
        } else if (this.membershipType === "premium") {
            return `${this.name} has a Premium membership. Limit: 10 books.`;
        } else {
            return `${this.name} has an unknown membership type.`;
        }
    }
};

// TESTING
member.borrowBook("James Faleke");
member.borrowBook("The Mission");

console.log(member.getMembershipInfo());
console.log("Borrowed Books:", member.borrowedBooks);
console.log("Total Borrowed:", member.getBorrowedCount());
});