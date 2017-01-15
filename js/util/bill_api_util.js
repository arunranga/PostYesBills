export const fetchBill = (billNo, success) => {
  // $.ajax({
  //   method: 'GET',
  //   url: 'https://jsonplaceholder.typicode.com/posts/1',
  //   // url: `api/bills/${billNo}`,
  //   success
  // });
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
  xhr.send(null);
  xhr.onreadystatechange = () => {
    // var DONE = 4; // readyState 4 means the request is done.
    // var OK = 200; // status 200 is a successful return.
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        console.log(xhr.responseText);
        // success(xhr.responseText);
      } else {
        console.log('Error: ' + xhr.status);
      }
    }
  };
};
