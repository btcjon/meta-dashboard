# Meta Dashboard React App Development Plan

The end goal is to provide a user dashboard using real-time data provided by metaapi to display forex trading data based on metatrader 4.

To begin, we want to focus on displaying an positions/open trades table.

- [x] Initialize project with Create React App.
- [x] Install necessary dependencies:
  - [x] Install React Router for navigation.
  - [x] Install Axios for HTTP requests.
  - [x] Install Redux for state management.
  - [x] Install Material-UI for UI components.
- [x] Set up basic routing with React Router.
- [x] Implement real-time data for positions/open trades:
  - [x] Connect to MetaApi.
  - [x] Fetch open trades data.
  - [x] Update UI in real-time with fetched data.
- [x] Create `src/services/metaApiService.js` to handle MetaApi logic.
- [x] Create `src/pages/Dashboard.js` and `src/pages/Login.js` for page components.
- [x] Develop table component to display trades:
  - [x] Define columns for trade data. (Symbol, Type, Volume. Profit, Swap)
  - [x] Implement sorting functionality.
  - [x] Implement filtering functionality.
- [ ] Install and Customize 'Isomorphic' Template:
  - [x] Install the 'Isomorphic' template and dependencies.
  - [x] Run the template and review its features.
  - [ ] Plan the integration of existing code into the template.
          1. according to docs we simply need to use an existing table component.
          2. the starting template page has what appears to be ALL available components and display types. (should we duplicate the page so we have a backup to reference?)
  - [ ] Integrate API services from the existing project.
  - [ ] Customize components and pages with project-specific code.
  - [ ] Apply branding and styling to match the project's design.
  - [ ] Update routing and navigation to include existing routes.
  - [ ] Test the integrated application thoroughly.
  - [ ] Deploy the customized template.
  - [ ] Iterate based on user feedback and project requirements.

**Mark items as complete when they are done. Add/edit todo items as necessary.
