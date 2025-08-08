# Temporary Landing Page Setup

This project now includes a temporary landing page feature that allows you to display a "coming soon" page while building the main website behind the scenes.

## How to Enable/Disable the Temporary Landing Page

### Method 1: Environment Variable (Recommended)

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following line to enable the temporary landing page:
   ```
   NEXT_PUBLIC_SHOW_TEMPORARY_LANDING=true
   ```
3. To disable it and show the main website, either:
   - Set it to `false`: `NEXT_PUBLIC_SHOW_TEMPORARY_LANDING=false`
   - Or remove the line entirely

### Method 2: Direct Configuration

1. Open `lib/config.ts`
2. Change the `showTemporaryLanding` value:
   - `true` = Show temporary landing page
   - `false` = Show main website

## Features of the Temporary Landing Page

- **Minimalistic Design**: Clean, modern black background with professional minimalistic UI/UX
- **Premium Black Theme**: Sophisticated black color scheme with subtle gold accents
- **Coming Soon Messaging**: Clear indication that the full website is under construction
- **Brand Information**: Highlights key features and offerings
- **Email Signup**: Collect email addresses for launch notifications
- **Responsive Design**: Works on all devices
- **Easy Toggle**: Simple on/off switch without affecting existing code
- **Hidden Navigation**: Automatically hides navigation tabs when temporary landing is active

## Files Created/Modified

- `components/TemporaryLanding.tsx` - The temporary landing page component (minimalistic black theme)
- `lib/config.ts` - Configuration file to control the feature
- `app/page.tsx` - Modified to conditionally render the temporary page
- `components/layout/Header.tsx` - Modified to hide navigation when temporary landing is active

## Usage Workflow

1. **During Development**: Set `NEXT_PUBLIC_SHOW_TEMPORARY_LANDING=true` to show the temporary page
2. **When Ready to Launch**: Set `NEXT_PUBLIC_SHOW_TEMPORARY_LANDING=false` to show the main website
3. **Optional Cleanup**: Once the main site is live, you can remove the temporary landing code entirely

## Customization

You can customize the temporary landing page by editing `components/TemporaryLanding.tsx`:
- Change colors, text, and branding
- Add more sections or features
- Modify the email signup functionality
- Update contact information

The temporary landing page is completely separate from your main website content, so you can modify it without affecting your existing pages. 