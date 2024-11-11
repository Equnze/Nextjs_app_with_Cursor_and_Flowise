## Project Overview
This project aims to create a custom UI chatbot interface for an LLM-based AI agent.
The chatbot interface will interact with an AI agent backend API, allowing users to
query the AI with natural language inputs and receive relevant responses. The UI will
be designed with a "TRON Legacy" style, focusing on a futuristic, neon-inspired visual
aesthetic. This project will leverage Next.js and React, prioritizing server-side API
interactions for secure data handling, and adhering to best practices for environment
variable management.
The core functionality will center around securely querying an API endpoint,
formatting the AI's responses for a conversational flow, and delivering a
user-friendly, visually engaging chatbot experience.
## Core Functionalities
### Chatbot UI Design
- Build an interactive and visually appealing chatbot UI based on the TRON Legacy
aesthetic.
- Ensure responsive design to provide an optimal experience across desktop and mobile
devices.
- Use components like animated message bubbles and a clean, minimalistic input area to
maintain an immersive user experience.
### API Integration
- Connect the chatbot interface to the AI agent backend using the provided API
endpoint.
- Example function for connecting to the Flowise API backend:
```javascript
async function query(data) {
    const response = await fetch(
        "http://localhost:3000/api/v1/prediction/a31d466e-7473-4d8f-9fd8-57b7a33c615b",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

query({"question": "Hey, how are you?"}).then((response) => {
    console.log(response);
});
```
### Current file structure
xxxx
### Additional requirements
1. **Project setup**
- All new components should go in `/components` at the root (not in the app folder)
and be named like `example-component.tsx` unless otherwise specified.
- All new pages go in `/app`.
- Use the Next.js 14 app router.
- All data fetching should be done in a server component and pass the data down as
props.
- Client components (using `useState`, hooks, etc.) require that `'use client'` is
set at the top of the file.
2. **Server-Side API Calls**
- All interactions with external APIs (e.g., FlowiseAI, OpenAI) should be performed
server-side.
- Create dedicated API routes in the `pages/api` directory for each external API
interaction.
- Client-side components should fetch data through these API routes, not directly
from external APIs.
3. **Environment Variables**
- Store all sensitive information (API keys, credentials) in environment variables.
- Use a `.env.local` file for local development and ensure it’s listed in
`.gitignore`.
- For production, set environment variables in the deployment platform (e.g.,
Vercel).
- Access environment variables only in server-side code or API routes.
4. **Error Handling and Logging**
- Implement comprehensive error handling in both client-side components and
server-side API routes.
- Log errors on the server-side for debugging purposes.
- Display user-friendly error messages on the client-side.
5. **Type Safety**
- Use TypeScript interfaces for all data structures, especially API responses.
- Avoid using `any` type; instead, define proper types for all variables and
function parameters.
6. **API Client Initialization**