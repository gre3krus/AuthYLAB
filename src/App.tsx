import AuthForm from "./AuthForm";
import "./App.css";

function App() {
  const handleSubmit = async (email: string, password: string) => {
    console.log("События:", { email, password });
  };
  return (
    <div className="App">
      <AuthForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
