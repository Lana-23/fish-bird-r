# Fish & Bird Observer - Git Quick Start

## 🚀 Quick Git Setup

### 1. Run the Git Setup Script

```bash
cd ../Projects/fish-bird-observer
./setup-git.sh
```

This script will:
- Check if Git is already configured
- Help you connect to GitHub, GitLab, Bitbucket, or custom repository
- Test the connection to the remote repository

### 2. Manual Git Setup (Alternative)

#### Initialize Git (if not done)
```bash
git init
git add .
git commit -m "Initial commit: Fish & Bird Observer Telegram Mini App"
```

#### Connect to GitHub
```bash
# Replace with your actual username and repo name
git remote add origin https://github.com/your-username/your-repo-name.git
```

#### Connect to GitLab
```bash
# Replace with your actual username and repo name
git remote add origin https://gitlab.com/your-username/your-repo-name.git
```

#### Connect to Bitbucket
```bash
# Replace with your actual username and repo name
git remote add origin https://your-username@bitbucket.org/your-username/your-repo-name.git
```

### 3. Push to Remote Repository

```bash
# First push (set upstream)
git push -u origin master

# Subsequent pushes
git push
```

## 📋 Common Git Commands

### Basic Commands
```bash
# Check status
git status

# Add files to staging
git add .
git add filename

# Commit changes
git commit -m "Your commit message"

# Push to remote
git push
git push origin master

# Pull from remote
git pull
git pull origin master

# View commit history
git log --oneline
git log --graph --oneline
```

### Branch Management
```bash
# List branches
git branch

# Create new branch
git branch feature-name
git checkout -b feature-name

# Switch branches
git checkout branch-name
git switch branch-name

# Delete branch
git branch -d branch-name

# Push branch to remote
git push origin branch-name
git push -u origin branch-name  # First time
```

### Remote Repository
```bash
# View remote repositories
git remote -v

# Add remote repository
git remote add origin https://github.com/username/repo.git

# Remove remote repository
git remote remove origin

# Update remote URL
git remote set-url origin https://github.com/username/repo.git
```

## 🔄 Workflow for Development

### 1. Before Starting Work
```bash
# Pull latest changes
git pull origin master
```

### 2. Create Feature Branch
```bash
# Create and switch to new branch
git checkout -b feature/your-feature-name

# Or create branch first, then switch
git branch feature/your-feature-name
git checkout feature/your-feature-name
```

### 3. Make Changes
```bash
# Make your changes to files

# Check status
git status

# Add changes to staging
git add .

# Commit changes
git commit -m "Add your feature description"
```

### 4. Push to Remote
```bash
# Push to remote (first time for branch)
git push -u origin feature/your-feature-name

# Subsequent pushes
git push
```

### 5. Create Pull Request
1. Go to your GitHub/GitLab repository
2. Create a new Pull Request from your feature branch
3. Describe your changes
4. Request review if needed

### 6. Merge and Clean Up
```bash
# After PR is merged, update master
git checkout master
git pull origin master

# Delete local feature branch
git branch -d feature/your-feature-name

# Delete remote feature branch
git push origin --delete feature/your-feature-name
```

## 🎯 Best Practices

### Commit Messages
- Use clear, descriptive commit messages
- Follow conventional commit format:
  ```
  feat: add new feature
  fix: fix bug in component
  docs: update documentation
  style: format code
  refactor: refactor code structure
  test: add tests
  chore: maintenance tasks
  ```

### Branch Naming
- Use descriptive branch names
- Follow naming conventions:
  - `feature/feature-name`
  - `bugfix/issue-description`
  - `hotfix/critical-fix`
  - `docs/documentation-update`

### Code Review
- Always create Pull Requests for significant changes
- Review code before merging
- Use GitHub/GitLab review features

## 🔧 Troubleshooting

### Common Issues

#### Permission Denied
```bash
# Check SSH key setup
ssh -T git@github.com

# Generate SSH key if needed
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

#### Remote Repository Not Found
```bash
# Check remote URL
git remote -v

# Update remote URL if needed
git remote set-url origin https://github.com/username/repo.git
```

#### Merge Conflicts
```bash
# Pull with rebase to avoid merge commits
git pull --rebase origin master

# Resolve conflicts manually, then:
git add .
git rebase --continue
```

#### Accidental Commits to Master
```bash
# Create new branch with your changes
git branch feature-name

# Reset master to before your changes
git reset HEAD~1 --hard

# Switch to feature branch
git checkout feature-name

# Push to remote
git push -u origin feature-name
```

## 📚 Additional Resources

- **[Git Documentation](https://git-scm.com/doc)**
- **[GitHub Guides](https://docs.github.com/en)**
- **[GitLab Documentation](https://docs.gitlab.com/)**
- **[Bitbucket Documentation](https://support.atlassian.com/bitbucket-cloud/)**

## 🤝 Collaboration

### Team Workflow
1. **Fork the repository** (if contributing to open source)
2. **Clone your fork**
3. **Create feature branch**
4. **Make changes and commit**
5. **Push to your fork**
6. **Create Pull Request**

### Code Style
- Follow existing code style
- Use ESLint for JavaScript/TypeScript
- Use Prettier for formatting
- Run tests before pushing

### Issue Tracking
- Use GitHub Issues for bug reports
- Use GitHub Projects for task management
- Reference issues in commit messages: `fixes #123`

---

**Note**: This guide covers the basics of Git workflow for the Fish & Bird Observer project. For more advanced Git features, refer to the official Git documentation.