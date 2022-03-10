import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const GlobalContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Elon Musk');

    const getResults = async (typeUrl) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${typeUrl}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'EU',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
        });

        const data = await response.json();

        if(typeUrl.includes('/news')) {
            setResults(data.entries);
        } else if(typeUrl.includes('/images')) {
            setResults(data.image_results);
        } else {
            setResults(data.results);
        };

        setIsLoading(false);
    }

    return (
        <GlobalContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useResultContext = () => useContext(GlobalContext);