import login from "/images/Login.png";
export default function Login() {
  return (
    <div className="h-screen w-screen">
      <div className="flex">
        <div className="h-full w-1/2 overflow-hidden">
          <img src={login} className="w-full h-full object-fill" />
        </div>
        <div className="w-1/2 h-full">Login Form</div>
      </div>
    </div>
  );
}
