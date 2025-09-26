                                                                    // TASK1
document.getElementById("task1").addEventListener("click", function() {
    let shoppingList = ["Cream", "Soap", "Tooth-paste", "Body-Spray", "Tooth-brush"];
    shoppingList.push("milk", "Blood-Tonic", "Noodles", "Snacks", "Drinks")
    shoppingList.shift();

    
console.log("Showing Shopping List");
console.log(shoppingList);

console.log("");
console.log("Showing Added Shopping List");
console.log(shoppingList);

console.log("");
console.log("Showing Total Number of Shopping List After Removing First Item");
console.log("Total number of list: ", shoppingList.length);


for (let i = 0; i < shoppingList.length; i++) {
    console.log(`Shopping List ${i + 1}: ${shoppingList[i]}`);
}

function formatList(list) {
    for (let i = 0; i < shoppingList.length; i++) {
        console.log(`Format List: ${i + 1}: ${list[i]}`)
    }
}
formatList(shoppingList)
})



                                                                    // TASK2
document.getElementById("task2").addEventListener("click", function () {
    let grades = [75, 62, 33, 55, 97, 80, 48, 40, 78, 25];
    let total = 0;

    console.log(grades);

    function getAverage(grades) {
        for (let grade of grades) {
            console.log("Grades: ", grades);
            total += grade;
        }

        let average = total / grades.length;
        console.log("Average: ", average.toFixed(1));
    }
getAverage(grades);


    function getHighest(grades) {
        let highestGrade = Math.max(...grades);
        console.log("Highest Grade: ", highestGrade);
    }
getHighest(grades);


    function getLowest(grades) {
        let lowestGrade = Math.min(...grades);
        console.log("Lowest Grade: ", lowestGrade)
    }
getLowest(grades);


    function getPassRate(grades) {
        let pass = 0;

        for (let grade of grades) {
            if (grade >= 50 ) {
                pass++;
                console.log(`Passed grade: ${grade}`)
            }
        }
        console.log("Summary of Passed Grades: ", pass);

        let totalPass = pass / grades.length;
        console.log("Number passed Divide by Students: ", totalPass.toFixed(2));

        let percentage = pass / grades.length * 100
        console.log("Percentage of passed students: ", percentage.toFixed(2),"%");
    }
getPassRate(grades);
})





                                                                        // TASK3
document.getElementById("task3").addEventListener("click", function() {
    let movieList = [
        { name: "Bahubali", rating: 95 },
        { name: "A man called God", rating: 90 },
        { name: "Arm", rating: 40 },
        { name: "Devar", rating: 50 },
        { name: "Amara", rating: 65 },
        { name: "km7", rating: 72 }
    ];

    function addMovie(movie, rating) {
        movieList.push({ name: movie, rating: rating });
        console.log(`Added movie: ${movie} with rating: ${rating}`);
    }

    function getAverageRating() {
        let totalRating = movieList.reduce((sum, movie) => sum + movie.rating, 0);
        let averageRating = totalRating / movieList.length;
        console.log(`Average Rating: ${averageRating.toFixed(2)}`);
        return averageRating;
    }

    function getTopMovie() {
        let topMovie = movieList.reduce((top, current) => 
            current.rating > top.rating ? current : top
        );
        console.log(`Top Rated Movie: ${topMovie.name} with rating: ${topMovie.rating}`);
        return topMovie.name;
    }

    function printSummary() {
        console.log("=== Movie Summary ===");
        movieList.forEach(movie => {
            console.log(`${movie.name}: ${movie.rating}/100`);
        });
    }

    function sortMoviesByRating() {
        let sortedMovies = [...movieList].sort((a, b) => b.rating - a.rating);
        console.log("=== Movies Sorted by Rating (Highest to Lowest) ===");
        sortedMovies.forEach(movie => {
            console.log(`${movie.name}: ${movie.rating}/100`);
        });
        return sortedMovies;
    }

   
    console.log("=== Testing Movie System ===");
    addMovie("RRR", 85);
    addMovie("Marahanja", 45);
    addMovie("Amaran", 52);
    getAverageRating();
    getTopMovie();
    printSummary();
    sortMoviesByRating();
});






                                                                            // TASK4
document.getElementById("task4").addEventListener("click", function() {
    let students = [
    { name: "Thomas Ope", grade: 92 },
    { name: "Tunde Oloruntola", grade: 78 },
    { name: "Rotimi Daramola", grade: 85 }
];


function addStudent(name, grade) {
    if (grade < 0 || grade > 100) {
        console.log(`Error: Grade must be between 0 and 100. Could not add ${name}`);
        return;
    }
    students.push({ name, grade });
    console.log(`Added student: ${name} with grade: ${grade}`);
}


function calculateAverage() {
    let total = 0;
    for (let student of students) {
        total += student.grade;
    }
    return total / students.length;
}


function findTopAndBottomStudents() {
    const grades = students.map(student => student.grade);
    const maxGrade = Math.max(...grades);
    const minGrade = Math.min(...grades);
    
    const topStudent = students.find(student => student.grade === maxGrade);
    const bottomStudent = students.find(student => student.grade === minGrade);
    
    return { top: topStudent, bottom: bottomStudent };
}


function getLetterGrade(grade) {
    if (grade >= 90) return 'A';
    if (grade >= 80) return 'B';
    if (grade >= 70) return 'C';
    if (grade >= 60) return 'D';
    return 'F';
}


function generateReport() {
    const sortedStudents = [...students].sort((a, b) => b.grade - a.grade);
    
    const average = calculateAverage();
    const { top, bottom } = findTopAndBottomStudents();
    
    console.log("=== CLASS REPORT ===");
    console.log("Student Name\tGrade\tLetter Grade");
    console.log("-----------------------------------");
    
    for (let student of sortedStudents) {
        const letterGrade = getLetterGrade(student.grade);
        console.log(`${student.name}\t${student.grade}%\t${letterGrade}`);
    }
    
    console.log("-----------------------------------");
    console.log(`Class Average: ${average.toFixed(2)}%`);
    console.log(`Top Student: ${top.name} (${top.grade}%)`);
    console.log(`Lowest Student: ${bottom.name} (${bottom.grade}%)`);
}

// Testing the system
console.log("=== Testing Student Report System ===");

addStudent("Tope David", 65);
addStudent("Ayodele Titilayo", 95);
addStudent("Shola Owoeye", 150); 
generateReport();
})