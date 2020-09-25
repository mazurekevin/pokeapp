import React from 'react';
import { Socket } from 'socket.io-client';

export default ({ data, status, socket }) => {

    let message = '';

    if (status === 'waiting') {
        message = "En attente d'un autre joueur...";
    } else if (status === 'playing') {
        
        message = 'Le combat commence';
    }

    const triggerAction = () => {
        if (data.turn === 'you') {
                Socket.emit('move', 0);
        }
    };

    return (
        <>
            <div className="c-game">
                <div className="c-game-row">
                    <div className="c-pokemon-info">
                        Pokemon 1
                        <div className="c-pokemon__hp" style={{ '--pokemon-hp-percent': 80 }} />
                    </div>
                    <div className="c-pokemon">
                        <div className="c-pokemon__image">
                            {data?.opponent?.pokemon && (
                            <img
                                alt="Opponent Pokemon" src={data.opponent.pokemon.image}/>
                                )}
                        </div>
                    </div>
                </div>
                <div className="c-game-row">
                    <div className="c-pokemon">
                        <div className="c-pokemon__image">
                            <img
                                alt="Mine Pokemon"
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                            />
                        </div>
                    </div>


                    
                    <div className="c-pokemon-info">
                        Pokemon 2
                        <div className="c-pokemon__hp" style={{ '--pokemon-hp-percent': 30 }} />
                    </div>

                </div>
            </div>
            <div className="c-game-info">
                <div className="c-message">
                    {message}
                    <div className="c-form u-mt-base">
                        <button onClick={() => console.log('TODO')}>Retourner au menu</button>
                    </div>
                </div>
                
                <div className="c-actions">
                    <button className="c-actions__action" onClick={triggerAction}>
                    Coupe-Vent
                    </button>
                    <button className="c-actions__action" onClick={() => console.log('TODO')}>
                    Coupe
                    </button>
                    <button className="c-actions__action" onClick={() => console.log('TODO')}>
                    Étreinte
                    </button>
                    <button className="c-actions__action" onClick={() => console.log('TODO')} disabled>
                    Fouet Lianes
                    </button>
                </div>
            </div>
        </>
    );
};
