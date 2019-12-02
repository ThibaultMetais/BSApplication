import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  //IonItem,
  //IonLabel,
  //IonList,
  //IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSpinner,
  IonButtons,
  IonButton
} from '@ionic/react';
import { refresh, add } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tab1.css';

const Tab1: React.FC = () => {
  // eslint-disable-next-line
  const [posts, setPosts] = useState();

  const mypost = {
    'background-color' : '#2ecc71' as '#2ecc71'
  }

  const otherpost = {
    'background-color' : '#3498db' as '#3498db'
  }

  const postuser = {
    'color' : 'white' as 'white',
    'font-weight': 'bold' as 'bold'
  }

  const postcontent = {
    'color' : 'white' as 'white'
  }

  const noposts = {
    //UGLY, WE NEED TO CENTER IT PROPERLY
    'padding' : '130px' as '130px',
  }

  useEffect(() => {
    axios.get('https://app-ae25ef7f-eff0-469a-8f73-ef2bbd4b6965.cleverapps.io/api/news/')
      .then(res => {
        const data = res.data;
        console.log(data);
        setPosts(data);
      })
  }, []);

  function getNews() {
    axios.get('https://app-ae25ef7f-eff0-469a-8f73-ef2bbd4b6965.cleverapps.io/api/news/')
      .then(res => {
        const data = res.data;
        console.log(data);
        setPosts(data);
      })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>News</IonTitle>
          <IonButtons slot="secondary">
            <IonButton href="/addnews">
              <IonIcon icon={add} />
            </IonButton>
            <IonButton onClick={() => getNews()}>
              <IonIcon icon={refresh} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      <div>
        { posts ? posts.map((post:any,index:number) =>
          <div key={index}>

            <IonCard className="newspost" style={post['from_me'] ? mypost : otherpost}>
              {/* <img src="/assets/shapes.svg" alt="" /> */}
              <IonCardHeader>
                <IonCardTitle style={postuser}>{post['from_me'] ? 'Me' : post['username']}</IonCardTitle>
                <IonCardSubtitle style={postuser}>{new Date(post['created']).toUTCString()}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p style={postcontent}>
                  {post['content']}
                </p>
              </IonCardContent>
            </IonCard>

          </div>) : <div style={noposts}><IonSpinner name="crescent"></IonSpinner></div> }
      </div>


      {/*
        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Resources</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Ionic Documentation</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" icon={build} />
            <IonLabel>Scaffold Out Your App</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
            <IonIcon slot="start" color="medium" icon={grid} />
            <IonLabel>Change Your App Layout</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" icon={colorFill} />
            <IonLabel>Theme Your App</IonLabel>
          </IonItem>
        </IonList>
        */}

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
