import React, { useState, useMemo, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { DIFFICULTY_COLORS } from '../../consts';

const GlobalSearch = ({ entries }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);

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
    return fuse.search(query).slice(0, 8);
  }, [fuse, query]);

  // Keyboard Shortcuts (Ctrl+K to open, Esc to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery(''); // Optional: clear query on close
    }
  }, [isOpen]);

  // Keyboard Navigation for Results
  useEffect(() => {
    const handleNavigation = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[activeIndex]) {
          window.location.href = `/wiki/${results[activeIndex].item.slug}`;
        }
      }
    };

    window.addEventListener('keydown', handleNavigation);
    return () => window.removeEventListener('keydown', handleNavigation);
  }, [isOpen, results, activeIndex]);

  // Reset active index on query change
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-gray-400 bg-gray-800/50 hover:bg-gray-800 hover:text-white border border-gray-700 hover:border-gray-600 rounded-lg transition-all text-sm group"
      >
        <i className="fas fa-search group-hover:text-unam-gold transition-colors"></i>
        <span className="hidden sm:inline">Buscar...</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-xs text-gray-500 bg-gray-900 border border-gray-700 rounded font-code">
          Ctrl K
        </kbd>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center pt-[15vh] px-4"
          role="button"
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setIsOpen(false);
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-2xl bg-card-bg border border-gray-700 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
            {/* Search Input */}
            <div className="flex items-center border-b border-gray-700 p-4">
              <i className="fas fa-search text-unam-gold text-lg mr-4"></i>
              <input
                ref={inputRef}
                type="text"
                className="flex-grow bg-transparent text-white text-lg placeholder-gray-500 focus:outline-none"
                placeholder="Buscar algoritmos, temas..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-white px-2"
              >
                <kbd className="text-xs border border-gray-600 rounded px-1">ESC</kbd>
              </button>
            </div>

            {/* Results List */}
            <div className="overflow-y-auto custom-scrollbar" ref={resultsRef}>
              {results.length > 0 ? (
                <div className="p-2">
                  <div className="text-xs font-bold text-gray-500 px-3 py-2 uppercase tracking-wider">
                    Wiki
                  </div>
                  {results.map(({ item }, index) => (
                    <a
                      key={item.slug}
                      href={`/wiki/${item.slug}`}
                      className={`block px-3 py-3 rounded-lg transition-colors cursor-pointer ${
                        index === activeIndex ? 'bg-unam-blue/10' : 'hover:bg-gray-800'
                      }`}
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span
                          className={`font-bold transition-colors ${index === activeIndex ? 'text-unam-blue' : 'text-white'}`}
                        >
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
                      </div>
                    </a>
                  ))}
                </div>
              ) : query ? (
                <div className="p-8 text-center text-gray-500">
                  <i className="fas fa-ghost mb-3 block text-3xl opacity-50"></i>
                  No encontramos nada para &quot;<span className="text-white">{query}</span>&quot;
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <p>Escribe para buscar en la documentación...</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-800 px-4 py-2 text-xs text-gray-500 flex justify-between">
              <span>
                <i className="fas fa-level-down-alt rotate-90 mr-1"></i> Seleccionar
              </span>
              <span>
                <i className="fas fa-arrow-up mr-1"></i> <i className="fas fa-arrow-down mr-1"></i>{' '}
                Navegar
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalSearch;
