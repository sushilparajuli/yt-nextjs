export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-xl">
      <div className="py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-20 h-20 text-red-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      </div>
      <p>We are sorry but the page you are looking for does not exist.</p>
    </div>
  );
}
