import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const criarCookie = () => {
    document.cookie = "autenticado=true; path=/";
    alert("Autenticação realizada com sucesso!");
  };

  const removerCookie = () => {
    document.cookie =
      "autenticado=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    alert("Cookie removido com sucesso!");
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen gap-4">
      <h1 className="text-2xl font-bold mb-4">Página Inicial</h1>

      <div className="flex gap-4">
        <button
          onClick={criarCookie}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Criar Cookie de Autenticação
        </button>

        <button
          onClick={removerCookie}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remover Cookie
        </button>
      </div>

      <button
        onClick={() => navigate("/rota-privada")}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        Ir para Rota Privada
      </button>
    </div>
  );
}
