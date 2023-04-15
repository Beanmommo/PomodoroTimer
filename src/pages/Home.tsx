import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import PomodoroTimer from '../components/PomodoroTimer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Whack</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="pomodoro-timer-container">
          <PomodoroTimer />
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
