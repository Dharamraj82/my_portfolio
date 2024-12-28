import React, { createContext } from 'react';
import TodoAppImage from '../assets/TodoApp.png'; 
import ModernWeb from '../assets/ModernWeb.png';
import Pureplanet from '../assets/Pureplanet.png';
import DocsDrag from '../assets/DocsDrag.png';
import BubbleGame from '../assets/BubbleGame.png';
export const DataContext = createContext();

const Project_Context = ({ children }) => {
    const data = [
        {
          "project_link": "https://dharamraj82.github.io/To-doList/",
          "project_img": TodoAppImage,
          "project_desc": "Modern Aesthetics Clean and visually appealing design with a focus on usability and user engagement"
        },
        {
          "project_link": "https://dharamraj82.github.io/Modern-WebPages/",
          "project_img": ModernWeb, 
          "project_desc": "Sleek and minimalist interface designed to enhance user experience and simplicity"
        },
        {
          "project_link": "https://dharamraj82.github.io/Pure-Planet-HTML-CSS-JS-Project/",
          "project_img": Pureplanet, 
          "project_desc": "Sleek and minimalist interface designed to enhance user experience and simplicity"
        },
        {
          "project_link": "https://dharamraj82.github.io/Bubble-Game/",
          "project_img": BubbleGame, 
          "project_desc": "Sleek and minimalist interface designed to enhance user experience and simplicity"
        },
        {
          "project_link": "https://drag-docs-gamma.vercel.app/",
          "project_img": DocsDrag, 
          "project_desc": "Sleek and minimalist interface designed to enhance user experience and simplicity"
        }
    ];

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default Project_Context;
