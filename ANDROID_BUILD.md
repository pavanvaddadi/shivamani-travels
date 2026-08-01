# Shivamani Travels - Android Build Guide

This document outlines the exact workflow required to compile the web application into a production-ready Android package (APK) or App Bundle (AAB).

## Prerequisites
Before you begin, ensure you have the following installed:
1. **Node.js & npm**
2. **Android Studio** (Latest Version)
3. **Java Development Kit (JDK 17+)**

---

## 1. Production Web Build
First, you must compile the Angular/Ionic web application into a highly optimized, production-ready static bundle.

Open your terminal in the root of your project (`/Users/sriram/workspace/ionic-workspace/shivamani-travels`) and run:
```bash
npm run build
```
*(This command generates the `/www` directory containing your optimized HTML, CSS, JS, and assets).*

## 2. Capacitor Sync
Once the web build is complete, you must synchronize these assets into the native Android project container.

Run:
```bash
npx cap sync
```
*(This command copies the `/www` contents into `android/app/src/main/assets/public` and updates any native Capacitor plugins).*

## 3. Opening Android Studio
To compile the APK or run on an emulator, you must open the native project in Android Studio.

Run:
```bash
npx cap open android
```
*(If this command fails to launch Android Studio automatically, simply open Android Studio manually, select **Open**, and navigate to the `/android` folder inside your project).*

## 4. Running on an Emulator or Device
1. Once Android Studio finishes syncing its Gradle scripts, connect a physical Android device via USB or start a Virtual Device (AVD).
2. Click the green **Play (Run)** button in the top toolbar of Android Studio, or press `Shift + F10`.

## 5. Generating the Debug APK (For Testing)
If you want to share a testable APK with stakeholders:
1. In Android Studio, go to **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)**.
2. The generated APK will be located at:
   `/android/app/build/outputs/apk/debug/app-debug.apk`

## 6. Generating the Release APK / AAB (For Play Store Deployment)
To generate a signed, production-ready package for the Google Play Store:
1. In Android Studio, go to **Build** > **Generate Signed Bundle / APK...**
2. Select **Android App Bundle** (Recommended for Play Store) or **APK** (For direct distribution).
3. Provide your Keystore credentials (create a new one if you haven't yet).
4. Select the **release** build variant and click **Finish**.
5. The generated release package will be located at:
   `/android/app/build/outputs/bundle/release/app-release.aab` (or `/apk/release/app-release.apk`)

## External Linking Configuration
The `AndroidManifest.xml` has been pre-configured with package visibility `<queries>` to ensure that `tel:` dialer links and `https://wa.me/...` WhatsApp deep links function flawlessly on Android 11+ (API 30+) devices without additional native configuration.
