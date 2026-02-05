#!/bin/bash

# Fish & Bird Observer - Vercel Deployment Script

echo "🚀 Starting deployment to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed. Please install it first:"
    echo "   npm install -g vercel"
    echo "   or visit: https://vercel.com/docs/cli"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the project root."
    exit 1
fi

echo "✅ Vercel CLI found"
echo "📦 Building project..."

# Build the project
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build completed successfully"

# Deploy to Vercel
echo "🌍 Deploying to Vercel..."

# Check if we have a Vercel project linked
if [ -f ".vercel/project.json" ]; then
    echo "🔗 Using existing Vercel project configuration"
    vercel --prod
else
    echo "🆕 Creating new Vercel project"
    vercel --yes --name fish-bird-observer
fi

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo ""
    echo "🎉 Your app is now live on Vercel!"
    echo ""
    echo "Next steps for Telegram Mini App:"
    echo "1. Update your Telegram bot WebApp URL to the new Vercel URL"
    echo "2. Verify domain in Telegram Bot settings"
    echo "3. Test the Mini App in Telegram"
    echo ""
    echo "For more information, see README-TELEGRAM.md"
else
    echo "❌ Deployment failed. Please check the errors above."
    exit 1
fi