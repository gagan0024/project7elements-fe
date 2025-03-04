const BackArrow = ({ color = "text-gray-500", size = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${size} ${color}`}
  >
    <path d="M15.2632 8.99997H2.73684M2.73684 8.99997L9 15.2631M2.73684 8.99997L9 2.73682" />
  </svg>
);

export default BackArrow;
