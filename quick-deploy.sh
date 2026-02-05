#!/bin/bash

# Quick Deployment Script for Fish & Bird Observer
# This script provides a simple way to deploy to Vercel

echo "🚀 Fish & Bird Observer - Quick Deployment"
echo "=========================================="

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
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

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_error "Vercel CLI is not installed"
    echo "Please install it with: npm install -g vercel"
    exit 1
fi

print_status "Vercel CLI found"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found"
    echo "Please run this script from the project root directory"
    exit 1
fi

print_status "Project structure verified"

# Check if we're logged into Vercel
if ! vercel whoami &> /dev/null; then
    print_warning "Not logged into Vercel. Please log in first."
    vercel login
fi

print_status "Logged into Vercel"

# Build the project
echo "📦 Building project..."
if npm run build; then
    print_status "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Deploy to Vercel
echo "🌍 Deploying to Vercel..."
if vercel --prod; then
    print_status "Deployment successful!"
    echo ""
    echo "🎉 Your app is now live on Vercel!"
    echo ""
    echo "Next steps:"
    echo "1. Copy your Vercel URL"
    echo "2. Configure your Telegram bot with the new URL"
    echo "3. Verify domain in Telegram Bot settings"
    echo "4. Test the Mini App in Telegram"
    echo ""
    echo "For detailed instructions, see README-DEPLOY.md"
else
    print_error "Deployment failed"
    exit 1
fi