#!/bin/bash

echo "🚀 Appigo Website Deployment Script"
echo "=================================="

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
echo ""
echo "📋 Next Steps:"
echo "1. Log into your hosting panel: https://145.223.20.147:8090/websites/appigo.in"
echo "2. Username: admin"
echo "3. Password: LocalMitra@1998"
echo "4. Find File Manager or Upload section"
echo "5. Upload appigo-website.zip to public_html folder"
echo "6. Extract the zip file"
echo ""
echo "🌐 Your website will be live at: appigo.in"
echo ""
echo "Need help? The AI assistant can guide you through each step!"
