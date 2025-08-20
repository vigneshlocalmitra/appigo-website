#!/bin/bash

echo "🚀 Appigo Website SSH Deployment Script"
echo "======================================"

# Configuration
HOST="145.223.20.147"
PORT="22"
USER="appig7958"
REMOTE_PATH="/home/appigo.in/public_html"
SSH_KEY="~/.ssh/appigo_deploy"

# Check if we have the production build
if [ ! -d "dist" ]; then
    echo "❌ Production build not found. Building first..."
    npm run build
fi

echo "✅ Production build ready"

# Create deployment package
echo "📦 Creating deployment package..."
cd dist
zip -r ../appigo-website.zip .
cd ..

echo "✅ Deployment package created: appigo-website.zip"

# Deploy via SSH
echo "🚀 Deploying to server via SSH..."

# Test SSH connection
echo "🔑 Testing SSH connection..."
if ssh -i $SSH_KEY -p $PORT -o ConnectTimeout=10 -o BatchMode=yes $USER@$HOST "echo 'SSH connection successful'"; then
    echo "✅ SSH connection successful"
    
    # Upload files
    echo "📤 Uploading website files..."
    scp -i $SSH_KEY -P $PORT appigo-website.zip $USER@$HOST:$REMOTE_PATH/
    
    if [ $? -eq 0 ]; then
        echo "✅ Files uploaded successfully"
        
        # Extract and deploy
        echo "🔧 Deploying website..."
        ssh -i $SSH_KEY -p $PORT $USER@$HOST "cd $REMOTE_PATH && unzip -o appigo-website.zip && rm appigo-website.zip && echo 'Website deployed successfully!'"
        
        if [ $? -eq 0 ]; then
            echo "🎉 Website deployed successfully!"
            echo "🌐 Your website is now live at: appigo.in"
        else
            echo "❌ Deployment failed during extraction"
        fi
    else
        echo "❌ File upload failed"
    fi
else
    echo "❌ SSH connection failed"
    echo ""
    echo "📋 Manual Deployment Required:"
    echo "1. Add this SSH public key to your hosting server:"
    echo ""
    cat ~/.ssh/appigo_deploy.pub
    echo ""
    echo "2. Then run this script again"
fi

echo ""
echo "📖 For manual deployment, see DEPLOYMENT.md"
