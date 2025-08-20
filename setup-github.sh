#!/bin/bash

# 🚀 GITHUB SETUP AUTOMATION SCRIPT
# This script will connect your local repository to GitHub

echo "🚀 GITHUB SETUP AUTOMATION SCRIPT"
echo "=================================="
echo ""

# Check if we're in the right directory
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a Git repository!"
    echo "Please run this script from your project directory."
    exit 1
fi

echo "✅ Found Git repository"
echo ""

# Get current Git status
echo "📊 Current Git Status:"
git status --short
echo ""

# Function to setup GitHub remote
setup_github() {
    local repo_url=$1
    
    echo "🔗 Setting up GitHub connection..."
    echo "Repository URL: $repo_url"
    echo ""
    
    # Remove existing remote if any
    git remote remove origin 2>/dev/null
    
    # Add new remote
    git remote add origin "$repo_url"
    
    # Verify remote
    echo "✅ Remote added successfully!"
    echo "📋 Current remotes:"
    git remote -v
    echo ""
    
    # Push to GitHub
    echo "🚀 Pushing code to GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 SUCCESS! Your code is now on GitHub!"
        echo "🌐 Visit: $repo_url"
        echo ""
        echo "📋 Next steps:"
        echo "1. Go to your GitHub repository"
        echo "2. Add team members in Settings > Collaborators"
        echo "3. Set up branch protection rules"
        echo "4. Start collaborating!"
    else
        echo ""
        echo "❌ Error pushing to GitHub!"
        echo "Please check your repository URL and try again."
    fi
}

# Main setup process
echo "🎯 GITHUB REPOSITORY SETUP"
echo "============================"
echo ""
echo "📋 BEFORE RUNNING THIS SCRIPT:"
echo "1. Go to https://github.com"
echo "2. Sign in with your account"
echo "3. Create new repository: 'appigo-website'"
echo "4. Make it PUBLIC"
echo "5. Add README file"
echo "6. Copy the repository URL"
echo ""
echo "📝 Example repository URL:"
echo "   https://github.com/vigneshmg25dev/appigo-website.git"
echo ""

# Prompt for repository URL
read -p "🔗 Enter your GitHub repository URL: " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ No URL provided. Exiting."
    exit 1
fi

# Validate URL format
if [[ $repo_url =~ ^https://github\.com/[^/]+/[^/]+\.git$ ]]; then
    echo "✅ Valid GitHub URL format detected"
    echo ""
    setup_github "$repo_url"
else
    echo "❌ Invalid GitHub URL format!"
    echo "Expected format: https://github.com/username/repository.git"
    echo ""
    echo "Please check your URL and try again."
    exit 1
fi

echo ""
echo "🎯 SETUP COMPLETE!"
echo "Your Appigo website is now connected to GitHub!"
echo "You can now collaborate with your team!"
