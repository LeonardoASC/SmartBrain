import Navigation from '../Navigation';
import Logo from '../Logo';
import ImageLinkForm from '../ImageLinkForm'
import FaceRecognition from '../FaceRecognition';
import useFaceDetection from '../../hooks/useFaceDetection';
import ParticlesBg from 'particles-bg';

function Home({ onRouteChange }) {
  const { imgUrl, box, onInputChange, onButtonSubmit, handleInputClear } = useFaceDetection();

  return (
    <div className="h-screen w-full">
      <ParticlesBg type="cobweb" num={500} bg={true} className="z-0" interactive={true} />
      <Navigation onRouteChange={onRouteChange} />
      <Logo />
      <ImageLinkForm
        onButtonSubmit={onButtonSubmit}
        onInputChange={onInputChange}
        onInputClear={handleInputClear}
      />
      <FaceRecognition box={box} imageUrl={imgUrl} />
    </div>
  );
}

export default Home;