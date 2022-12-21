export default function handleResponseFromAPI(promise) {
  promise.then((onfullfilled) => {
    console.log('Got a response from the API');
    return onfullfilled;
  }, (onreject) => {
    console.log('Got a response from the API');
    return onreject;
  });
}
