import '../styles/sidebar.scss';

export function SideBar({listgenres}) {
    
  return (
    <nav className="sidebar">
      <span>Whatch<p>Me</p></span>
      <div className='buttons-container'>
        {listgenres}
      </div>
    </nav>
  )
}