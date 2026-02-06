import React, { useState, useMemo, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { DIFFICULTY_COLORS } from '../../consts';

const WikiSearch = ({ entries }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  // Configure Fuse.js
  const fuse = useMemo(() => {
    return new Fuse(entries, {
      keys: ['data.title', 'data.description', 'data.topic'],
      threshold: 0.4,
      includeMatches: true,
    });
  }, [entries]);

  const results = useMemo(() => {
    if (!query) return [];
    return fuse.search(query).slice(0, 8); // Limit to top 8 results
  }, [fuse, query]);

  // Handle click outside to close results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-12" ref={searchRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <i className="fas fa-search text-gray-500"></i>
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-4 py-4 bg-card-bg border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-unam-blue focus:border-transparent transition-all shadow-xl"
          placeholder="Busca algoritmos, temas o conceptos..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {/* Results Dropdown */}
      {isOpen && query && (
        <div className="absolute z-50 w-full mt-2 bg-card-bg border border-gray-800 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map(({ item }) => (
                <a
                  key={item.slug}
                  href={`/wiki/${item.slug}`}
                  className="block px-4 py-3 hover:bg-gray-800 transition-colors group"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white group-hover:text-unam-blue transition-colors">
                      {item.data.title}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded text-white ${DIFFICULTY_COLORS[item.data.difficulty] || 'bg-gray-600'}`}
                    >
                      {item.data.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-unam-gold font-code uppercase tracking-tighter">
                      {item.data.topic}
                    </span>
                    <span className="text-xs text-gray-500 truncate">{item.data.description}</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="px-4 py-6 text-center text-gray-500">
              <i className="fas fa-ghost mb-2 block text-2xl"></i>
              No se encontraron resultados para "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WikiSearch;
