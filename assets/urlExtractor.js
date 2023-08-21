export function extractUrlFromString(inputString) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const matches = inputString.match(urlRegex);

  if (matches && matches.length > 0) {
    return {
      url: matches[0],         // Return the first URL found
      inputString: inputString // Return the input string as well
    };
  }

  return null; // No URL found
}