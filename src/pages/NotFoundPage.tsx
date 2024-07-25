const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl text-center font-bold text-indigo-700 text-shadow-lg">
        404 - Page Not Found
      </h1>
      <p className="text-lg mb-4 text-center">
        Sorry, the page you are looking for does not exist
      </p>
      <a href="/" className="text-indigo-700 underline">
        Go back to the homepage
      </a>
    </div>
  );
};

export default NotFoundPage;
