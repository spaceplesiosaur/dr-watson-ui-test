export const startConversation = async feeling => {
  const url = 'https://drwatson-api.herokuapp.com/api/v1/start_session'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ feeling })
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Dr Watson is currently down.  Please try again later.')
  }

  const data = await response.json();
  console.log(data)
  return data;
}

export const postMessage = async newMessage => {
  const url = 'https://drwatson-api.herokuapp.com/api/message'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ newMessage })
  };

  return fetch(url, options)
  .then(res => {
    if(!res.ok) {
      throw(Error('Your message did not post'))
    }
    return res.json()
  })
}

export const endConversation = async () => {
  const url = 'https://drwatson-api.herokuapp.com/api/v1/end_session';

  const response = await fetch(url);
  if (!response.ok) {
    throw Error('There was a problem ending the session.  Please close the application.')
  }
}
