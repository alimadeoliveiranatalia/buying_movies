import '../styles/content.scss';

export function Content({moviesList, title}){

  return (
    <>
      <div className="container">
      <header>
        <span className="category">Categoria: <span>{title}</span></span>
      </header>
      <main>
        <div className="movies-list">
          {moviesList}
        </div>
      </main>
      
    </div>
    </>
  )
}