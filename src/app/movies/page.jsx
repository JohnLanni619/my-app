import clientPromise from "../db"

async function getData() {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const movies = await db
        .collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(1)
        .toArray();
    return movies;
}

export default async function Movies() {
    const movies = await getData();
    console.log(movies)
    return (
        <div>
            <h1>Top 20 Movies of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
            </p>
            <ul>
                {/* {movies.map((movie) => (
                    <li>
                        <h2>{movie.title}</h2>
                        <h3>{movie.metacritic}</h3>
                        <p>{movie.plot}</p>
                    </li>
                ))} */}
            </ul>
        </div>
    );
}
