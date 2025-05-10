import { useState } from 'react';
import { Article } from './Article';
import { Greeting } from "./Greeting.jsx";
import ToggleTheme  from "./ToggleTheme";

const articles = [
    {
        id: 1,
        title: 'React Basics',
        description: 'Learn the fundamentals of React including components, JSX, and state.',
    },
    {
        id: 2,
        title: 'Hooks in Depth',
        description: 'Understand useEffect, useState, and custom hooks to manage logic.',
    },
    {
        id: 3,
        title: 'Advanced Patterns',
        description: 'Dive into context, render props, and higher-order components.',
    },
    {
        id: 4,
        title: 'Lorem Ipsum',
        description: 'Lorem Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.',

    },
];

const people = [
    {
        id: 1,
        firstName: 'Omar',
    },
    {
        id: 2,
        firstName: 'Emma',
    },
    {
        id: 3,
        firstName: 'John',
    },
];

const App = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "system";
    });

    return (
        <div>
            <ToggleTheme theme={theme} setTheme={setTheme} />
            {articles.map((article) => (
                <Article key={article.id} title={article.title} description={article.description} />
            ))}
            {people.map((person) => (
                <Greeting key={person.id} name={person.firstName} />
            ))}
        </div>
    );
};

export default App;