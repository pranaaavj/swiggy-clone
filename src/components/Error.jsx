import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!</h1>
      <h1>Something Went Wrong</h1>
      <h1>{error.message}</h1>
      <h1>
        {error.status} : {error.statusText}
      </h1>
    </div>
  );
};

export default Error;
