export const fetchBill = (billNo, success) => {
  // $.ajax({
  //   method: 'GET',
  //   url: 'https://jsonplaceholder.typicode.com/posts/1',
  //   // url: `api/bills/${billNo}`,
  //   success
  // });
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
  xhr.send(null);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        console.log(xhr.responseText);
        success(xhr.responseText);
      } else {
        console.log('Error: ' + xhr.status);
      }
    }
  };
};
