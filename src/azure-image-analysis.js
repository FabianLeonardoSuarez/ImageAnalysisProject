
async function analyzeImage(endpoint, key, url) {
    try {
        const payload = { url };
        const headers = {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': key
        };

        const response = await fetch(endpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error('Error analyzing image');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error analyzing image:', error);
        throw error;
    }
};

export default analyzeImage;
