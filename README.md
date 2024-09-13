## React Practice Project

### 🎯 Goal
I'm diving back into React after a year-long hiatus. Previously, I covered the basics with small examples, but now I'm aiming for something more substantial. This project is a simple, one-page TailwindCSS grid layout where I'll focus on practicing JSX, component creation, props, and hooks.
It's a simple page of a TailwindCSS grid of cells/cards but built with react and well-organized into react components.

### Running development server
At the root of the project:
- **CLI**: `npm init`
- **CLI**: `npm run dev`

### 🚀 Running the Production React Version with Node and Express

#### 1. Initialize the Project
At the root of the project:
- **CLI**: `npm init`

#### 2. Set Up JSON Server
- Open a terminal and navigate to the JSON server directory:
  - **CLI**: `cd backend-json-server`
- Start the JSON server:
  - **CLI**: `npx json-server db.json`

#### 3. Set Up and Run Node Server
- Open another terminal.
- Navigate to the Node server directory:
  - **CLI**: `cd backend-production-test-node` (if not already there)
- Initialize the Node server:
  - **CLI**: `npm init`
- Start the server:
  - **CLI**: `node index.js`

#### 4. 📝 Notes
- At first u would have no built production version of the react project. Also remember, changes in the React project code won't be visible until you rebuild the production version. Navigate to the root directory and run:
  - **CLI**: `npm run build`

## ⚛️React + Vite Setup

This template provides a streamlined setup for React with Vite, including Hot Module Replacement (HMR) and some ESLint rules.

### Available Plugins
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Uses [Babel](https://babeljs.io/) for Fast Refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Uses [SWC](https://swc.rs/) for Fast Refresh.
