import { useState } from 'react';
import Hero3D from './components/Hero3D';
import LibraryCard from './components/LibraryCard';
import FooterNote from './components/FooterNote';

export default function App() {
  const [gameName, setGameName] = useState('Cedar & Stone');
  const [dewey, setDewey] = useState('793.92');

  const [theme, setTheme] = useState(1); // 0=A, 1=B, 2=C
  const [randomness, setRandomness] = useState(1);
  const [interaction, setInteraction] = useState(1);
  const [learning, setLearning] = useState(1);
  const [tempo, setTempo] = useState(1);

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,248,235,0.9),rgba(248,239,223,0.95)_35%,rgba(244,230,205,0.95)_70%,rgba(237,222,198,1))] text-stone-900">
      <header className="relative">
        <Hero3D />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5EBD6]/90" />
        <div className="absolute inset-0 flex items-end justify-center pb-6">
          <div className="backdrop-blur-sm bg-white/40 border border-white/50 shadow-sm rounded-full px-5 py-2 text-stone-700 font-medium">
            Explore the spectrum of board game vibes
          </div>
        </div>
      </header>

      <main className="relative z-0 -mt-10 mb-16 px-4">
        <div className="mx-auto max-w-3xl">
          <LibraryCard
            gameName={gameName}
            setGameName={setGameName}
            dewey={dewey}
            setDewey={setDewey}
            sliders=[
              { label: 'Theme', left: 'Abstract', mid: 'DECORATED', right: 'Immersive', value: theme, setValue: setTheme },
              { label: 'Randomness', left: 'Luck', mid: 'TACTICAL', right: 'Skill', value: randomness, setValue: setRandomness },
              { label: 'Interaction', left: 'Solitaire', mid: 'INDIRECT', right: 'Constant', value: interaction, setValue: setInteraction },
              { label: 'Learning', left: 'Intuitive', mid: 'MODERATE', right: 'Heavy', value: learning, setValue: setLearning },
              { label: 'Tempo', left: 'Fast', mid: 'THOUGHTFUL', right: 'Brain Melting', value: tempo, setValue: setTempo },
            ]
          />
        </div>
      </main>

      <FooterNote />
    </div>
  );
}
