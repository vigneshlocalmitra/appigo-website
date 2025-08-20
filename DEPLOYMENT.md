# 🚀 Appigo Website Deployment Guide

## 📦 What's Ready

✅ **Production website built** and optimized  
✅ **Deployment package created** (`appigo-website.zip`)  
✅ **Git repository initialized** with deployment script  
✅ **SSH deployment setup** for secure updates  

## 🌐 Deploy to Your Hosting

### **Option 1: SSH Deployment (Recommended)**

**Prerequisites:**
1. **Add this SSH public key to your hosting server:**
   ```
   ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCpJ4cD7kPG0j/BYrpqeSjXJf0ZSTAxfdUoJDT2trIYVJrennDj7VxxBPgE7fd5ncllivQfyTErf7/+pq5iOBp6ZCz1c4me5m5FpKvR9vQTnELwQTSyqjkPtBpoGdK4RhmRgzSpvgMITno+ueNSmCkH6XHYaxHuvBnGElgUV0KO/9W/ZnwZOokkV+4yWH8tZGUPXbHFtfjCiHN9JgNWkNzKeVN+RvNAodKIA+53y7RfRxJpqXmejIwVlv1Q/+iVPIOoMMe8a75fjEogStOQkw5e6zhi8vPqU4xfpO8aZ6C7ZzJ3JnnCXXkF9wLxPSgOPw9vnfk5WoMiEAPT7naHsg6fjHQe9qlESaDV0UBpy4KpO55M3tiazpn197rmhz8qwcMOd4WEH7XWRsfecp0JYAZolJYbikoDKJOfJWrbIDnaGneOQp1rURhOK2vKb2gI2Lm+ngJEdNvb56HjDbugsPTww+4+6xY2k6KyOf36zJ/h4hB7eRY1JCnpFgGN3timC3xGqyw3yeIP4ps0Og6N0gMdZVg/MJwaR3+KB9ZbIYIJ4KkttKrMDkYMPmdrrQab5Dv/QOceRYT/0xWZHG12puGlMQe5BRvuFxI7rRhVVKWBea1XCKi2ahyL4PyvWseawZVXC2bfIYadmY/HXK8RegozSQ/dEe355YRmZReKWq2tvQ== appigo-deployment@localhost
   ```

**Deploy:**
```bash
# Run SSH deployment script
./deploy-ssh.sh
```

### **Option 2: Manual Upload via cPanel**

**Step 1: Access Your Hosting Panel**
- **URL:** https://145.223.20.147:8090/websites/appigo.in
- **Username:** admin
- **Password:** LocalMitra@1998

**Step 2: Upload Website Files**
1. **Find File Manager** in your hosting panel
2. **Navigate to `public_html`** folder
3. **Upload `appigo-website.zip`**
4. **Extract the zip file** in `public_html`

**Step 3: Your Website is Live!**
- **Domain:** appigo.in
- **Status:** Live and accessible worldwide

## 🔄 Future Updates

### **Using SSH for Updates (Recommended):**
```bash
# Make changes to your website
git add .
git commit -m "Update website content"

# Deploy updates via SSH
./deploy-ssh.sh
```

### **Using Manual Upload:**
```bash
# Make changes and rebuild
npm run build

# Create new deployment package
./deploy.sh

# Upload new appigo-website.zip to hosting
```

## 🛠️ Technical Details

- **Framework:** React + TypeScript + Vite
- **UI Components:** Shadcn UI
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Hosting:** Hostinger VPS
- **Deployment:** SSH + Git

## 🔑 SSH Setup

**SSH Key Location:** `~/.ssh/appigo_deploy`
**SSH Config:** `.ssh-config` file included
**Server:** 145.223.20.147:22

## 📞 Need Help?

The AI assistant can help you with:
- Deployment issues
- SSH key setup
- Website customization
- Git setup and management
- Future updates and maintenance

---

**Your Appigo website is ready to go live! 🎉**
