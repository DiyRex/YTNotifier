import getYouTubeID from 'get-youtube-id';
import prompt from 'prompt-sync';

export function getYoutubeID() {
    const mprompt = prompt();
    const link = mprompt('Enter Youtube Link : ');
    var id = getYouTubeID(link);
    if(id){
        return id;
    }
    else{
        return null;
    }
}