[to go back](/README.md)

# Commit Guidelines and Best Practices
This document describes the essential conventions for ensuring clear and consistent commit messages, facilitating project development and collaboration.

## Commit Message Format:
Follow the format type: brief description for all commit messages. The description should be concise, in the imperative mood, and start with a capital letter.

### Examples:
 * feat: Adds new user authentication system
 * fix: Fixes typo on login page

### Recommended Practices
 * Atomic Commits: Each commit should be self-contained and focused on a single change. This simplifies code review and, if necessary, code reversion.
 * Detailed Body: If you need more context, use the commit body to provide a detailed explanation.
 * Review and Test: Review your code and run tests locally before pushing to the shared repository.
 * Git Hooks: Use Git hooks to automate checks and ensure commit messages follow the desired format.

### More types of Git commit messages:

**1. `feat:` - New feature**

* Used for introducing new functionality or features.
* Example:
	+ `feat: Implement new user authentication system`
	+ `feat: Add support for multiple languages`

**2. `fix:` - Bug fix**

* Used for fixing bugs or errors in the codebase.
* Examples:
	+ `fix: Fix typo in login page`
	+ `fix: perf: Optimize database queries for improved performance`
	+ `fix: test: Update unit tests to reflect new functionality`

**3. `refactor:` - Code refactoring**

* Used for improving the existing code structure, architecture, or design.
* Examples:
	+ `refactor: Simplify login function`
	+ `refactor: Extract common logic into separate module`
	+ `refactor: Improve code readability and organization`

**4. `docs:` - Documentation update**

* Used for updating documentation, such as README files, API documentation, or other supporting materials.
* Examples:
	+ `docs: Update API documentation to reflect new endpoints`
	+ `docs: Add example usage of new feature in README`
	+ `docs: Improve code comments and explanations`

**5. `style:` - Code formatting or styling change**

* Used for changing code style, formatting, or structure.
* Examples:
	+ `style: Consistent spacing and indentation throughout codebase`
	+ `style: Rename variables to follow consistent naming conventions`
	+ `style: Update code formatting to match team standards`

**6. `perf:` - Performance improvement**

* Used for optimizing the code to improve performance, scalability, or efficiency.
* Examples:
	+ `perf: Optimize database queries for improved performance`
	+ `perf: Implement caching mechanism for frequently accessed data`
	+ `perf: Improve rendering times by reducing DOM manipulation`

**7. `test:` - Test-related change**

* Used for adding, updating, or removing tests.
* Examples:
	+ `test: Add unit test for login function`
	+ `test: Update integration tests to reflect new functionality`
	+ `test: Remove unnecessary test cases`

**8. `chore:` - Miscellaneous task**

* Used for tasks that don't fit into other categories, such as updating dependencies, cleaning up the codebase, or running maintenance scripts.
* Examples:
	+ `chore: Update dependencies to latest versions`
	+ `chore: Clean up unused code and remove unnecessary files`
	+ `chore: Run automated tests and fix any failures`

**9. `ci:` - Continuous Integration update**

* Used for changes related to Continuous Integration (CI) pipelines, such as updating build scripts or configuration files.
* Examples:
	+ `ci: Update build script for new dependency`
	+ `ci: Configure CI pipeline to run on specific branch`
	+ `ci: Add automated testing to CI pipeline`

**10. `init:` - Initial setup**

* Used for the initial setup of a project, such as creating the repository, initializing version control, or setting up dependencies.
* Example:
	+ `init: Create new repository and initialize Git`

**11. `struct:` - Structural changes**

* Used for significant structural changes to the codebase, such as reorganizing modules or introducing a new architecture.
* Examples:
	+ `struct: Reorganize modules into separate packages`
	+ `struct: Introduce new microservices-based architecture`
	+ `struct: Update project structure to reflect changing requirements`

**12. `revert:` - Reverting a previous commit**

* Used for reverting a previous commit that was already pushed to the shared repository.
* Examples:
	+ `revert: Revert previous fix: typo in login page`
	+ `revert: Revert changes made in previous commit`

By using these commit message types, you can create a clear and organized commit history that makes it easy for others (and yourself!) to understand what changes have been made.