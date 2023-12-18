import Navigation from '../navigation';
import Logo from '../logo';
import ImageLinkForm from '../imagelinkform'
import FaceRecognition from '../facerecognition';
import useFaceDetection from '../../hooks/useFaceDetection';
import ParticlesBg from 'particles-bg';

function Home() {
  const { imgUrl, box, onInputChange, onButtonSubmit, handleInputClear } = useFaceDetection();

  return (
    <div className="h-screen w-full">
      <ParticlesBg type="cobweb" num={500} bg={true} className="z-0" interactive={true} />
      <Navigation />
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