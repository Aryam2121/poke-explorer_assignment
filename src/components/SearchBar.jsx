function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <div className="w-full flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        />
      </div>
    );
  }
  
  export default SearchBar;
  