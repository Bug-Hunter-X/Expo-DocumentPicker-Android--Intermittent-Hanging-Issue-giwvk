# Expo DocumentPicker Android Hanging Issue

This repository demonstrates an intermittent bug in Expo's DocumentPicker API on Android. The picker opens, but the promise returned by `getDocumentAsync` sometimes fails to resolve, causing the app to hang.  No errors are reported to the console.

## Steps to Reproduce

1. Run the `bug.js` example on an Android device or emulator.
2. Tap the button to open the DocumentPicker.
3. Select a file.
4. Observe that the app may hang indefinitely; the promise from `getDocumentAsync` will not resolve.

## Potential Causes

The root cause is currently unknown.  It might be related to asynchronous operations within the DocumentPicker, race conditions, or interactions with other parts of the Expo SDK. This behaviour is intermittent and difficult to reliably reproduce, making debugging challenging.

## Solution (bugSolution.js)

The solution provided in `bugSolution.js` involves implementing a timeout mechanism.  After a set period, if the promise hasn't resolved, we reject it, providing a user-friendly error message. This allows the application to recover gracefully and inform the user about the issue. Note that this is a workaround, not a perfect fix for the underlying problem.