import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { telegramWebApp, TelegramUser } from '../telegram';

interface TelegramAppProps {
  children: React.ReactNode;
}

const TelegramApp: React.FC<TelegramAppProps> = ({ children }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isTelegram, setIsTelegram] = useState(false);
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    // Check if running in Telegram
    const checkTelegram = () => {
      if (telegramWebApp.isAvailable()) {
        setIsTelegram(true);
        const userData = telegramWebApp.getUser();
        if (userData) {
          setUser(userData);
          // Set language based on Telegram user
          if (userData.language_code) {
            localStorage.setItem('language', userData.language_code);
          }
        }
        
        // Configure Telegram interface
        configureTelegramInterface();
      }
    };

    checkTelegram();
    
    // Listen for Telegram WebApp becoming available
    const interval = setInterval(checkTelegram, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isTelegram) {
      updateTelegramInterface();
    }
  }, [location.pathname, isTelegram]);

  const configureTelegramInterface = () => {
    if (!telegramWebApp.isAvailable()) return;

    // Set theme colors based on Telegram theme
    const theme = telegramWebApp.getThemeParams();
    if (theme) {
      document.documentElement.style.setProperty('--tg-theme-bg-color', theme.bg_color || '#ffffff');
      document.documentElement.style.setProperty('--tg-theme-text-color', theme.text_color || '#000000');
      document.documentElement.style.setProperty('--tg-theme-button-color', theme.button_color || '#3390ec');
      document.documentElement.style.setProperty('--tg-theme-button-text-color', theme.button_text_color || '#ffffff');
    }

    // Configure back button
    telegramWebApp.showBackButton(true);
    telegramWebApp.setBackButtonHandler(() => {
      window.history.back();
    });

    // Configure main button for observations
    telegramWebApp.setMainButton(
      t('navigation.observations'),
      () => {
        window.location.href = '/observations';
      },
      false // Hide by default
    );

    // Set initial title
    telegramWebApp.setMainButtonParams({
      text: t('navigation.observations'),
      color: telegramWebApp.getButtonColor(),
      text_color: telegramWebApp.getButtonTextColor(),
      is_active: true,
      is_visible: false
    });
  };

  const updateTelegramInterface = () => {
    if (!isTelegram) return;

    const path = location.pathname;
    
    // Configure main button based on current page
    if (path === '/observations') {
      telegramWebApp.setMainButton(
        t('observations.addTitle'),
        () => {
          // Navigate to add observation or show modal
          telegramWebApp.hapticFeedback('medium');
        },
        true
      );
    } else if (path.includes('/species/')) {
      telegramWebApp.setMainButton(
        t('species.markObservation'),
        () => {
          telegramWebApp.hapticFeedback('medium');
          // Mark observation logic
        },
        true
      );
    } else {
      telegramWebApp.setMainButton(
        t('navigation.observations'),
        () => {
          window.location.href = '/observations';
        },
        path !== '/'
      );
    }

    // Update title based on page
    let title = t('common.appTitle');
    if (path === '/fish') title = t('navigation.fish');
    else if (path === '/birds') title = t('navigation.birds');
    else if (path === '/observations') title = t('navigation.observations');
    else if (path.includes('/species/')) title = t('species.viewDetails');

    // Set document title
    document.title = title;
  };

  // Add Telegram-specific styles
  useEffect(() => {
    if (isTelegram) {
      // Add Telegram-specific CSS classes
      document.body.classList.add('telegram-app');
      
      // Configure viewport for Telegram
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
      }
    }
  }, [isTelegram]);

  return (
    <div className={`telegram-wrapper ${isTelegram ? 'telegram-mode' : ''}`}>
      {children}
      
      {/* Telegram-specific UI elements */}
      {isTelegram && (
        <div className="telegram-footer">
          {user && (
            <div className="telegram-user-info">
              <span className="user-greeting">
                {t('common.welcome')}, {user.first_name}!
              </span>
              <span className="user-id">ID: {user.id}</span>
            </div>
          )}
          
          <div className="telegram-actions">
            <button 
              className="telegram-action-btn"
              onClick={() => {
                telegramWebApp.hapticFeedback('medium');
                window.location.href = '/';
              }}
            >
              🏠 {t('navigation.home')}
            </button>
            <button 
              className="telegram-action-btn"
              onClick={() => {
                telegramWebApp.hapticFeedback('medium');
                window.location.href = '/observations';
              }}
            >
              📊 {t('navigation.observations')}
            </button>
            <button 
              className="telegram-action-btn"
              onClick={() => {
                telegramWebApp.notificationFeedback('success');
                alert(t('common.thanks'));
              }}
            >
              ❤️ {t('common.support')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TelegramApp;