"use client";
import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
	const [fileURLs, setFileURLs] = useState([]);
	const [downloadUrl, setDownloadUrl]= useState(null)
	return (
		<DataContext.Provider value={{ fileURLs, setFileURLs, downloadUrl, setDownloadUrl }}>
			{children}
		</DataContext.Provider>
	);
};

export { DataContext, DataContextProvider };