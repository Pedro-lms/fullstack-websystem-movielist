import {ReactComponent as _Star} from 'assets/img/star.svg';
import {ReactComponent as _HalfStar} from 'assets/img/halfstar.svg';
import {ReactComponent as _EmptyStar} from 'assets/img/emptystar.svg';
import './style.css';

function MovieStars() {
    return (
        <div className="listmovie-stars-container">
            <_Star />
            <_Star/>
            <_Star />
            <_HalfStar />
            <_EmptyStar />
        </div>
    );
}

export default MovieStars;