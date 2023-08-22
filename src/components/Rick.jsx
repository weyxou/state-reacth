import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Rick() {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        async function fetchCharacters() {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character/');
                setCharacters(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchCharacters();
    }, []);

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
    };

    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id} onClick={() => handleCharacterClick(character)}>
                        {character.name}
                    </li>
                ))}
            </ul>
            {selectedCharacter && (
                <div>
                    <h2>Selected Character: {selectedCharacter.name}</h2>
                    <img src={selectedCharacter.image} alt={selectedCharacter.name} />
                    <p>Status: {selectedCharacter.status}</p>
                    <p>Species: {selectedCharacter.species}</p>
                     
                </div>
            )}
        </div>
    );
}

export default Rick;