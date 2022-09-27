import React, {useState} from 'react';
import Header from '../Header';
import logo from '../logo.svg';

function Home(){
    const [contador, setContador] = useState(0);
    function increment(){
        setContador(contador+1);
    }

    return (
        <div className="Home">
            <header className="App-header">
                <Header title="Parâmetro do cabeçalho"/>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <input type="button" value="Clique" onClick={increment} />
                </p>
                <p>{contador}</p> cliques!
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default Home;
