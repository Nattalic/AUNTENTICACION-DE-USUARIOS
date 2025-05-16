function Character(id, name, status, species, type, gender, origin, location, image, episode, url, created) {

    this.id = id
    this.name = name
    this.status = status
    this.species = species
    this.type = type
    this.gender = gender
    this.origin = origin
    this.location = location
    this.image = image
    this.episode = episode
    this.url = url
    this.created = created

}

function renderCharacter(character) {
    const card = document.createElement('div');
    card.className = 'character-card';
    
    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character-image">
        <div class="character-info">
            <h2 class="character-name">${character.name}</h2>
            <p class="character-detail">
                <span class="status ${character.status}"></span>
                ${character.status} - ${character.species}
            </p>
            ${character.type ? `<p class="character-detail"><strong>Tipo:</strong> ${character.type}</p>` : ''}
            <p class="character-detail"><strong>Género:</strong> ${character.gender}</p>
            <p class="character-detail"><strong>Origen:</strong> ${character.origin.name}</p>
            <p class="character-detail"><strong>Ubicación:</strong> ${character.location.name}</p>
            <p class="character-detail"><strong>Episodios:</strong> ${character.episode.length}</p>
        </div>
    `;
    
    return card;
}

function fetchAndDisplayCharacters() {
    const container = document.getElementById('characters-container')


    for (let index = 0; index < 400; index++) {

    
    fetch(`https://rickandmortyapi.com/api/character/${index}`)
    .then (response => response.json())
    .then (data => {
        var character = new Character(data.id, data.name, data.status, data.species, 
            data.type, data.gender, data.origin, data.location, data.image, 
            data.episode, data.url, data.created
        )

        const cardCharacter = renderCharacter (character)
        container.appendChild(cardCharacter)

        })
    }

}

document.addEventListener('DOMContentLoaded', fetchAndDisplayCharacters);