const fetchRequest = async (url: string, options = {}) => {
  const fetchUrl = `${process.env.URL_API || 'https://dummyjson.com'}${url}`;

  const response = await fetch(fetchUrl, options);

  const contentType = response?.headers.get('content-type');
  const isContentTypeJSON = contentType && contentType.indexOf('application/json') !== -1;

  if (!response.ok) {
    const errorBody = isContentTypeJSON ? await response.json() : await response.text();
    throw errorBody;
  }

  if (!isContentTypeJSON) {
    return await response.text();
  }

  return await response.json();
};

export const get = async (url: string, options?: object) => await fetchRequest(url, options);

export const post = async (url: string, body = {}) =>
  await fetchRequest(url, {
    method: 'POST',
    body: JSON.stringify(body),
  });

export const put = async (url: string, body = {}) =>
  await fetchRequest(url, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
