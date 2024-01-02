class movie{
    constructor(name,year,rating,director){
        this.name=name;
        this.year=year;
        this.rating=rating;
        this.director=director;
    }
}
const movie1=new movie("Avengers",2019,8.5,"Joss Whedon");
const movie2=new movie("Interstellar",2014,8.6,"Christopher Nolan");
const movie3=new movie("The Dark Knight",2008,9.0,"Christopher Nolan");
console.log(movie1);
function factorial(n) {
    if (n==0) {
        return 1;
    }
    return n*factorial(n-1);

    
}
const f =factorial(5)
console.log(f);