/**
 * onebase. — Launch Site Configuration
 * Update these fields with your live custom domain, TestFlight invite link,
 * Android Beta link, WhatsApp contact number, and waitlist webhook endpoint
 * when ready to publish.
 */
window.ONEBASE_CONFIG = {
  // Replace with your registered custom domain (e.g. "https://onebase.app" or "https://useonebase.com")
  domain: 'https://onebase.app',

  // Canonical brand identity (always lowercase with trailing mint dot)
  appName: 'onebase.',

  // Default visitor language when no ?lang= query param or saved preference exists ("en" or "ar")
  defaultLang: 'en',

  // iOS TestFlight public beta invite URL (App Store Connect App ID: 6838113894)
  // Example: "https://testflight.apple.com/join/XXXXXXXX"
  // When empty, clicking the TestFlight badge opens the Early Access form pre-selected to iOS.
  testflightUrl: 'https://testflight.apple.com/join/1kDxydzP',

  // Android Beta APK / Google Play Internal Testing URL
  // When empty, clicking Android Beta opens the Early Access form pre-selected to Android.
  androidBetaUrl: '',

  // WhatsApp direct contact number in international format without "+" (e.g. "2010XXXXXXXX")
  // When empty, clicking WhatsApp focuses the Early Access form with an immediate onboarding notice.
  whatsappNumber: '',

  // Optional POST endpoint (e.g. Cloudflare Worker, Formspree, or Supabase Edge Function URL)
  // Receives JSON: { name, contact, businessType, teamSize, platform, language, source, submittedAt }
  // When empty, submissions are validated and persisted locally with a clear beta confirmation message.
  waitlistEndpoint: '',
};
