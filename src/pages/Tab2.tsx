import React from 'react';
import {
IonContent,
IonHeader,
//IonItem,
//IonLabel,
//IonList,
IonPage,
IonTitle,
IonToolbar
} from '@ionic/react';

const temporarymessage = {
  'padding' : '20px' as '20px',
  'font-weight': 'bold' as 'bold'
}

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Help</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          <p style={temporarymessage}>
            Coming soon !
          </p>
        </div>
        {/* <IonList>
          <IonItem routerLink="/tab2/details">
            <IonLabel>
              <h2>Go to detail</h2>
            </IonLabel>
          </IonItem>
        </IonList> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
