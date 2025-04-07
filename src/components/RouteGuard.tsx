import "../subaashbala.css";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiValidateSimulation } from "./apiValidateSimulation";

export default function TokenValidator() {
  const [isValidating, setIsValidating] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const runValidation = useCallback(
    async (showAlerts = false, signal?: AbortSignal) => {
      setIsValidating(true);
      try {
        const result = await apiValidateSimulation(signal);

        if (!result.success) {
          if (showAlerts) {
            alert("Sessão inválida: " + result.message);
          }
          setIsAuthenticated(false);
          navigate("/");
        } else {
          if (showAlerts) {
            alert("Sessão válida. Você está logado.");
          }
          setIsAuthenticated(true);
        }
      } catch (err) {
        if (showAlerts && (err as any).name !== "AbortError") {
          alert("Erro na validação: " + (err as Error).message);
        }
        setIsAuthenticated(false);
      } finally {
        setIsValidating(false);
      }
    },
    [navigate]
  );

  useEffect(() => {
    const controller = new AbortController();
    runValidation(false, controller.signal);

    // Intervalo de revalidação a cada 30 segundos
    const intervalId = setInterval(() => {
      runValidation(false, controller.signal);
    }, 10_000);

    return () => {
      controller.abort();
      clearInterval(intervalId); // limpar o intervalo ao desmontar
    };
  }, [runValidation]);

  if (isAuthenticated === false) return null;
  if (isAuthenticated === null)
    return (
      <div className="">
        <div className="loader">
          <div className="modelViewPort">
            <div className="eva red ">
              <div className="head">
                <div className="eyeChamber red">
                  <div className="eye red"></div>
                  <div className="eye red"></div>
                </div>
              </div>
              <div className="body">
                <div className="hand red"></div>
                <div className="hand red"></div>
                <div className="scannerThing red"></div>
                <div className="scannerOrigin red"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <button
      onClick={() => runValidation(true)}
      className="cursor-pointer flex flex-col items-center"
      disabled={isValidating}
    >
      <div className="loader">
        <div className="modelViewPort">
          {isValidating ? (
            <div className="eva alert">
              <div className="head">
                <div className="eyeChamber alert">
                  <div className="eye alert"></div>
                  <div className="eye alert"></div>
                </div>
              </div>
              <div className="body">
                <div className="hand alert"></div>
                <div className="hand alert"></div>
                <div className="scannerThing alert"></div>
                <div className="scannerOrigin alert"></div>
              </div>
            </div>
          ) : (
            <div className="eva">
              <div className="head">
                <div className="eyeChamber">
                  <div className="eye"></div>
                  <div className="eye"></div>
                </div>
              </div>
              <div className="body">
                <div className="hand"></div>
                <div className="hand"></div>
                <div className="scannerThing"></div>
                <div className="scannerOrigin"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
