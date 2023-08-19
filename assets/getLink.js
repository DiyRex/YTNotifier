import prompt from 'prompt-sync';

function getYoutubeID(){
    const mprompt = prompt();
    const link = mprompt('Enter Youtube Link : ');

    function extractVideoId(link) {
        const patterns = [
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^\/?]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([^\/?]+)/,
        ];

        for (const pattern of patterns) {
            const match = link.match(pattern);
            if (match) {
                return match[1];
            }
        }

        return null;
    }

    const videoId = extractVideoId(link);
    return videoId;
}

export {getYoutubeID}