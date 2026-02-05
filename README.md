# Fish & Bird Observer

A beautiful Telegram Mini App for tracking wildlife observations and discovering fish and bird species.

![Fish & Bird Observer](https://img.shields.io/badge/Telegram%20Mini%20App-%F0%9F%90%9F%F0%9F%A6%A2-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-blue)

## 🌟 Features

### Core Functionality
- **🐟 Fish Database**: Browse detailed information about various fish species
- **🦅 Bird Database**: Explore comprehensive bird species data
- **🔍 Search & Filter**: Real-time search and category filtering
- **📝 Observation Tracking**: Add and manage wildlife observations
- **📊 Statistics**: View observation trends and statistics

### Telegram Mini App Features
- **📱 Native Integration**: Seamless Telegram WebApp experience
- **👤 User Detection**: Automatic Telegram user recognition
- **🎨 Theme Adaptation**: Adapts to Telegram's theme colors
- **📳 Haptic Feedback**: Native Telegram haptic responses
- **🎯 Context Actions**: Smart main button for quick actions
- **🔙 Native Navigation**: Telegram back button integration

### Design & Experience
- **🌊 Wave Design**: Beautiful gradient wave backgrounds
- **💎 Glassmorphism**: Modern glass-like UI effects
- **📱 Mobile-First**: Optimized for mobile devices
- **🌍 Multi-language**: English and Russian support
- **⚡ Progressive Web App**: Can be installed as standalone app

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fish-bird-observer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```bash
   open http://localhost:3001
   ```

### Deployment to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Quick deployment**
   ```bash
   ./quick-deploy.sh
   ```

3. **Manual deployment**
   ```bash
   npm run build
   vercel --prod
   ```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── TelegramApp.tsx   # Telegram wrapper component
│   └── LanguageSwitcher.tsx
├── data/                # Application data
│   ├── species.ts       # Fish and bird species data
│   └── observations.ts  # Observation management
├── i18n/               # Internationalization
│   ├── en.json         # English translations
│   └── ru.json         # Russian translations
├── telegram.ts         # Telegram WebApp integration
├── App.tsx             # Main application component
└── main.tsx            # Application entry point

public/
├── manifest.json       # PWA manifest
└── index.html         # Telegram-optimized HTML

scripts/
├── deploy.sh          # Full deployment script
└── quick-deploy.sh    # Quick deployment script

docs/
├── README-TELEGRAM.md # Telegram Mini App guide
└── README-DEPLOY.md   # Deployment guide
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
# Application Settings
VITE_APP_TITLE="Fish & Bird Observer"
VITE_APP_DESCRIPTION="Track wildlife observations and discoveries"

# Telegram Settings
VITE_TELEGRAM_BOT_TOKEN=""
VITE_TELEGRAM_DOMAIN="your-domain.vercel.app"

# Development Settings
VITE_DEBUG_MODE=false
VITE_LOG_LEVEL="info"
```

### Telegram Bot Setup

1. **Create a bot** with [@BotFather](https://t.me/BotFather)
2. **Set WebApp URL** to your deployed URL
3. **Configure menu button** to open your Mini App
4. **Verify domain** in Telegram Bot settings

### Vercel Configuration

The project includes:
- `vercel.json` - Vercel deployment configuration
- Security headers and HTTPS setup
- SPA routing for React Router
- Optimized build settings

## 🎨 Design System

### Color Palette
- **Primary**: #006994 (Deep Sea Blue)
- **Secondary**: #2E8B57 (Sea Green)
- **Accent**: #3390EC (Telegram Blue)
- **Background**: #FFFFFF (Clean White)

### Typography
- **Font Family**: System fonts with fallbacks
- **Headings**: Bold, modern typography
- **Body Text**: Clean, readable fonts

### Components
- **Cards**: Glassmorphism with hover effects
- **Buttons**: Gradient backgrounds with animations
- **Forms**: Modern inputs with validation
- **Navigation**: Clean, intuitive interface

## 📱 Telegram Integration

### WebApp API Usage

```typescript
import { telegramWebApp } from './telegram';

// Check if running in Telegram
if (telegramWebApp.isAvailable()) {
  // Configure interface
  telegramWebApp.setMainButton('Add Observation', handleAddObservation);
  telegramWebApp.showBackButton(true);
  
  // Get user info
  const user = telegramWebApp.getUser();
  
  // Haptic feedback
  telegramWebApp.hapticFeedback('medium');
}
```

### Theme Adaptation

The app automatically adapts to Telegram's theme:

```typescript
// Get Telegram theme colors
const theme = telegramWebApp.getThemeParams();
document.documentElement.style.setProperty(
  '--tg-theme-bg-color', 
  theme.bg_color || '#ffffff'
);
```

## 🌐 Multi-language Support

### Adding New Languages

1. **Create translation file** in `src/i18n/`
2. **Add translations** following the existing structure
3. **Update language switcher** to include new language

### Translation Structure

```json
{
  "common": {
    "appTitle": "App Title",
    "welcome": "Welcome"
  },
  "navigation": {
    "home": "Home",
    "fish": "Fish"
  }
}
```

## 🚀 Deployment

### Vercel Deployment

The project is optimized for Vercel deployment:

1. **Automatic HTTPS**: Vercel provides free SSL certificates
2. **Global CDN**: Edge network for fast loading
3. **Automatic Builds**: GitHub integration for CI/CD
4. **Preview Deployments**: Automatic previews for pull requests

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup

For production deployment:

1. **Set environment variables** in Vercel dashboard
2. **Configure custom domain** (optional)
3. **Set up SSL certificate** (automatic with Vercel)
4. **Configure analytics** (optional)

## 🧪 Testing

### Local Testing

1. **Development server**: `npm run dev`
2. **Production preview**: `npm run preview`
3. **Linting**: `npm run lint`

### Telegram Testing

1. **Local testing**: Use Telegram Desktop or mobile app
2. **WebApp URL**: Set to `http://localhost:3001` for testing
3. **Domain verification**: Not required for local testing

## 📊 Analytics & Monitoring

### Built-in Features
- **Performance monitoring**: Core Web Vitals tracking
- **Error tracking**: JavaScript error collection
- **Usage analytics**: Basic usage statistics

### Optional Integrations
- **Google Analytics**: Add tracking ID in `.env`
- **Sentry**: Error tracking and performance monitoring
- **Custom metrics**: Add custom telemetry

## 🔒 Security

### Security Features
- **HTTPS required**: Enforced for Telegram Mini Apps
- **CSP headers**: Content Security Policy protection
- **Input validation**: All user inputs validated
- **XSS protection**: Sanitized user content

### Best Practices
- **Environment variables**: Never commit secrets to repository
- **Domain verification**: Always verify domains in Telegram
- **Regular updates**: Keep dependencies updated

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

### Code Style
- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code formatting
- **Commit messages**: Clear, descriptive commit messages

### Testing Guidelines
- **Local testing**: Test all features locally
- **Telegram testing**: Test in actual Telegram environment
- **Mobile testing**: Test on various mobile devices
- **Cross-browser**: Test in different browsers

## 📚 Documentation

- **[Telegram Mini App Guide](docs/README-TELEGRAM.md)**: Complete Telegram integration guide
- **[Deployment Guide](docs/README-DEPLOY.md)**: Step-by-step deployment instructions
- **[API Documentation](docs/API.md)**: Component and API documentation

## 🐛 Troubleshooting

### Common Issues

1. **Build failures**: Check TypeScript and linting errors
2. **Telegram integration**: Ensure HTTPS and domain verification
3. **Performance issues**: Check bundle size and optimization
4. **Mobile issues**: Test on actual devices, not just emulators

### Debug Mode

Enable debug mode in `.env`:

```env
VITE_DEBUG_MODE=true
VITE_LOG_LEVEL=debug
```

## 📞 Support

- **GitHub Issues**: Report bugs and feature requests
- **Telegram**: [@your_bot_username](https://t.me/your_bot_username)
- **Documentation**: [Wiki](https://github.com/your-repo/wiki)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Telegram**: For the excellent WebApp platform
- **React**: For the powerful component system
- **Vercel**: For seamless deployment experience
- **Tailwind CSS**: For beautiful, responsive design

---

**Note**: This application is designed as a Telegram Mini App but also works as a standalone Progressive Web App.