import axios from "axios";
import IOAuth from "../../../../../../shared/system/security/oauth/domain/repositories/oauth.repository";

class GitHubOAuthDS implements IOAuth{

  async generateAccessToken(code: string): Promise<any> {

    const clientID = `${process.env.GITHUB_CLIENT_ID}`;
    const clientSecret = `${process.env.GITHUB_CLIENT_SECRET}`;

   const ax = await axios({
      // make a POST request
      method: "post",
      // to the Github authentication API, with the client ID, client secret
      // and request token
      url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`,
      // Set the content type header, so that we get the response in JSOn
      headers: {
        accept: "application/json",
      },
    })

    return ax.data.access_token || null;
    
    // .then((response) => {
    //   // Once we get the response, extract the access token from
    //   // the response body
    //   const accessToken = response.data.access_token;
    //   console.log("access token" + accessToken);
    //   // redirect the user to the welcome page, along with the access token
    //   // Post token.
    //   //app.post('/oauth/token', app.oauth.token());
    //   //res.redirect(`/welcome/access_token/${accessToken}`);
    // });

  }
}

export default GitHubOAuthDS;
