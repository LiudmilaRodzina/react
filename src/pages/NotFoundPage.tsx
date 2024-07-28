const NotFoundPage = () => {
  return (
    <div className="min-h-screen m-auto top-0">
      <div className="flex flex-col items-center justify-center mt-24 gap-4">
        <h1 className="text-5xl text-center font-bold text-shadow-sm">
          404 - Page Not Found
        </h1>
        <p className="text-lg mb-4 text-center">
          Sorry, the page you are looking for does not exist
        </p>
        <a
          href="/"
          className="underline transition hover:scale-105 active:scale-100 text-shadow-sm"
        >
          Go back to the homepage
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
