document
    .getElementById('urlForm')
    .addEventListener('submit', async function (event) {
        event.preventDefault();
        console.log('Form submitted');
        const originalUrl = document.getElementById('originalUrl').value;

        try {
            const response = await fetch('/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ original_url: originalUrl }),
            });

            const data = await response.json();
            const shortUrlContainer =
                document.getElementById('shortUrlContainer');
            shortUrlContainer.innerHTML = `Short URL: <a href="${data.short_url}" target="_blank">${data.short_url}</a>`;
            document.getElementById('shortUrlContainer').style.display =
                'block';
        } catch (error) {
            console.log('Error', error);
        }
    });
