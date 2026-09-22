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
- **Interactive Annual Plan**: Compare every document type in a full-year matrix, expand monthly workloads, switch to the annual wheel or sortable records explorer, and filter by category, domicile, owner, legal status, and text

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

## Publishing the annual plan workbook

`Document overview.xlsx` is the master for the annual plan. The dashboard publishes
a static snapshot of the `Overview` worksheet, so users can open the overview
immediately without Microsoft sign-in.

When a revised workbook is provided, regenerate the published snapshot:

```bash
npm run import:annual-plan -- "C:\path\to\Document overview.xlsx"
```

To use a worksheet other than `Overview`, pass its name as the second argument:

```bash
npm run import:annual-plan -- "C:\path\to\Document overview.xlsx" "Annual plan"
```

The import command preserves the worksheet cells and source row order in
`src/features/annual-plan/data/documentOverview.json`. The existing defensive
header parser maps fields by their names rather than fixed column positions.
Schedule parsing supports single months, monthly rows, ad-hoc rows, and
comma-separated month lists. `March, June, Sept, Dec` and `Quarter end` are
normalized to the same quarterly cadence. Review the result, run `npm test` and
`npm run build`, and deploy the new commit.

### Shared responsibility editing

The public dashboard always displays the bundled snapshot. Shared responsibility
editing is an optional authenticated enhancement: after Microsoft Entra sign-in,
the dashboard reads the current worksheet through Microsoft Graph, replaces the
displayed rows with the live values, and periodically revalidates them. A manual
**Refresh** control is also available. Background refresh pauses while a
responsibility edit is active.

Saving uses a persistent Graph Excel workbook session. Before writing, the app
re-reads the worksheet, verifies the source row identity and expected
responsibility, updates the actual column headed `Responsible`, and re-reads the
workbook to confirm the value. If another user changed the row, the app reports a
conflict instead of silently overwriting it. Multiple names are serialized as
`Name / Name`, while commas, slashes, semicolons, and ampersands remain accepted
on read.

Create a Microsoft Entra **single-page application** registration:

1. Add SPA redirect URIs:
   - `http://localhost:3000/`
   - `https://mljacobsen.github.io/Nordic-Product-Management-Dashboard/`
2. Add Microsoft Graph delegated permission `Files.ReadWrite.All`.
3. If the app resolves the SharePoint site by hostname/path, also add delegated
   `Sites.Read.All`. Configure `VITE_GRAPH_SITE_ID` to avoid this additional
   discovery permission.
4. Grant tenant admin consent where Storebrand policy requires it.
5. Ensure intended users have permission to edit the source workbook itself.
6. Do not create or store a client secret; browser SPAs use delegated PKCE.

Configure the values shown in `.env.example`. For GitHub Pages, create matching
GitHub Actions repository/environment variables and expose them to the Vite build:

```yaml
env:
  VITE_ENTRA_TENANT_ID: ${{ vars.VITE_ENTRA_TENANT_ID }}
  VITE_ENTRA_CLIENT_ID: ${{ vars.VITE_ENTRA_CLIENT_ID }}
  VITE_ENTRA_REDIRECT_URI: ${{ vars.VITE_ENTRA_REDIRECT_URI }}
  VITE_GRAPH_SITE_ID: ${{ vars.VITE_GRAPH_SITE_ID }}
  VITE_GRAPH_SHAREPOINT_HOSTNAME: ${{ vars.VITE_GRAPH_SHAREPOINT_HOSTNAME }}
  VITE_GRAPH_SITE_PATH: ${{ vars.VITE_GRAPH_SITE_PATH }}
  VITE_GRAPH_FILE_PATH: ${{ vars.VITE_GRAPH_FILE_PATH }}
  VITE_GRAPH_WORKSHEET: ${{ vars.VITE_GRAPH_WORKSHEET }}
```

If these values are absent, the production UI clearly remains read-only and does
not claim that responsibility changes can be saved. Client and tenant IDs are
configuration values rather than secrets, but credentials and tokens must never
be committed.

### GitHub Pages configuration

The deployment workflow sets
`VITE_BASE_PATH=/Nordic-Product-Management-Dashboard/` so generated asset URLs
work from the repository subpath.

### Available Scripts

- `npm start` - Start the development server
- `npm start:hydrated` - Start the development server with data hydration enabled
- `npm run build` - Build for production
- `npm run import:annual-plan -- <workbook.xlsx> [worksheet]` - Publish a workbook snapshot to the annual plan
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
