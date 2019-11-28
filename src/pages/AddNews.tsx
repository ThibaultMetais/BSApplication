import React, { useState } from 'react';
import { IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonBackButton,
  IonInput,
  IonLabel,
  IonTextarea
} from '@ionic/react';
import axios from 'axios';

const AddNewsPage: React.FC = () => {

  const [content, setContent] = useState();
  const [message, setMessage] = useState();
  const [colormessage, setColormessage] = useState('#2ecc71');

  const section = {
    'font-weight': 'bold' as 'bold'
  }

  const formstyle = {
    'padding' : '20px' as '20px',
  }

  const messagestyle = {
    'color' : colormessage,
  }

  const writeblock = {
    'padding-top' : '20px' as '20px',
    'padding-bottom' : '20px' as '20px'
  }

  function postNews() {
    axios.post('https://app-ae25ef7f-eff0-469a-8f73-ef2bbd4b6965.cleverapps.io/api/news/', {
      content: content,
    })
    .then((response) => {
      console.log(response);
      setContent(null)
      setColormessage('#2ecc71')
      setMessage("New post submitted !")
    }, (error) => {
      console.log(error);
      setColormessage('#e74c3c')
      setMessage(error)
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{"News > Add"}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={formstyle}>
          <IonLabel position="stacked" style={section}>New post</IonLabel>
          <IonTextarea placeholder="Write here" onIonChange={(c) => setContent(c.detail.value)} style={writeblock}></IonTextarea>
          <IonButton expand="block" onClick={() => postNews()}>Submit</IonButton>
          <p style={messagestyle}>{message}</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddNewsPage;
