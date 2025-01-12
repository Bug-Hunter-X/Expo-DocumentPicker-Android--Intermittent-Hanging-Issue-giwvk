This solution adds a timeout to the `getDocumentAsync` promise, rejecting it after 10 seconds if it hasn't resolved. This prevents the app from freezing indefinitely.

```javascript
import * as DocumentPicker from 'expo-document-picker';

export default function App() {
  const pickDocument = async () => {
    try {
      const result = await Promise.race([
        DocumentPicker.getDocumentAsync({ type: '*/*' }),
        new Promise((_, reject) => setTimeout(() => reject(new Error('DocumentPicker timed out')), 10000)),
      ]);
      console.log(result);
    } catch (error) {
      console.error('Error picking document:', error);
      alert('Error picking document. Please try again.');
    }
  };

  return (
    <View>
      <Button title="Pick Document" onPress={pickDocument} />
    </View>
  );
}
```