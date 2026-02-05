import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getSpeciesByType, getSpeciesById, Species } from './data/species';
import { observationManager } from './data/observations';
import LanguageSwitcher from './components/LanguageSwitcher';
import { telegramWebApp, TelegramUser } from './telegram';
import TelegramApp from './components/TelegramApp';

// Components
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background waves */}
      <div className="absolute inset-0 z-0 wave-background">
        <div className="absolute bottom-0 left-0 w-full h-32"></div>
      </div>
      
      <div className="relative z-10">
        <header className="modern-header">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🐟</span>
              </div>
              <h1 className="text-2xl font-bold logo-gradient">
                {useTranslation().t('common.appTitle')}
              </h1>
            </div>
            <LanguageSwitcher />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            {t('app.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('app.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link 
            to="/fish" 
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🐟</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('navigation.fish')}</h2>
            <p className="text-gray-600">{t('navigation.fishDescription')}</p>
          </Link>

          <Link 
            to="/birds" 
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🦅</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('navigation.birds')}</h2>
            <p className="text-gray-600">{t('navigation.birdsDescription')}</p>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/observations" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold"
          >
            {t('navigation.observations')}
          </Link>
        </div>
      </div>
    </Layout>
  );
};

const SpeciesList: React.FC<{ type: 'fish' | 'bird' }> = ({ type }) => {
  const { t } = useTranslation();
  const species = getSpeciesByType(type);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories for this type
  const categories = Array.from(new Set(species.map(s => s.category)));
  
  const filteredSpecies = species.filter(species => {
    const matchesSearch = species.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      species.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || species.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← {t('navigation.backToHome')}
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {type === 'fish' ? t('navigation.fish') : t('navigation.birds')}
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search input with icon */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
            <input
              type="text"
              placeholder={t('search.placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-sm border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 shadow-sm"
            />
          </div>
          
          {/* Category filter with icon */}
          <div className="md:w-1/3 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🏷️
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-sm border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 shadow-sm appearance-none cursor-pointer"
            >
              <option value="all">{t('categories.all')}</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'river' && '🌊 Речные'}
                  {category === 'mediterranean' && '🌊 Средиземноморские'}
                  {category === 'tropical' && '🌴 Тропические'}
                  {category === 'european' && '🦅 Европейские'}
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSpecies.map((species) => (
          <Link key={species.id} to={`/species/${species.id}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 overflow-hidden group">
              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                {species.category === 'river' && '🌊 Речной'}
                {species.category === 'mediterranean' && '🌊 Средиземноморский'}
                {species.category === 'tropical' && '🌴 Тропический'}
                {species.category === 'european' && '🦅 Европейский'}
              </div>
              
              {/* Main image area */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-8xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {species.type === 'fish' ? '🐟' : '🦅'}
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Content area */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {species.name}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-200"></div>
                </div>
                <p className="text-sm text-gray-600 mb-3 italic">{species.scientificName}</p>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {species.description}
                </p>
                
                {/* Quick stats */}
                <div className="mt-4 flex gap-4 text-xs text-gray-500">
                  <span className="bg-blue-50 px-2 py-1 rounded-full">📏 {species.size}</span>
                  <span className="bg-green-50 px-2 py-1 rounded-full">🌿 {species.diet}</span>
                </div>
                
                {/* CTA button */}
                <div className="mt-4">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
                    Подробнее →
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const SpeciesDetailContent: React.FC<{ species: Species }> = ({ species }) => {
  const { t } = useTranslation();
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddObservation = () => {
    observationManager.addObservation(species.id, date, location, notes);
    setLocation('');
    setNotes('');
    alert(t('observations.added'));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← {t('navigation.backToHome')}
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
            <span className="text-8xl">{species.type === 'fish' ? '🐟' : '🦅'}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">{t('species.habitat')}</h4>
              <p className="text-gray-600">{species.habitat}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">{t('species.size')}</h4>
              <p className="text-gray-600">{species.size}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">{t('species.diet')}</h4>
              <p className="text-gray-600">{species.diet}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">{t('species.category')}</h4>
              <p className="text-gray-600 capitalize">{species.category}</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{species.name}</h1>
          <p className="text-gray-600 italic mb-4">{species.scientificName}</p>
          <p className="text-gray-700 mb-6">{species.description}</p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">{t('observations.addTitle')}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('observations.date')}
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('observations.location')}
                </label>
                <input
                  type="text"
                  placeholder={t('observations.locationPlaceholder')}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('observations.notes')}
                </label>
                <textarea
                  placeholder={t('observations.notesPlaceholder')}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleAddObservation}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                {t('observations.addButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpeciesDetail: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const species = getSpeciesById(id!);

  if (!species) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← {t('navigation.backToHome')}
        </Link>
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Species not found</h2>
          <p className="text-gray-600">The species you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return <SpeciesDetailContent species={species} />;
};

const Observations: React.FC = () => {
  const { t } = useTranslation();
  const observations = observationManager.getObservations();
  const stats = observationManager.getStatistics();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← {t('navigation.backToHome')}
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('navigation.observations')}</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{t('observations.total')}</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{t('observations.speciesCount')}</h3>
          <p className="text-3xl font-bold text-green-600">{Object.keys(stats.speciesCount).length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{t('observations.monthly')}</h3>
          <p className="text-3xl font-bold text-purple-600">{Object.keys(stats.monthlyCount).length}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">{t('observations.recent')}</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {observations.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              {t('observations.noObservations')}
            </div>
          ) : (
            observations.slice(0, 10).map((observation) => (
              <div key={observation.id} className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-800">Observation #{observation.id.substring(0, 8)}</h3>
                    <p className="text-gray-600 text-sm">{new Date(observation.date).toLocaleDateString()}</p>
                    {observation.location && (
                      <p className="text-gray-600 text-sm">📍 {observation.location}</p>
                    )}
                    {observation.notes && (
                      <p className="text-gray-700 mt-2">{observation.notes}</p>
                    )}
                  </div>
                  <button
                    onClick={() => observationManager.deleteObservation(observation.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fish" element={<SpeciesList type="fish" />} />
        <Route path="/birds" element={<SpeciesList type="bird" />} />
        <Route path="/species/:id" element={<SpeciesDetail />} />
        <Route path="/observations" element={<Observations />} />
      </Routes>
    </div>
  );
};

export default App;
export { App };
