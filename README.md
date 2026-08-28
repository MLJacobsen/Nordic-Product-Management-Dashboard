# Task Dashboard

A task management application that allows users to create, organize, and filter tasks using a modern, responsive UI built with React.

> **Note:** This application is intended for demonstration purposes only and is not meant for production use.

## Features

- **Task Management**: Create, complete, and delete tasks
- **Task Tags**: Organize tasks with customizable tags
- **Task Lists**: Create multiple lists with custom filters
- **List Filters**: Filter tasks by tags or completion status
- **Animations**: Smooth transitions and animations using Framer Motion
- **Responsive Design**: Works on desktop and mobile devices
- **Interactive Annual Plan**: Browse Nordic Product Management documents by month, category, domicile, owner, legal status, and text

## Technology Stack

- **React**: Modern React with functional components and hooks
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for React
- **Vite**: Fast, modern build tool and development server
- **Vitest**: Testing framework compatible with Vite

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v10+)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-dashboard.git
   cd task-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app

## Annual plan and Microsoft Graph setup

The annual plan reads the latest `Document overview.xlsx` directly from SharePoint after delegated Microsoft Entra sign-in. It does not bundle or silently substitute workbook data in production.

1. Register a **Single-page application** in Microsoft Entra ID.
2. Add a Web platform redirect URI for local development: `http://localhost:3000/`.
3. Add the deployed GitHub Pages URI, including the repository base path, for example:
   `https://<organization>.github.io/Nordic-Product-Management-Dashboard/`.
4. Add the Microsoft Graph **delegated** permission `Files.ReadWrite`. Microsoft currently lists this as the least-privileged permission supported by the Excel `usedRange` API, although this app only performs reads. Grant consent according to your tenant policy.
5. Copy `.env.example` to `.env.local` and set the tenant ID, client ID, SharePoint hostname, site path, document library, workbook path, and optional worksheet name. Do not create or configure a client secret for this SPA.
6. Restart the Vite development server after changing environment values.

The default source configuration corresponds to:

```text
Host:      storebrand.sharepoint.com
Site:      /sites/NordiskProdukt
Library:   Felles
File:      /2 Governing Documents/Document overview.xlsx
Worksheet: Sheet1
```

`VITE_GRAPH_DRIVE_ID` can be used instead of `VITE_GRAPH_DRIVE_NAME`. If the workbook moves, update only the deployment variables or local environment file. Header names are matched defensively, but the workbook should retain a recognizable document/report column.

### GitHub Pages configuration

Set the matching `VITE_*` values as GitHub Actions **repository variables**. The deployment workflow injects them at build time and sets `VITE_BASE_PATH=/Nordic-Product-Management-Dashboard/`. The Entra redirect URI must exactly match the final Pages URL. Tenant and client IDs are public SPA configuration; never add credentials or a client secret.

### Explicit development sample mode

Set `VITE_ANNUAL_PLAN_SAMPLE_MODE=true` only when running the Vite development server to exercise the UI with clearly labelled sample records. Production builds ignore this flag. Authentication, Graph, or workbook errors are shown directly and never trigger a sample-data fallback.

### Available Scripts

- `npm start` - Start the development server
- `npm start:hydrated` - Start the development server with data hydration enabled
- `npm run build` - Build for production
- `npm run build:hydrated` - Build for production with data hydration enabled
- `npm run build:clean` - Build for production with data hydration explicitly disabled
- `npm run preview` - Preview the production build locally
- `npm run preview:hydrated` - Preview the production build with data hydration enabled
- `npm test` - Run tests with Vitest

### Data Hydration

The application supports pre-populating the app with sample data through an optional hydration process:

- Sample data is defined in `src/data/initialData.json`
- Hydration can be enabled/disabled using the `VITE_ENABLE_DATA_HYDRATION` environment variable
- Use the convenience scripts for development with hydration:
  - `npm run start:hydrated` - Development with sample data
  - `npm run build:hydrated` - Production build with sample data
  - `npm run build:clean` - Production build without sample data
- GitHub Actions deployment automatically enables hydration for the production build

## Architecture

### State Management

The application uses React Context for state management:

- **TaskContext**: Manages tasks state and operations (add, toggle, delete)
- **TagContext**: Manages tags and their relationships with tasks
- **ListContext**: Manages task lists and filtering logic

### UI Components

The application features several key components:
- **TaskList**: Renders a list of tasks
- **TaskItem**: Renders an individual task
- **TaskBoard**: Manages multiple task lists
- **TagManager**: Interface for creating and managing tags
- **GlobalTaskForm**: Form for creating new tasks
- **ListAddTask**: Form for adding tasks to specific lists
- **TaskListConfig**: Interface for configuring task lists

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
