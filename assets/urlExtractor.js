import getYouTubeID from 'get-youtube-id';
export function extractURL(url) {
  var id = getYouTubeID(url);
  if(id){
    return id;
  }
  else{
    return null;
  }
}