class Github{
    //This class will handle all the process to fetch the data from github api/
    constructor(){
        //All of those will be passed along with the irl
        this.client_id = '03726aedf4bb5644570d';
        this.client_secret = 'ace2bc9b6af2b4edc17034a56ff6bf2c78b7f744';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async get(user){
        //Those variables will contain the informations about the profile and repos. 
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        //Then a reponse for a json will be waited
        const repos = await repoResponse.json();
        const profile = await profileResponse.json();
        return {
            //Then this method returns the profile info and also the repos
            profile,
            repos
        };
            
    }
}