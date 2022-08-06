export const exerciseOptions = {
    method: 'GET',
    headers: {
        
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'ce5148cdedmsh9f8dcf1470d34c3p18f510jsnc6d3086a4a0c',
      }
    };
    
    export const youtubeOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
      },
    };
    






export const fetchData =async(url,options) =>{

    const response = await fetch(url,options);
    const data = await response.json();

  return data;


}