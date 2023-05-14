import Image from 'next/image'


import styles from './page.module.css'




export default async function Home() {
  
  const data =await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`)
  const res =await data.json()
  console.log(res)
  return (
    <main>
      <h1>Trending Movies</h1>
      {res.results.map((movie) => (
        <div>
        <h2>{movie.title}</h2></div>

      ))}
     
     
    </main>
  )
}
