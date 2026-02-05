# Fish & Bird Observer - Telegram Mini App

## Overview

Fish & Bird Observer is now fully adapted as a Telegram Mini App! This version provides seamless integration with Telegram's WebApp API, offering enhanced user experience with native Telegram features.

## Features

### 🐟 **Core Functionality**
- **Species Database**: Browse fish and bird species with detailed information
- **Category Filtering**: Filter species by habitat and type
- **Search**: Real-time search by name or scientific name
- **Observation Tracking**: Add and manage wildlife observations
- **Statistics**: View observation statistics and trends

### 📱 **Telegram Integration**
- **Native Telegram UI**: Uses Telegram's WebApp interface
- **User Detection**: Automatically detects Telegram users
- **Theme Adaptation**: Adapts to Telegram's theme colors
- **Haptic Feedback**: Native Telegram haptic feedback
- **Main Button**: Context-aware main button for quick actions
- **Back Button**: Native Telegram back navigation
- **User Info**: Displays Telegram user information

### 🎨 **Enhanced Design**
- **Mobile-First**: Optimized for mobile devices
- **Glassmorphism**: Modern glass-like UI effects
- **Wave Background**: Beautiful gradient wave patterns
- **Responsive**: Works on all screen sizes
- **Progressive Web App**: Can be installed as PWA

## Installation & Setup

### For Telegram Mini App

1. **Deploy to a web server** (must be HTTPS)
2. **Configure Telegram Bot**:
   - Create a bot via [@BotFather](https://t.me/BotFather)
   - Set up WebApp URL in bot settings
   - Configure menu button to open your Mini App

3. **Domain Verification**:
   - Add your domain to Telegram Bot settings
   - Verify domain ownership

4. **Launch**:
   - Users can access via bot menu or direct link
   - App runs in Telegram's WebApp container

### Development Setup

```bash
# Clone the repository
git clone <repository-url>
cd fish-bird-observer

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
open http://localhost:3001
```

## Telegram WebApp Features

### User Integration
```typescript
// Automatic user detection
const user = telegramWebApp.getUser();
if (user) {
  console.log(`Welcome, ${user.first_name}!`);
}

// Language detection
if (user?.language_code) {
  i18n.changeLanguage(user.language_code);
}
```

### Interface Control
```typescript
// Configure main button
telegramWebApp.setMainButton(
  'Add Observation',
  () => handleAddObservation(),
  true // visible
);

// Handle back button
telegramWebApp.setBackButtonHandler(() => {
  window.history.back();
});

// Haptic feedback
telegramWebApp.hapticFeedback('medium');
```

### Theme Adaptation
```typescript
// Get Telegram theme colors
const theme = telegramWebApp.getThemeParams();
document.documentElement.style.setProperty(
  '--tg-theme-bg-color', 
  theme.bg_color || '#ffffff'
);
```

## File Structure

```
src/
├── telegram.ts              # Telegram WebApp integration
├── components/
│   └── TelegramApp.tsx      # Telegram wrapper component
├── i18n/
│   ├── en.json             # English translations
│   └── ru.json             # Russian translations
├── index.css               # Telegram-specific styles
└── main.tsx                # App entry point with Telegram wrapper

public/
├── manifest.json           # PWA manifest
└── index.html             # Telegram-optimized HTML
```

## Key Components

### TelegramApp Component
- Wraps the entire application
- Detects Telegram environment
- Configures Telegram interface
- Provides Telegram-specific UI elements
- Handles theme adaptation

### Telegram Integration
- **telegram.ts**: Core WebApp API wrapper
- **TypeScript definitions**: Full type safety
- **Error handling**: Graceful fallbacks
- **Auto-initialization**: Automatic setup

### Mobile Optimization
- **Touch-friendly**: Large, accessible buttons
- **Gesture support**: Swipe and tap interactions
- **Performance**: Optimized for mobile devices
- **Offline support**: Service worker for caching

## Configuration

### Environment Variables
```env
# For production deployment
VITE_APP_TITLE="Fish & Bird Observer"
VITE_APP_DESCRIPTION="Track wildlife observations"
VITE_TELEGRAM_BOT_TOKEN="your-bot-token"
```

### Telegram Bot Setup
1. Create bot with [@BotFather](https://t.me/BotFather)
2. Set WebApp URL: `https://your-domain.com`
3. Configure menu button
4. Add to bot description

### Domain Verification
1. Add domain to bot settings
2. Verify via DNS or HTML file
3. Test with Telegram WebApp

## Usage

### For Users
1. Open Telegram
2. Navigate to your bot
3. Click the Mini App button
4. Start exploring species and adding observations

### For Developers
1. Clone and run locally
2. Test in Telegram WebApp
3. Deploy to HTTPS server
4. Configure Telegram bot integration

## Browser Support

- **Telegram WebApp**: Chrome 60+, Safari 12+, Firefox 60+
- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **Mobile browsers**: iOS Safari, Chrome Android
- **Progressive Web App**: All modern browsers

## Security

- **HTTPS required**: Telegram requires secure connections
- **CSP headers**: Content Security Policy for security
- **Input validation**: All user inputs validated
- **Data encryption**: Local storage encryption

## Performance

- **Bundle size**: Optimized for fast loading
- **Lazy loading**: Components load on demand
- **Caching**: Service worker for offline support
- **Image optimization**: Compressed assets

## Troubleshooting

### Common Issues

1. **HTTPS Required**: Telegram requires HTTPS for WebApps
2. **Domain Verification**: Ensure domain is properly verified
3. **CSP Headers**: Configure Content Security Policy
4. **Mobile Optimization**: Test on actual devices

### Debug Mode
```typescript
// Enable debug logging
if (process.env.NODE_ENV === 'development') {
  console.log('Telegram WebApp available:', telegramWebApp.isAvailable());
}
```

## Contributing

1. Fork the repository
2. Create feature branch
3. Test in Telegram WebApp
4. Submit pull request

## License

MIT License - see LICENSE file for details.

## Support

- **Telegram**: [@your_bot_username](https://t.me/your_bot_username)
- **GitHub**: Issues and discussions
- **Documentation**: [Wiki](https://github.com/your-repo/wiki)

---

**Note**: This app is designed specifically for Telegram Mini App environment but also works as a standalone web application.