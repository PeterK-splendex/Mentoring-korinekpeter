import React from 'react';
import {RouterProvider,createBrowserRouter } from 'react-router-dom';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';
import List from './components/List/List';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Country from './country.interface';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (response.ok) {
          const data = await response.json();
          setCountries(data);
          setFilteredCountries(data);
        } else {
          console.error('Failed to fetch data from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = countries.filter(country => {
      const matchesSearchTerm = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = !selectedRegion || country.region === selectedRegion;
      return matchesSearchTerm && matchesRegion;
    });

    setFilteredCountries(filtered);
  }, [searchTerm, selectedRegion, countries]);
  const router = createBrowserRouter([
    {path: "/", element: <>
    <h1 className="title">Where in the world</h1>
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <Filter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
    <List countries={filteredCountries} /></>},
  {path: "/country/:name", element: <CountryDetail countries={countries}/>}
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
