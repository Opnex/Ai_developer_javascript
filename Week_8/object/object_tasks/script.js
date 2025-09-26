document.getElementById("task1").addEventListener("click", function() {
    let movies = [
        {
            title: "Bahubali",
            director: "James Brown",
            releaseYear: 2014,
            rating: 95,
        },
        {
            title: "Amaran",
            director: "Steve Ben",
            releaseYear: 2019,
            rating: 75,
        },
        {
            title: "KM7",
            director: "William Ibori",
            releaseYear: 2017,
            rating: 83,
        }
    ];

    function getSummary() {
        let summaries = [];
        for (let movie of movies) {
            summaries.push(`${movie.title} (${movie.releaseYear}) - Directed by ${movie.director}, Rating: ${movie.rating}%`);
        }
        return summaries.join('\n');
    }
    
    console.log("Summary:\n", getSummary());
});