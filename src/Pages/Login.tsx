import { FormEvent, useState } from "react";
import axios from "axios"

function Login(){
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [responseText, setResponseText] = useState("");
  
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setResponseText("");
    try {
      const response = await axios.post("https://localhost:5000/login", {
        username: email,
        password: pass,
      });
      setResponseText(response.data);
      console.log(response.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setResponseText(error.message);
      } else {
        setResponseText(String(error));
      }
    }
  }
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      console.log(res.data.content)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
  <>
  <div className="LoginForm">
      <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
          <label for="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e. target.value)} type="password" placeholder="*********" id="password" name="password"/>
          <button type="submit">Login</button>
      </form>
  </div>
  <button type="button" onClick={getQuote}>Click me</button>
  </>
  )
}

export default Login;
