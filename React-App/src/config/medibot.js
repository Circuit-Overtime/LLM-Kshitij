export const medibotApi = async (prompt) => {
    const endpoint = 'https://imgelixpo.vercel.app/t/';
    const encodedPrompt = encodeURIComponent(prompt);
    const url = `${endpoint}${encodedPrompt}`; // Fix the string interpolation

    try {
        const response = await fetch(url);

        // Check for non-OK response status
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let finalData = '';

        return new Promise((resolve, reject) => {
            function read() {
                reader.read().then(({ done, value }) => {
                    if (done) {
                        resolve(finalData || 'No message received.');
                        return;
                    }

                    const chunk = decoder.decode(value, { stream: true });
                    console.log('Raw Chunk:', chunk); // Log the raw chunk to debug

                    // Skip the "Request received" message and accumulate valid content
                    if (!chunk.includes('Request received, processing...')) {
                        finalData += chunk;
                    }

                    read(); // Recursively read the next chunk
                }).catch(error => {
                    console.error('Error reading stream:', error);
                    reject('Error reading response stream.');
                });
            }

            read(); // Start reading the response stream
        });
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error fetching the response.');
    }
};
