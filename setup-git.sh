#!/bin/bash

# Fish & Bird Observer - Git Setup Script

echo "🐙 Git Repository Setup for Fish & Bird Observer"
echo "=============================================="

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if we're in a Git repository
if [ ! -d ".git" ]; then
    print_error "Not in a Git repository"
    echo "Please run this script from the project root directory"
    exit 1
fi

print_status "Git repository found"

# Check current remote
current_remote=$(git remote -v 2>/dev/null | head -1 | cut -d$'\t' -f1)

if [ -n "$current_remote" ]; then
    print_warning "Remote repository already configured: $current_remote"
    echo ""
    echo "Current remotes:"
    git remote -v
    echo ""
    read -p "Do you want to update the remote URL? (y/N): " update_remote
    
    if [[ $update_remote =~ ^[Yy]$ ]]; then
        echo ""
        echo "Available options:"
        echo "1. GitHub"
        echo "2. GitLab"
        echo "3. Bitbucket"
        echo "4. Custom URL"
        echo ""
        read -p "Select your Git provider (1-4): " provider
        
        case $provider in
            1)
                print_info "GitHub setup"
                read -p "Enter your GitHub username: " github_user
                read -p "Enter your repository name: " repo_name
                remote_url="https://github.com/$github_user/$repo_name.git"
                ;;
            2)
                print_info "GitLab setup"
                read -p "Enter your GitLab username or group: " gitlab_user
                read -p "Enter your repository name: " repo_name
                remote_url="https://gitlab.com/$gitlab_user/$repo_name.git"
                ;;
            3)
                print_info "Bitbucket setup"
                read -p "Enter your Bitbucket username: " bitbucket_user
                read -p "Enter your repository name: " repo_name
                remote_url="https://$bitbucket_user@bitbucket.org/$bitbucket_user/$repo_name.git"
                ;;
            4)
                print_info "Custom URL setup"
                read -p "Enter your remote repository URL: " remote_url
                ;;
            *)
                print_error "Invalid option"
                exit 1
                ;;
        esac
        
        # Update existing remote
        git remote set-url origin "$remote_url"
        print_status "Remote URL updated: $remote_url"
        
    else
        print_info "Keeping existing remote configuration"
        exit 0
    fi
else
    print_info "No remote repository configured"
    echo ""
    echo "Available options:"
    echo "1. GitHub"
    echo "2. GitLab"
    echo "3. Bitbucket"
    echo "4. Custom URL"
    echo ""
    read -p "Select your Git provider (1-4): " provider
    
    case $provider in
        1)
            print_info "GitHub setup"
            read -p "Enter your GitHub username: " github_user
            read -p "Enter your repository name: " repo_name
            remote_url="https://github.com/$github_user/$repo_name.git"
            ;;
        2)
            print_info "GitLab setup"
            read -p "Enter your GitLab username or group: " gitlab_user
            read -p "Enter your repository name: " repo_name
            remote_url="https://gitlab.com/$gitlab_user/$repo_name.git"
            ;;
        3)
            print_info "Bitbucket setup"
            read -p "Enter your Bitbucket username: " bitbucket_user
            read -p "Enter your repository name: " repo_name
            remote_url="https://$bitbucket_user@bitbucket.org/$bitbucket_user/$repo_name.git"
            ;;
        4)
            print_info "Custom URL setup"
            read -p "Enter your remote repository URL: " remote_url
            ;;
        *)
            print_error "Invalid option"
            exit 1
            ;;
    esac
    
    # Add remote
    git remote add origin "$remote_url"
    print_status "Remote repository added: $remote_url"
fi

echo ""
print_info "Testing connection to remote repository..."

# Test connection
if git ls-remote origin &> /dev/null; then
    print_status "Successfully connected to remote repository"
else
    print_warning "Cannot connect to remote repository"
    echo ""
    echo "This might be because:"
    echo "1. The repository doesn't exist yet"
    echo "2. You need to create the repository first"
    echo "3. Authentication is required"
    echo ""
    echo "To create a new repository, visit:"
    case $provider in
        1)
            echo "https://github.com/new"
            ;;
        2)
            echo "https://gitlab.com/projects/new"
            ;;
        3)
            echo "https://bitbucket.org/repo/create"
            ;;
        4)
            echo "Visit your Git provider's website"
            ;;
    esac
    echo ""
    echo "After creating the repository, run this script again"
fi

echo ""
print_info "Git setup complete!"
echo ""
echo "Next steps:"
echo "1. Create the remote repository if it doesn't exist"
echo "2. Push to remote: git push -u origin master"
echo "3. Set up SSH keys if using SSH URLs"
echo ""
echo "For GitHub, you can also use:"
echo "git remote add origin git@github.com:$github_user/$repo_name.git"