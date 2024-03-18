import React from 'react';
import MainLayout from './components/mainLayout';


export default function App() {
  return (
    <>
    <MainLayout>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Main Content Here</Text>
      </View>
    </MainLayout>
    </>
  );
}
