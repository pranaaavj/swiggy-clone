import { useEffect, useState } from 'react';

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  function setOnline() {
    setOnlineStatus(false);
  }
  function setOffline() {
    setOnlineStatus(true);
  }
  useEffect(() => {
    window.addEventListener('offline', setOnline);
    window.addEventListener('online', setOffline);

    return () => {
      window.removeEventListener('online', setOffline, true);
      window.removeEventListener('offline', setOnline, true);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
