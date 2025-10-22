import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);
  const [qrData, setQrData] = useState('');

  if (!permission) {
    // Ainda não pediu permissão
    return <View />;
  }

  if (!permission.granted) {
    // Caso o usuário ainda não tenha permitido o acesso à câmera
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          Precisamos da permissão da câmera
        </Text>
        <Button onPress={requestPermission} title="Permitir câmera" />
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }) => {
    setShowCamera(false);
    setQrData(data);
  };

  return (
    <View style={styles.container}>
      {showCamera ? (
        <CameraView
          style={StyleSheet.absoluteFillObject}
          facing="back"
          onBarcodeScanned={handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ['qr'],
          }}
        />
      ) : (
        <>
          <Text style={styles.title}>Leitor de QR Code</Text>
          <Button title="Abrir Câmera" onPress={() => setShowCamera(true)} />
          {qrData ? (
            <View style={styles.resultBox}>
              <Text style={styles.resultTitle}>Conteúdo do QR Code:</Text>
              <Text style={styles.resultText}>{qrData}</Text>
              <Button
                title="Ler outro QR"
                onPress={() => setShowCamera(true)}
              />
            </View>
          ) : (
            <Text style={styles.resultText}>Nenhum código lido ainda.</Text>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  resultBox: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '80%',
  },
  resultTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  resultText: {
    textAlign: 'center',
  },
});
