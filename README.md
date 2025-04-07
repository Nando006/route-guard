# 🔐 TokenValidator

O **TokenValidator** é um componente React que simula a proteção de rotas privadas com base em um cookie de autenticação (`autenticado`). Ele verifica se o usuário está autenticado e redireciona para a página de login (`/`) caso contrário.

## ✅ Funcionalidades

- Valida automaticamente ao carregar o componente
- Valida novamente a cada **30 segundos**
- Exibe animações visuais enquanto valida
- Permite validação manual ao clicar no robô
- Redireciona para `/` se o usuário não estiver autenticado
- Usa `alert()` para avisos simples (sem dependência de libs externas)

## 🧪 Simulação de API

A função `apiValidateSimulation` simula a validação de sessão, checando se o cookie `autenticado` está presente no navegador.

```ts
// Exemplo de retorno
return { success: true, message: "Usuário autenticado" };
```

📁 Estrutura visual
O componente usa um robô animado (baseado em CSS do uiverse.io) para indicar:

Validação em andamento: robô em modo "alerta"

Não autenticado: robô com olhos vermelhos

Autenticado: robô normal

📂 Arquivos relacionados
TokenValidator.tsx – Componente principal

apiValidateSimulation.ts – Simulação da validação via cookie

subaashbala.css – Estilos visuais do robô (inclui variantes de estado)
