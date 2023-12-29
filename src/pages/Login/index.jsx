import { login } from "../../services/usersService";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const response = await login(email, password);
    if (response.length > 0) {
      console.log(response);
      navigate("/");
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <input type="email" placeholder="Nhập email" />
        </div>
        <div>
          <input type="password" placeholder="Nhập mật khẩu" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
