import Logo from './components/Logo';
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div className={'bg-gray-800 h-screen w-screen container overflow-hidden flex items-center justify-center flex-col'}>
      <Logo/>
      <CallToAction/>
    </div>
  );
}

export default App;
