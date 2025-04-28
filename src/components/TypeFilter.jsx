const types = [
    "", "normal", "fire", "water", "electric", "grass", "ice", "fighting", 
    "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", 
    "dragon", "dark", "steel", "fairy"
  ];
  
  function TypeFilter({ value, onChange }) {
    return (
      <div className="w-full mb-6">
        <select
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 p-3 rounded-lg shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type ? type.charAt(0).toUpperCase() + type.slice(1) : "All"}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default TypeFilter;
  