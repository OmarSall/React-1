import { useState } from 'react';
import { Article } from './Article';
import { Greeting } from "./Greeting.jsx";
import ToggleTheme from "./ToggleTheme";

const App = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "system";
    });

    const title = 'Lorem Ipsum';
    const description = 'Lorem Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.';

    return (
        <div>
            <ToggleTheme theme={theme} setTheme={setTheme} />
            <Article title={title} description={description} />
            <Greeting name="Omar" />
            <Greeting name="Kate" />
            <Greeting name="John" />
        </div>
    );
};

export default App;