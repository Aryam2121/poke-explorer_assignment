function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <div className="w-full flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // this calls the setSearchTerm function
          className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")} // clear the search term
            className="text-gray-500 hover:text-red-500 focus:outline-none"
          >
            X
          </button>
        )}
      </div>
    );
  }
  export default SearchBar;
  