# TaskFlow

TaskFlow is a simple productivity workspace application designed for efficient task management. It allows users to organize, filter, and track their tasks

## Installation & Setup

To get the project up follow these steps:

1. **Clone the repository**:
   git clone https://github.com/Jerry-Jefferson/TaskFlow.git

2. **Install dependencies**:
   npm install

3. **Start the mock backend server**:
   In one terminal window, run the JSON server:
   npm run server

4. **Start the development server**:
   In a second terminal window, run the Vite development server:
   npm run dev

5. **Open the application**:
   Open your browser and navigate to the port specified by Vite in the terminal

## Technologies Used

- **Core**: React 19, TypeScript
- **Routing**: React Router
- **Data Fetching**: TanStack React Query, Axios
- **Form Management**: React Hook Form, Zod
- **UI Library**: MUI
- **Build Tool**: Vite
- **Mock Backend**: json-server
- **Code Quality**: ESLint, Prettier

## Architecture Description

The architecture is **Feature-Based**, which organizes the code into distinct, manageable modules

The `src` directory is structured as follows:

- **`features/`**: Contains modules for specific business features (e.g., `tasks`). Feature directory encapsulates its own components, hooks, API calls
- **`pages/`**: Contains page-level components (e.g., `homePage`, `archivePage`, `trashPage`, `notFound`). Pages assemble the various feature modules and shared components into complete views and are tied to routing
- **`shared/`**: Contains reusable elements used across the entire application

## Technical Decisions

- **No Global State Manager**: Most data in the app is server state, which is handled with TanStack React Query. The remaining UI state (modals, selected task, active filter) is small and localized, managed with `useState` and `useSearchParams` directly in the components that need it

- **React Router**: React Router is used for client-side navigation between pages (home, archive, trash, 404). Also, the active task status filter is stored in the URL using `useSearchParams`. Thanks to that the user may share a link to a particular filter view

- **MUI**: MUI was chosen for its wide and optimized set of components

- **React Hook Form + Zod**: Zod schemas define form validation rules with full type safety. React Hook Form uses uncontrolled inputs to avoid unnecessary re-renders

- **TanStack React Query**: Used for server state management. Simplifies data fetching, caching, and cache invalidation

- **Centralized Error Handling**: A custom `ApiError` class and `handleApiError` utility provide error handling across all API calls. An `ErrorBoundary` component catches unexpected rendering errors at the UI level

- **json-server**: A quick, zero-coding mock REST API backend

- **Responsive Design**: The layout adapts between desktop and mobile breakpoints. On desktop, the sidebar renders on the left with full labels; on mobile, it collapses to the bottom of the screen with icon-only buttons

- **Environment Variables**: The API base URL is stored in a `.env` file (`VITE_API_URL`)
