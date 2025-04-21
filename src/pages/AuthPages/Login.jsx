import { ArrowLeft, Eye, EyeClosed } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) navigate("/dashboard");
  }, [token]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="flex">
      <div className="w-1/2 h-[100vh] overflow-hidden">
        <img
          className="w-[100%] h-[100%] object-cover"
          src="/images/Login.png"
          alt="Login Banner"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col gap-6">
          <div className="bg-neutral-100 hover:bg-neutral-200 rounded-lg p-2 w-fit flex items-center justify-center">
            <ArrowLeft />
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-4xl font-bold">Login</div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                autoComplete="off"
                className="text-lg w-88 rounded p-2 outline-none bg-neutral-100"
              />
              <div className="flex gap-2">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "Password"}
                  placeholder="Password"
                  autoComplete="off"
                  className="text-lg w-76 rounded p-2 outline-none bg-neutral-100"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="bg-neutral-100 hover:bg-neutral-200 rounded-lg p-2 w-fit flex items-center justify-center"
                >
                  {showPassword ? <Eye /> : <EyeClosed />}
                </div>
              </div>
              <div className="flex gap-1">
                <div className="text-sm">Don't have an account?</div>
                <a
                  href="/signup"
                  className="text-sm underline text-blue-500 hover:text-blue-600 font-semibold cursor-pointer"
                >
                  Signup
                </a>
              </div>
              <button className="bg-blue-500 text-xl font-bold text-white hover:bg-blue-600 rounded-md p-2 cursor-pointer">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
