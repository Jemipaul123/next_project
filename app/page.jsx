import styles from './page.module.css'

export default function Home({ movies }) {
  if (!movies) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <h1>Hello next 13</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
        </div>
      ))}
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`)
  const data = await res.json()
  const movies = data.results
  return { props: { movies } }
}
