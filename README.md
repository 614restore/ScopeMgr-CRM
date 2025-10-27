# ScopeMgr - Professional Contractor CRM App

**ScopeMgr** is a comprehensive Customer Relationship Management (CRM) application specifically designed for contractors. Built with React/TypeScript and Capacitor for iOS deployment, it provides a complete solution for managing customers, projects, documents, and field operations.

## 🚀 Features

### Customer Management
- ✅ **Customer Database**: Complete customer profiles with contact info, insurance details, and project history
- ✅ **Smart Search & Filtering**: Quickly find customers with advanced search capabilities
- ✅ **Customer Notes**: Multi-user note system for team collaboration
- ✅ **Project Tracking**: Link multiple projects to customers with status tracking

### Document Management
- ✅ **Digital Signatures**: Native signature capture for contracts and agreements
- ✅ **Document Templates**: Pre-built legal documents (Contingency Agreement, Right to Cancel, Certificate of Completion)
- ✅ **PDF Generation**: Automatic PDF creation with signatures and company branding
- ✅ **Document Status Tracking**: Monitor signature status and completion dates

### Field Operations
- ✅ **Mobile-First Design**: Optimized for iOS devices with native mobile experience
- ✅ **Camera Integration**: Native camera access for before/after photos and documentation
- ✅ **Photo Albums**: Organized photo management with automatic categorization
- ✅ **GPS Location**: Automatic location tagging for job sites
- ✅ **Offline Capability**: Works without internet connection, syncs when available

### Reporting & Analytics
- ✅ **Before/After Reports**: Professional reports with photo comparisons
- ✅ **Inspection Reports**: Detailed inspection documentation with photos and notes
- ✅ **Project Timeline**: Visual project progress tracking
- ✅ **Export Options**: PDF and sharing capabilities

### Team Management
- ✅ **User Roles**: Customizable permission system for different team members
- ✅ **Company Profiles**: Multi-company support with individual branding
- ✅ **Team Calendar**: Shared scheduling and appointment management
- ✅ **Task Assignment**: Assign projects and tasks to team members

## 🛠 Technology Stack

- **Frontend**: React 18+ with TypeScript
- **UI Framework**: Radix UI components with Tailwind CSS
- **Mobile**: Capacitor 7 for native iOS functionality
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Build Tool**: Vite 6 for fast development and building
- **State Management**: React Context API with custom hooks
- **Routing**: React Router DOM with hash routing for mobile compatibility

## 📱 Mobile Features

### Native iOS Integration
- **Camera Access**: Native camera integration with photo permissions
- **File System**: Direct access to device storage for photo management
- **Haptic Feedback**: Native touch feedback for better user experience
- **Status Bar**: Automatic status bar styling and safe area handling
- **Splash Screen**: Professional app launch experience
- **Geolocation**: GPS integration for job site tracking

### Mobile-Optimized UI
- **Touch-First Design**: All interactions optimized for mobile touch
- **Safe Area Support**: Proper handling of iPhone notches and home indicators
- **Responsive Layout**: Adapts perfectly to all screen sizes
- **Gesture Support**: Native swipe and touch gestures
- **Keyboard Handling**: Smart keyboard avoidance and input management

## 🏗 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (Radix UI based)
│   ├── forms/          # Form components and validation
│   └── charts/         # Data visualization components
├── lib/                # Core application logic
│   ├── contexts/       # React Context providers
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API and external service integrations
│   └── utils/          # Utility functions
├── styles/             # Global styles and Tailwind configuration
└── types/              # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn package manager
- Xcode 14+ (for iOS development)
- iOS Simulator or physical iOS device

### Installation

```bash
# Clone the repository
git clone https://github.com/614restore/ScopeMgr-CRM.git
cd ScopeMgr-CRM

# Install dependencies
npm install

# Start development server
npm run dev
```

### iOS Development

```bash
# Build and sync to iOS
npm run ios:sync

# Open in Xcode
npm run ios:open

# Complete build and open (combines both steps)
npm run ios
```

### Firebase Setup (Optional)

The app works in demo mode by default. For production use:

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication, Firestore, and Storage
3. Download `GoogleService-Info.plist` for iOS
4. Add your Firebase configuration to the app

## 📋 Recent Updates

### ✅ Customer Management System Fixed
- Fixed customer ID generation consistency
- Implemented robust authentication fallbacks
- Added comprehensive debug logging
- Enhanced customer list with loading states

### ✅ iOS Build Configuration
- Resolved User Script Sandboxing issues
- Optimized Capacitor configuration
- Fixed camera and location permissions
- Enhanced mobile UI responsiveness

### ✅ Development Experience
- Added demo mode for testing without Firebase
- Implemented comprehensive error boundaries
- Enhanced development debugging tools
- Streamlined build and deployment process

## 🧪 Testing

The app includes comprehensive testing capabilities:

```bash
# Run in iOS Simulator
npm run ios

# Test customer creation and management
# 1. Navigate to "Add Customer"
# 2. Fill in customer details
# 3. Save customer
# 4. Verify customer appears in customer list
# 5. Click customer to view details
```

## 🚢 Deployment

### iOS App Store
1. Complete Xcode configuration
2. Add App Store provisioning profiles
3. Build for release in Xcode
4. Upload to App Store Connect

### Web Deployment
```bash
# Build for production
npm run build

# Deploy build folder to your hosting service
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Check the documentation in the `/docs` folder
- Review the troubleshooting guides in the project

## 🎯 Roadmap

- [ ] Android support with Capacitor
- [ ] Advanced analytics and reporting
- [ ] Integration with accounting software
- [ ] Advanced team collaboration features
- [ ] API for third-party integrations
- [ ] Desktop application version

---

**Built with ❤️ for contractors who need powerful, mobile-first CRM tools.**