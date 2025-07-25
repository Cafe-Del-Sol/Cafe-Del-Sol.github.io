// This file is responsible for fetching and displaying the Instagram feed.
// It uses the Fetch API to retrieve images from a hypothetical Instagram API endpoint
// and displays them in a grid format on the webpage.

document.addEventListener('DOMContentLoaded', function() {
    const instagramFeedContainer = document.getElementById('instagram-feed');
    const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN'; // Replace with your actual access token
    const userId = 'YOUR_INSTAGRAM_USER_ID'; // Replace with your actual user ID
    const apiUrl = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=${accessToken}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.data) {
                data.data.forEach(post => {
                    if (post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM') {
                        const imgElement = document.createElement('img');
                        imgElement.src = post.media_url;
                        imgElement.alt = post.caption || 'Instagram Image';
                        imgElement.classList.add('instagram-image');
                        instagramFeedContainer.appendChild(imgElement);
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error fetching Instagram feed:', error);
            instagramFeedContainer.innerHTML = '<p>Unable to load Instagram feed.</p>';
        });
});