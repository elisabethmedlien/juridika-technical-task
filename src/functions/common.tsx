const url:string = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100';

export async function getApi <Response> (
): Promise <any> {
  try {
    const response = await fetch(url);
    return await response.json();
  }
  catch (error) {}
}
