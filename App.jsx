import GithubUser from './GithubUser';  // Assicurati che il percorso del file sia corretto

const App = () => {
  const username = 'your_github_username';  // Sostituisci con il tuo nome utente GitHub

  return (
    <div>
      <h1>Github User Information</h1>
      <GithubUser username={username} />
    </div>
  );
};

export default App;
