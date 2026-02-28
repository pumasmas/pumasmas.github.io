import React, { useState, useMemo, useRef, useEffect } from 'react';

const WikiBrowser = ({ initialEntries, difficultyColors }) => {
  const [selectedTopics, setSelectedTopics] = useState(new Set());
  const [selectedDifficulties, setSelectedDifficulties] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);

  const topicRef = useRef(null);
  const difficultyRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (topicRef.current && !topicRef.current.contains(event.target)) {
        setIsTopicOpen(false);
      }
      if (difficultyRef.current && !difficultyRef.current.contains(event.target)) {
        setIsDifficultyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const allTopics = useMemo(() => {
    const topics = new Set(initialEntries.map((entry) => entry.data.topic));
    return Array.from(topics).sort();
  }, [initialEntries]);

  const allDifficulties = Object.keys(difficultyColors);

  const toggleTopic = (topic) => {
    const newTopics = new Set(selectedTopics);
    if (newTopics.has(topic)) {
      newTopics.delete(topic);
    } else {
      newTopics.add(topic);
    }
    setSelectedTopics(newTopics);
  };

  const toggleDifficulty = (diff) => {
    const newDiffs = new Set(selectedDifficulties);
    if (newDiffs.has(diff)) {
      newDiffs.delete(diff);
    } else {
      newDiffs.add(diff);
    }
    setSelectedDifficulties(newDiffs);
  };

  const filteredEntries = useMemo(() => {
    return initialEntries.filter((entry) => {
      const matchesTopic = selectedTopics.size === 0 || selectedTopics.has(entry.data.topic);
      const matchesDifficulty =
        selectedDifficulties.size === 0 || selectedDifficulties.has(entry.data.difficulty);
      const matchesSearch =
        searchQuery === '' ||
        entry.data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.data.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTopic && matchesDifficulty && matchesSearch;
    });
  }, [initialEntries, selectedTopics, selectedDifficulties, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Horizontal Filter Bar */}
      <div className="bg-bg-surface p-4 rounded-2xl border border-border flex flex-col md:flex-row gap-4 items-center shadow-xl">
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"></i>
          <input
            type="text"
            placeholder="Buscar algoritmos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-bg-base border border-border rounded-xl pl-11 pr-4 py-2.5 text-text-bright text-sm focus:border-unam-blue focus:outline-none transition-all"
          />
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          {/* Topics Dropdown */}
          <div className="relative flex-1 md:w-48" ref={topicRef}>
            <button
              onClick={() => setIsTopicOpen(!isTopicOpen)}
              className="w-full bg-bg-base border border-border rounded-xl px-4 py-2.5 text-sm text-text-bright flex justify-between items-center hover:border-border-hover transition-colors"
            >
              <span className="truncate">
                {selectedTopics.size === 0 ? 'Temas' : `${selectedTopics.size} seleccionados`}
              </span>
              <i
                className={`fas fa-chevron-down text-xs transition-transform ${isTopicOpen ? 'rotate-180' : ''}`}
              ></i>
            </button>
            {isTopicOpen && (
              <div className="absolute z-50 mt-2 w-full min-w-[200px] bg-bg-surface border border-border rounded-xl shadow-2xl p-2 max-h-64 overflow-y-auto">
                {allTopics.map((topic) => (
                  <label
                    key={topic}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-border rounded-lg cursor-pointer transition-colors group"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-border bg-bg-base text-primary focus:ring-0"
                      checked={selectedTopics.has(topic)}
                      onChange={() => toggleTopic(topic)}
                    />
                    <span className="text-sm text-text-base group-hover:text-text-bright">
                      {topic}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Difficulty Dropdown */}
          <div className="relative flex-1 md:w-48" ref={difficultyRef}>
            <button
              onClick={() => setIsDifficultyOpen(!isDifficultyOpen)}
              className="w-full bg-bg-base border border-border rounded-xl px-4 py-2.5 text-sm text-text-bright flex justify-between items-center hover:border-border-hover transition-colors"
            >
              <span className="truncate">
                {selectedDifficulties.size === 0
                  ? 'Dificultad'
                  : `${selectedDifficulties.size} seleccionadas`}
              </span>
              <i
                className={`fas fa-chevron-down text-xs transition-transform ${isDifficultyOpen ? 'rotate-180' : ''}`}
              ></i>
            </button>
            {isDifficultyOpen && (
              <div className="absolute z-50 mt-2 w-full min-w-[200px] bg-bg-surface border border-border rounded-xl shadow-2xl p-2">
                {allDifficulties.map((diff) => (
                  <label
                    key={diff}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-border rounded-lg cursor-pointer transition-colors group"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-border bg-bg-base text-primary focus:ring-0"
                      checked={selectedDifficulties.has(diff)}
                      onChange={() => toggleDifficulty(diff)}
                    />
                    <span
                      className={`text-[10px] font-bold text-text-bright px-2 py-0.5 rounded ${difficultyColors[diff]}`}
                    >
                      {diff}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Clear Filters */}
        {(selectedTopics.size > 0 || selectedDifficulties.size > 0 || searchQuery !== '') && (
          <button
            onClick={() => {
              setSelectedTopics(new Set());
              setSelectedDifficulties(new Set());
              setSearchQuery('');
            }}
            className="text-xs text-accent hover:text-text-bright transition-colors whitespace-nowrap px-2"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Results Header */}
      <div className="flex justify-between items-center px-2">
        <h2 className="text-xl font-bold text-text-bright">
          Recursos{' '}
          <span className="text-text-muted text-sm font-normal ml-2">
            ({filteredEntries.length} encontrados)
          </span>
        </h2>
      </div>

      {/* Results Grid */}
      {filteredEntries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map((entry) => (
            <a
              key={entry.slug}
              href={`/wiki/${entry.slug}`}
              className="group block bg-bg-surface rounded-2xl border border-border hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-unam-gold/5 overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-accent border border-accent/30 px-2 py-1 rounded-lg font-code uppercase tracking-widest bg-accent/5">
                    {entry.data.topic}
                  </span>
                  <span
                    className={`text-[10px] font-bold text-text-bright px-2 py-1 rounded-lg ${difficultyColors[entry.data.difficulty] || 'bg-border'}`}
                  >
                    {entry.data.difficulty}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text-bright mb-2 group-hover:text-primary transition-colors">
                  {entry.data.title}
                </h3>
                <p className="text-sm text-text-muted line-clamp-3 mb-6 flex-grow leading-relaxed">
                  {entry.data.description}
                </p>
                <div className="pt-4 mt-auto border-t border-border/50 flex items-center justify-between text-[10px] text-text-muted font-code uppercase tracking-wider">
                  <span className="flex items-center">
                    <i className="fas fa-calendar-alt mr-2 text-accent/50"></i>
                    <span suppressHydrationWarning>
                      {entry.data.lastUpdated
                        ? new Date(entry.data.lastUpdated).toLocaleDateString()
                        : 'Reciente'}
                    </span>
                  </span>
                  <span className="group-hover:text-primary transition-colors">
                    Leer más <i className="fas fa-arrow-right ml-1"></i>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-bg-surface/50 rounded-3xl border border-dashed border-border">
          <div className="w-16 h-16 bg-border/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-search text-2xl text-text-muted"></i>
          </div>
          <h3 className="text-xl font-bold text-text-bright mb-2">No se encontraron algoritmos</h3>
          <p className="text-text-muted max-w-xs mx-auto">
            Ajusta los filtros o intenta con términos más generales.
          </p>
        </div>
      )}
    </div>
  );
};

export default WikiBrowser;
