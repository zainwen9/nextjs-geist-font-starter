# Mobile Transportation App Clone - Implementation Plan

## Overview
Clone the Indonesian transportation/ride-sharing mobile app interface shown in the provided image using Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## Screens to Implement

### 1. Welcome/Login Screen
- **Features:**
  - Blue gradient background
  - Motorcycle illustration
  - "Perjalanan aman di ujung jari anda" heading
  - "Siap mengantar kemanapun anda mau" subtitle
  - Login button (primary blue)
  - Daftar (Register) button (secondary white)

### 2. Registration/Login Screen
- **Features:**
  - "Selamat Datang" heading
  - "silahkan isi data anda sebelum masuk" subtitle
  - Phone number input field
  - Password input field with "lupa password?" link
  - "Masuk" (Login) button
  - Social login options (Google, Apple)

### 3. Booking Screen
- **Features:**
  - "Lebih Mudah Naik Ojek Aja" heading
  - Location picker fields ("Lokasi Saat ini", "Lokasi Tujuan")
  - Date picker ("Tanggal Jemput")
  - Toggle for "antar jemput?"
  - "Pesan" (Order) button

### 4. Map Screen
- **Features:**
  - Map background (placeholder)
  - Driver information card
  - Driver avatar and details
  - Contact information

### 5. Tour Packages Screen (Tablet View)
- **Features:**
  - "Jangan Sampai Ketinggalan!" heading
  - Tour package cards (Beach Tour, Village Tour, City Tour)
  - Discount badges
  - Package details and pricing

## Technical Implementation

### File Structure
```
src/app/
├── page.tsx (Welcome screen)
├── login/
│   └── page.tsx (Login/Registration screen)
├── booking/
│   └── page.tsx (Booking screen)
├── map/
│   └── page.tsx (Map screen)
└── tours/
    └── page.tsx (Tour packages screen)

src/components/
├── screens/
│   ├── WelcomeScreen.tsx
│   ├── LoginScreen.tsx
│   ├── BookingScreen.tsx
│   ├── MapScreen.tsx
│   └── ToursScreen.tsx
└── ui/ (existing shadcn components)
```

### Key Components to Use
- **shadcn/ui components:**
  - Button
  - Input
  - Card
  - Avatar
  - Badge
  - Separator
  - Switch/Toggle

### Styling Approach
- **Mobile-first responsive design**
- **Custom Tailwind classes for:**
  - Blue gradient backgrounds
  - Mobile screen dimensions
  - Indonesian typography
  - Custom button styles
  - Card layouts

### Color Scheme
- Primary Blue: #3B82F6 (or similar)
- Secondary Blue: #1E40AF
- Background: White/Light gray
- Text: Dark gray/Black
- Accent: Orange for discounts

### Navigation
- Simple navigation between screens
- Mobile-optimized touch targets
- Smooth transitions

## Implementation Steps

1. **Setup base layout and navigation structure**
2. **Create Welcome screen with illustration placeholder**
3. **Build Login/Registration screen with form validation**
4. **Implement Booking screen with input fields**
5. **Create Map screen with driver info card**
6. **Build Tour packages screen for tablet view**
7. **Add responsive design and mobile optimizations**
8. **Polish styling and animations**
9. **Test across different screen sizes**

## Assets Needed
- Motorcycle illustration (placeholder)
- Map background (placeholder)
- Driver avatar (placeholder)
- Tour package images (placeholder)

## Notes
- All text will be in Indonesian as shown in the original
- Focus on pixel-perfect recreation of the UI
- Ensure mobile responsiveness
- Use placeholder images with descriptive alt text
- Implement basic form validation
- Add smooth transitions between screens
