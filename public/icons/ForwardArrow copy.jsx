const ForwardArrow = ({ color = "text-gray-500", size = "w-6 h-6" }) => (
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
    <path d="M2.73684 8.49997H15.2632M15.2632 8.49997L9 14.7631M15.2632 8.49997L9 2.23682" />
  </svg>
);

export default ForwardArrow;
