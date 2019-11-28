import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent } from '@ionic/react';

const temporarymessage = {
  'padding' : '20px' as '20px',
  'font-weight': 'bold' as 'bold'
}

const Tab3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          <p style={temporarymessage}>
            Coming soon !
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
