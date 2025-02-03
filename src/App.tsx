import { useState } from "react";
import { Eye, EyeOff, Check } from "lucide-react";

function App() {
  const [currentScreen, setCurrentScreen] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const renderScreen = () => {
    switch (currentScreen) {
      case "login":
        return (
          <div className="w-full max-w-md px-6">
            <div className="mb-12">
              <img src="public/logo.png" alt="DINEE" className="h-12 mx-auto" />
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 pr-12"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="text-right mt-2">
              <button className="text-sm text-gray-600 hover:underline">
                Esqueceu a senha?
              </button>
            </div>

            <button
              onClick={() => setCurrentScreen("success")}
              className="w-full bg-[#004D40] text-white rounded-2xl py-3 mt-6 font-medium hover:bg-[#00695C] transition-colors"
            >
              Entrar
            </button>

            <div className="mt-8 space-y-4">
              <button className="w-full bg-white flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-3xl hover:bg-gray-50 transition-colors">
                <img src="public/google.png" alt="Google" className="w-5 h-5" />
                <span className="text-gray-700">Continue com Google</span>
              </button>

              <button className="w-full bg-white flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-3xl hover:bg-gray-50 transition-colors">
                <img
                  src="public/logotipo-da-apple.png"
                  alt="Apple"
                  className="w-5 h-5"
                />
                <span className="text-gray-700">Continue com Apple</span>
              </button>
            </div>
          </div>
        );

      case "success":
        return (
          <div className="w-full max-w-md px-6 text-center">
            <div className="mb-12">
              <img
                src="/public/logo.png"
                alt="DINEE"
                className="h-12 mx-auto"
              />
            </div>

            <div className="flex animate-bounce justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-[#004D40] flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-2">Sucesso!</h2>
            <p className="text-gray-600 mb-8">
              Você fez login como administrador,
              <br />
              somente você tem o acesso.
            </p>

            <button
              onClick={() => setCurrentScreen("login")}
              className="w-full bg-[#004D40] text-white rounded-lg py-3 font-medium hover:bg-[#00695C] transition-colors"
            >
              Entrar
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {renderScreen()}
    </div>
  );
}

export default App;
