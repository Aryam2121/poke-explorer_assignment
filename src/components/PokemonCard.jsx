import React from "react";

const typeColors = {
  fire: "bg-red-400",
  water: "bg-blue-400",
  grass: "bg-green-400",
  electric: "bg-yellow-300",
  psychic: "bg-pink-400",
  ice: "bg-blue-200",
  dragon: "bg-purple-500",
  dark: "bg-gray-700",
  fairy: "bg-pink-200",
  normal: "bg-gray-300",
  fighting: "bg-red-700",
  flying: "bg-indigo-300",
  poison: "bg-purple-300",
  ground: "bg-yellow-600",
  rock: "bg-gray-500",
  bug: "bg-green-600",
  ghost: "bg-indigo-700",
  steel: "bg-gray-400",
};

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-24 h-24 mb-4"
      />
      <h3 className="text-xl font-bold capitalize mb-1">{pokemon.name}</h3>
      <p className="text-gray-500 mb-4">#{pokemon.id}</p>
      <div className="flex gap-2 flex-wrap justify-center">
        {pokemon.types.map((typeObj) => (
          <span
            key={typeObj.type.name}
            className={`text-white text-sm px-3 py-1 rounded-full ${typeColors[typeObj.type.name] || "bg-gray-400"}`}
          >
            {typeObj.type.name.charAt(0).toUpperCase() + typeObj.type.name.slice(1)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
