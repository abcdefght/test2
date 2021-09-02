import React from "react";
import './index.css'
import SearchIcon from '@material-ui/icons/Search';

const Header = props => {

    const {word, setWord} = props

    const pressUp = e => {
        if (e.keyCode === 13) {
            const {press} = props
            press()
        }
    }

    return (
        <div className={'header'}>
            <span>
                BestSearch
            </span>
            <input
                onKeyUp={e => pressUp(e)}
                value={word}
                onChange={setWord}
                placeholder={'Search for new products in 961K stores'}/>
            <button>
                <SearchIcon style={{fontSize: 20, color: '#666'}}/>
                {/*<img src={require('../../assets/search.png')} alt={''}/>*/}
            </button>
        </div>
    )
}

export default Header