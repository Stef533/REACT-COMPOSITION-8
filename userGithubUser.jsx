import { useState } from 'react';

const useGithubUser = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async (username) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
      setError(null);
    } catch (error) {
      setUserData(null);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { fetchUserData, userData, loading, error };
};

export default useGithubUser;
