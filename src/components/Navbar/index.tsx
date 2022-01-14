import {ReactComponent as GitHubIcon} from 'components/assets/img/github.svg';
function NavBar(){
    return(
      <header>
        <nav className="container">
            <div className="listmovie-nav-content"></div>
            <div className="listmovie-nav-content">
                <h1>List Movies</h1>
                <a href="https://github.com/Pedro-lms" target="_blank" rel="noreferrer">
                    <div className="listmovie-contact-container">

                        <p className="listsmovie-contact-link">Clique aqui para contactar o Desenvolvedor Pedro</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}
export default NavBar;