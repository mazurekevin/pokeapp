import pokemons from './pokemons';

export const startGame = (players, config) => {
    console.log('Game starting...');
    /*for(let i = 0 ; i<players.length ; i++){
        
}*/

   for(const player of players){
       const index = Math.floor(Math.random()*pokemons.length);
       player.pokemon = {...pokemons[index]};
   }
config.turn = Math.floor(Math.random()*2);

    for(const [index, player] of players.entries()){
        const {socket, ...you} = player;
        const {socket: _, opponent} = players.find(player => player.socket.id!==socket.id);

        socket.emit('started',{
            you,
            opponent,
            turn: index === config.turn ? 'you' : 'opponent',  

        });
        
    }
    
};

export const terminateGame = (socket, players) => {
    console.log('Game terminating...');

    const index = players.findIndex(player=>player.socket.id=== socket.id);
// trouver l index qui s'est deco
    if(index!==-1){
        players.splice(index,1);
    }
    
for(const player of players){
    player.pokemon = null;
    player.socket.emit('terminated');
}




};

export const handleMove = (moveId, players, config)=>{
let activePlayer = players[config.turn];
let opponent = players.find(player => player.socket.id != activePlayer.socket.id);
let move = acivePlayer.pokemon.moves[moveId];

 console.log(`${activePlayer.name} with "${activePlayer.pokemon.name}" has played "${move.name}"`);
 console.log(`${opponent.pokemon.name} (${opponent.pokemon.hp}hp) has taken ${move.power} damages`);

if(opponent.pokemon.hp || activePlayer.pokemon.hp === 0){
    endGame(players);
}else{
    updateGame(moveId, players, config);
}



};

const updateGame = (moveId, players,config)=>{



for(const [index, player] of players.entries()){
    const {socket, ...you} = player;
    const {socket: _, opponent} = players.find(player => player.socket.id!==socket.id);
    player.socket.emit('moved',{
        you,
        opponent,
        moveId,
        turn: index === config.turn ? 'you' : 'opponent', 
    } );

}
};

const endGame = (moveId, players, config)=>{

    console.log('Game end...');

let winnerIndex = players.find(player => player.pokemon.hp > 0) ;


for(const [index, player] of players.entries()){
    const {socket, ...you} = player;
    const {socket: _, opponent} = players.find(player => player.socket.id!==socket);

    socket.emit('end game',{
        you,
        opponent,
        win: index === winnerIndex,  
    });

}
};