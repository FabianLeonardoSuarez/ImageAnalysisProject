import React from 'react';
import { envKeys } from './getEnvKeys';
import azureImageAnalysis from './azure-image-analysis';

function App() {
  const VISION_KEY = envKeys.VISION_KEY;
  const VISION_ENDPOINT = envKeys.VISION_ENDPOINT;
  console.log('envkeys', envKeys);

  const endpoint = `${VISION_ENDPOINT}computervision/imageanalysis:analyze&api-version=2023-02-01-preview&features=caption&language=en`;
  console.log('endpoint', endpoint);

  const result = azureImageAnalysis(endpoint, VISION_KEY, 'https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png');
  console.log('result', result);

  return (
    <div>
      <h1>Insert an Url or type a Prompt</h1>
      <input type="text" placeholder="Enter URL" />
      <button>Submit</button>
    </div>
  );
}


export default App;