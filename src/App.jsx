import { MusicProvider } from './context/MusicContext';
import { HeartsProvider } from './context/HeartsContext';
import { ProgressProvider } from './context/ProgressContext';
import FloatingEffects from './components/FloatingEffects';
import Navigation from './components/Navigation';
import MusicPlayer from './components/MusicPlayer';
import HeartCounter from './components/HeartCounter';
import Hero from './components/Hero';
import Celebration from './components/Celebration';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Letters from './components/Letters';
import Reasons from './components/Reasons';
import Quiz from './components/Quiz';
import BirthdayLetter from './components/BirthdayLetter';
import SecretEnding from './components/SecretEnding';
import { site } from './data/siteData';

export default function App() {
  return (
    <MusicProvider>
      <HeartsProvider total={site.heartsHunt.total}>
        <ProgressProvider>
          <FloatingEffects />
          <Navigation />
          <MusicPlayer />
          <HeartCounter />

          <main>
            <Hero />
            <Celebration />
            <Timeline />
            <Gallery />
            <Letters />
            <Reasons />
            <Quiz />
            <BirthdayLetter />
            <SecretEnding />
          </main>
        </ProgressProvider>
      </HeartsProvider>
    </MusicProvider>
  );
}
