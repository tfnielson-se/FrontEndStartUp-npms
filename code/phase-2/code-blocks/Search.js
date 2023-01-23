//// where <Search /> lives 
const [searchQuery, setSearchQuery] = useState('')

const searchPokemon = pokemonData.filter((pokeData) => 
        pokeData.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    // pass searchPokemon to card renderer

function Search({searchQuery, setSearchQuery}) {

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

	return (
		<div className="ui search">
			<div className="ui icon input">
				<input 
                className="prompt" 
                value={searchQuery}
                onChange={handleChange}
                />
				<i className="search icon" />
			</div>
		</div>
	);
}

export default Search;

