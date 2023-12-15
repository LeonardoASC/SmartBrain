import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/navigation';
import Logo from './components/logo';
import ParticlesBg from 'particles-bg'
import ImageLinkForm from './components/imagelinkform';
import FaceRecognition from './components/facerecognition';
import { useState } from 'react';

function App() {
  const [inputState, setInputState] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [box, setBox] = useState({});

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    };
  };

  const handleInputClear = () => {
    setImgUrl(''); 
  };

  const displayFaceBox = (box) => {
    console.log(box);
    setBox(box)
  }

  const onInputChange = (e) => {
    console.log(e.target.value);
    setInputState(e.target.value);
  }

  const onButtonSubmit = () => {
    setImgUrl(inputState);
    fetch("https://api.clarifai.com/v2/models/face-detection/outputs", returnClarifiJSON(imgUrl))
      .then(response => response.json())
      .then(result => {
        displayFaceBox(calculateFaceLocation(result));
      })
      .catch(error => console.log('error: ', error));
  };

  const returnClarifiJSON = (imageUrl) => {

    const PAT = '5f8d0ffc1ddb4f6b9304fbab38a15763';
    const USER_ID = 's97vqp2f0j51';
    const APP_ID = 'my-first-application-t6vllu';
    const IMAGE_URL = imageUrl;

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": IMAGE_URL
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    };

    return requestOptions;

  }

  return (
    <div className="h-screen w-full">
      <ParticlesBg type="cobweb" num={500} bg={true} className="z-0" interactive={true}/>
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

export default App;
