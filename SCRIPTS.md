# Fish & Bird Observer - Scripts Guide

## 📋 Available Scripts

This project includes several scripts to help with development, deployment, and Git management.

## 🚀 Deployment Scripts

### 1. Quick Deploy Script
**File**: `quick-deploy.sh`
**Purpose**: Fast deployment to Vercel with minimal setup

```bash
# Make executable (already done)
chmod +x quick-deploy.sh

# Run deployment
./quick-deploy.sh
```

**Features**:
- ✅ Checks Vercel CLI installation
- ✅ Verifies project structure
- ✅ Logs into Vercel if needed
- ✅ Builds the project
- ✅ Deploys to production
- ✅ Provides post-deployment instructions

### 2. Full Deploy Script
**File**: `deploy.sh`
**Purpose**: Complete deployment with detailed checks and error handling

```bash
# Run full deployment
./deploy.sh
```

**Features**:
- ✅ Comprehensive error checking
- ✅ Automatic project linking
- ✅ Detailed logging
- ✅ Post-deployment instructions
- ✅ Telegram Mini App setup guide

### 3. NPM Scripts
**File**: `package.json`

```bash
# Quick deployment via npm
npm run deploy          # Runs ./deploy.sh
npm run deploy:vercel   # Direct Vercel deployment
npm run deploy:vercel:preview  # Preview deployment
```

## 🐙 Git Management Scripts

### 1. Git Setup Script
**File**: `setup-git.sh`
**Purpose**: Interactive Git repository setup

```bash
# Make executable (already done)
chmod +x setup-git.sh

# Run Git setup
./setup-git.sh
```

**Features**:
- 🔄 Detects existing Git configuration
- 🏗️ Interactive provider selection (GitHub, GitLab, Bitbucket, Custom)
- 🔗 Automatically configures remote repository
- 🧪 Tests connection to remote repository
- 📝 Provides setup instructions

**Supported Providers**:
- **GitHub**: `https://github.com/username/repo.git`
- **GitLab**: `https://gitlab.com/username/repo.git`
- **Bitbucket**: `https://username@bitbucket.org/username/repo.git`
- **Custom**: Any Git-compatible URL

## 🛠️ Development Scripts

### 1. Development Server
```bash
# Start development server
npm run dev

# Preview production build
npm run preview

# Build for production
npm run build

# Run linting
npm run lint
```

### 2. Manual Git Commands
```bash
# Initialize Git (if not done)
git init
git add .
git commit -m "Initial commit"

# Connect to remote (manual)
git remote add origin https://github.com/username/repo.git

# Push to remote
git push -u origin master
```

## 📁 Script Locations

```
fish-bird-observer/
├── quick-deploy.sh      # Fast Vercel deployment
├── deploy.sh           # Full Vercel deployment
├── setup-git.sh        # Git repository setup
├── package.json        # NPM scripts
├── vercel.json         # Vercel configuration
└── .gitignore          # Git ignore rules
```

## 🎯 Usage Examples

### Complete Setup Workflow

#### 1. Initial Setup
```bash
# Navigate to project
cd ../Projects/fish-bird-observer

# Initialize Git
git init
git add .
git commit -m "Initial commit"

# Setup Git remote
./setup-git.sh

# Push to remote
git push -u origin master
```

#### 2. Development Workflow
```bash
# Start development
npm run dev

# Make changes to code

# Commit changes
git add .
git commit -m "feat: add new feature"
git push

# Create Pull Request on GitHub/GitLab
```

#### 3. Deployment Workflow
```bash
# Quick deployment
./quick-deploy.sh

# Or full deployment
./deploy.sh

# Or via npm
npm run deploy
```

### Provider-Specific Examples

#### GitHub Workflow
```bash
# 1. Create repository on GitHub first
# 2. Setup Git
./setup-git.sh
# Select option 1 (GitHub)
# Enter your GitHub username and repo name

# 3. Push to GitHub
git push -u origin master

# 4. Deploy to Vercel
./quick-deploy.sh
# Vercel will automatically connect to GitHub
```

#### GitLab Workflow
```bash
# 1. Create repository on GitLab first
# 2. Setup Git
./setup-git.sh
# Select option 2 (GitLab)
# Enter your GitLab username and repo name

# 3. Push to GitLab
git push -u origin master

# 4. Deploy to Vercel
./quick-deploy.sh
```

## 🔧 Script Customization

### Modifying Deployment Scripts

#### Custom Environment Variables
Edit `package.json` to add custom environment variables:

```json
{
  "scripts": {
    "deploy": "./deploy.sh",
    "deploy:staging": "VITE_ENV=staging ./deploy.sh",
    "deploy:production": "VITE_ENV=production ./deploy.sh"
  }
}
```

#### Custom Git Setup
Modify `setup-git.sh` to add custom providers or authentication methods:

```bash
# Add custom provider
case $provider in
    5)
        print_info "Custom provider setup"
        read -p "Enter your custom repository URL: " remote_url
        ;;
esac
```

## 🚨 Troubleshooting

### Common Issues

#### Permission Denied
```bash
# Make scripts executable
chmod +x *.sh
```

#### Vercel CLI Not Found
```bash
# Install Vercel CLI
npm install -g vercel

# Or use npm script
npx vercel --prod
```

#### Git Remote Already Exists
```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/username/repo.git
```

#### Build Failures
```bash
# Check for TypeScript errors
npm run build

# Check for linting errors
npm run lint

# Clean install
rm -rf node_modules package-lock.json
npm install
```

## 📚 Additional Resources

- **[Vercel Documentation](https://vercel.com/docs)**
- **[Git Documentation](https://git-scm.com/doc)**
- **[GitHub Actions](https://docs.github.com/en/actions)**
- **[GitLab CI/CD](https://docs.gitlab.com/ee/ci/)**

## 🤝 Contributing

### Adding New Scripts

1. **Create script file**:
   ```bash
   touch new-script.sh
   chmod +x new-script.sh
   ```

2. **Add to package.json** (if needed):
   ```json
   {
     "scripts": {
       "new-script": "./new-script.sh"
     }
   }
   ```

3. **Document in this file**:
   - Add description
   - Include usage examples
   - Add troubleshooting tips

### Best Practices

- **Use descriptive names**: `deploy-production.sh`, `setup-development.sh`
- **Include error handling**: Check for prerequisites and dependencies
- **Add logging**: Use colored output for better user experience
- **Document thoroughly**: Include usage examples and troubleshooting

---

**Note**: All scripts are designed to be user-friendly and include comprehensive error handling and logging.