export const apiValidateSimulation = async (signal?: AbortSignal) => {
  await new Promise((res) => setTimeout(res, 500));

  const cookies = document.cookie.split(";");
  const autenticadoCookie = cookies.find((cookie) =>
    cookie.trim().startsWith("autenticado=")
  );

  if (!autenticadoCookie) {
    return { success: false, message: "Usuário não autenticado" };
  }

  return { success: true, message: "Usuário autenticado" };
};
