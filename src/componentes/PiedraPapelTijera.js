
import React, { useState } from 'react';

const PiedraPapelTijera = () => {
    const [puntuacionJugador, setPuntuacionJugador] = useState(0);
    const [puntuacionEnemigo, setPuntuacionEnemigo] = useState(0);
    const [resultado, setResultado] = useState('');

    const jugar = (seleccionJugador) => {
        const seleccionEnemigo = Math.floor(Math.random() * 3);

        if (seleccionEnemigo === 0) {
            switch (seleccionJugador) {
                case 1:
                    setResultado('EMPATE (Enemigo eligió PIEDRA)');
                    break;
                case 2:
                    setResultado('TÚ GANAS (Enemigo eligió PIEDRA)');
                    setPuntuacionJugador(prev => prev + 1);
                    break;
                default:
                    setResultado('TÚ PIERDES (Enemigo eligió PIEDRA)');
                    setPuntuacionEnemigo(prev => prev + 1);
                    break;
            }
        } else if (seleccionEnemigo === 1) {
            switch (seleccionJugador) {
                case 1:
                    setResultado('EMPATE (Enemigo eligió PAPEL)');
                    break;
                case 2:
                    setResultado('TÚ PIERDES (Enemigo eligió PAPEL)');
                    setPuntuacionEnemigo(prev => prev + 1);
                    break;
                default:
                    setResultado('TÚ GANAS (Enemigo eligió PAPEL)');
                    setPuntuacionJugador(prev => prev + 1);
                    break;
            }
        } else {
            switch (seleccionJugador) {
                case 1:
                    setResultado('TÚ GANAS (Enemigo eligió TIJERAS)');
                    setPuntuacionJugador(prev => prev + 1);
                    break;
                case 2:
                    setResultado('TÚ PIERDES (Enemigo eligió TIJERAS)');
                    setPuntuacionEnemigo(prev => prev + 1);
                    break;
                default:
                    setResultado('EMPATE (Enemigo eligió TIJERAS)');
                    break;
            }
        }
    };

    const reiniciarJuego = () => {
        setPuntuacionJugador(0);
        setPuntuacionEnemigo(0);
        setResultado('');
    };

    return (
        <div>
            <h1>Bienvenido al juego de Piedra, Papel o Tijera!</h1>
            <h2>Puntuación Jugador: {puntuacionJugador}</h2>
            <h2>Puntuación Enemigo: {puntuacionEnemigo}</h2>
            <button onClick={() => jugar(1)}>Piedra</button>
            <button onClick={() => jugar(2)}>Papel</button>
            <button onClick={() => jugar(3)}>Tijera</button>
            {resultado && (
                <div>
                    <h3>Resultado: {resultado}</h3>
                    <button onClick={reiniciarJuego}>Reiniciar Juego</button>
                </div>
            )}
        </div>
    );
};

export default PiedraPapelTijera;