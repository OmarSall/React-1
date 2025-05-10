import { Article } from './Article';

const App = () => {
    const title = 'Lorem Ipsum';
    const description = 'Lorem Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.';

    return (
        <div>
            <Article title={title} description={description} />
        </div>
    )
};

export default App;