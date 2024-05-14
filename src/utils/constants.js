export const bgimage = "https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/33ba1ccc-ea22-44e1-9708-8119518a6e8b/AE-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const photo = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";
export const netflixlogo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_READACCESSTOKEN
    }
  };

  export const tmdb_url = "https://image.tmdb.org/t/p/w500/";

  export const languages = [{identifier:"en",name:"english"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}];
  export const gptkey = process.env.REACT_APP_OPENAI_KEY;