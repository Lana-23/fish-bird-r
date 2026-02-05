// Telegram WebApp Integration
declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        initDataUnsafe: {
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code: string;
          };
        };
        ready: () => void;
        expand: () => void;
        close: () => void;
        backButton: {
          isVisible: boolean;
          show: () => void;
          hide: () => void;
          onClick: (callback: () => void) => void;
        };
        MainButton: {
          setText: (text: string) => void;
          onClick: (callback: () => void) => void;
          show: () => void;
          hide: () => void;
          setParams: (params: any) => void;
        };
        HapticFeedback: {
          impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
          notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
          selectionChanged: () => void;
        };
      };
    };
  }
}

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
}

class TelegramWebApp {
  private webApp: any;
  private isInitialized = false;

  constructor() {
    this.webApp = window.Telegram?.WebApp;
    if (this.webApp) {
      this.init();
    }
  }

  init() {
    if (!this.isInitialized && this.webApp) {
      this.webApp.ready();
      this.webApp.expand();
      this.isInitialized = true;
    }
  }

  isAvailable(): boolean {
    return !!this.webApp;
  }

  getUser(): TelegramUser | null {
    if (!this.webApp) return null;
    return this.webApp.initDataUnsafe.user || null;
  }

  showBackButton(show: boolean = true) {
    if (!this.webApp) return;
    if (show) {
      this.webApp.backButton.show();
    } else {
      this.webApp.backButton.hide();
    }
  }

  setBackButtonHandler(handler: () => void) {
    if (!this.webApp) return;
    this.webApp.backButton.onClick(handler);
  }

  setMainButton(text: string, handler?: () => void, isVisible: boolean = true) {
    if (!this.webApp) return;
    
    this.webApp.MainButton.setText(text);
    if (handler) {
      this.webApp.MainButton.onClick(handler);
    }
    if (isVisible) {
      this.webApp.MainButton.show();
    } else {
      this.webApp.MainButton.hide();
    }
  }

  setMainButtonParams(params: any) {
    if (!this.webApp) return;
    this.webApp.MainButton.setParams(params);
  }

  hapticFeedback(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft' = 'medium') {
    if (!this.webApp?.HapticFeedback) return;
    this.webApp.HapticFeedback.impactOccurred(style);
  }

  notificationFeedback(type: 'error' | 'success' | 'warning' = 'success') {
    if (!this.webApp?.HapticFeedback) return;
    this.webApp.HapticFeedback.notificationOccurred(type);
  }

  close() {
    if (!this.webApp) return;
    this.webApp.close();
  }

  // Theme methods
  getThemeParams() {
    if (!this.webApp) return null;
    return this.webApp.initDataUnsafe.theme_params || {};
  }

  getBackgroundColor() {
    const theme = this.getThemeParams();
    return theme?.bg_color || '#ffffff';
  }

  getTextColor() {
    const theme = this.getThemeParams();
    return theme?.text_color || '#000000';
  }

  getButtonColor() {
    const theme = this.getThemeParams();
    return theme?.button_color || '#3390ec';
  }

  getButtonTextColor() {
    const theme = this.getThemeParams();
    return theme?.button_text_color || '#ffffff';
  }
}

// Create singleton instance
export const telegramWebApp = new TelegramWebApp();

// Auto-initialize when script loads
if (typeof window !== 'undefined') {
  // Wait for Telegram WebApp to be available
  const checkTelegram = () => {
    if (window.Telegram?.WebApp) {
      telegramWebApp.init();
    } else {
      setTimeout(checkTelegram, 100);
    }
  };
  checkTelegram();
}
