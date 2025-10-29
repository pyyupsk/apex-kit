# Contributing to Apex Kit ⛰️

First off, thank you for considering contributing to Apex Kit! We value your time and effort. Your contributions help make Apex Kit better for everyone aiming for peak performance and developer experience.

This document provides guidelines for contributing to the project. Please feel free to propose changes to this document in a pull request.

## How Can I Contribute?

There are many ways to contribute, including:

- **Reporting Bugs:** Identifying and reporting issues you encounter.
- **Suggesting Enhancements:** Proposing new features or improvements to existing ones.
- **Writing Code:** Contributing bug fixes or new features via Pull Requests.
- **Improving Documentation:** Fixing typos, clarifying explanations, or adding new sections to the README or other documentation.

## Reporting Bugs

If you find a bug, please ensure the bug was not already reported by searching on GitHub under [Issues](https://github.com/pyyupsk/apex-kit/issues).

If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/pyyupsk/apex-kit/issues/new). Be sure to include:

- A **clear and descriptive title**.
- A **detailed description** of the issue, including steps to reproduce it.
- Information about your **environment** (e.g., Node.js version, OS, browser).
- The **Apex Kit version** you are using (if applicable).
- Any relevant **code snippets, logs, or screenshots**.

## Suggesting Enhancements

If you have an idea for an enhancement or a new feature:

1. Search the [Issues](https://github.com/pyyupsk/apex-kit/issues) and [Discussions](https://github.com/pyyupsk/apex-kit/discussions) to see if the idea has already been suggested.
2. If not, open a new issue or start a discussion.
3. Clearly describe the proposed enhancement, why it's needed (use cases), and potential implementation ideas.

## Your First Code Contribution

Unsure where to begin? You can start by looking through issues tagged `good first issue` or `help wanted`.

**Setting Up Your Development Environment:**

Follow the instructions in the main [README.md](./README.md#🚀-getting-started) to clone the repository and install dependencies using `bun install`.

## Pull Request Process

When you're ready to contribute code:

1. **Fork the repository:** Click the "Fork" button on the top right of the [Apex Kit repository page](https://github.com/pyyupsk/apex-kit).
2. **Clone your fork:** `git clone https://github.com/pyyupsk/apex-kit.git`
3. **Create a feature branch:** `git checkout -b feature/your-amazing-feature` (replace `your-amazing-feature` with a descriptive name).
4. **Make your changes:** Implement your fix or feature.
5. **Ensure code quality:**
   - Run the linter: `bun run lint`
   - Run type checks: `bun run typecheck`
   - Make sure all checks pass before committing.
6. **Commit your changes:** Use clear and descriptive commit messages. Reference the issue number if your PR addresses a specific issue (e.g., `feat: add x feature (fixes #123)`).

   ```bash
   git add .
   git commit -m "feat: describe your change clearly"
   ```

7. **Push to your branch:** `git push origin feature/your-amazing-feature`
8. **Open a Pull Request:** Go to the original Apex Kit repository and click "New pull request". Compare your feature branch with the `main` branch of the original repository.
9. **Describe your PR:** Provide a clear title and description for your pull request, explaining the changes and linking any relevant issues (e.g., `closes #123`).
10. **Address feedback:** Respond to any code review comments or suggestions.

## Code Style

This project uses Prettier and ESLint to enforce code style and quality. Configuration files are included in the repository. Please run `bun run lint` and `bun run format` before committing changes to ensure your code adheres to the project's style guidelines. Most editors can be configured to format code automatically on save using these tools.

Thank you for contributing!
