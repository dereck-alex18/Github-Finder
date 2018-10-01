class UI{

    //This class will handle all the process to build the UI dynamically, according to the user
    constructor() {
        this.profile = document.getElementById('profile');
    }

    getProfile(user){
        //It will create the html dynamically, depending on the user informations
        //THe argument "user" is passed in the app.js. It contains the informations about the user profile and repos
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.profile.avatar_url}">
                        <a class="btn btn-primary btn-block mb-3" href="${user.profile.html_url}" target="_blank">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary mb-2">Public repos: ${user.profile.public_repos}</span>
                        <span class="badge badge-success mb-2">Public Gists: ${user.profile.public_gists}</span>
                        <span class="badge badge-warning mb-2">Followers: ${user.profile.followers}</span>
                        <span class="badge badge-danger mb-2">Following: ${user.profile.following}</span>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.profile.company}</li>
                            <li class="list-group-item">User Blog: ${user.profile.blog}</li>
                            <li class="list-group-item">User Location: ${user.profile.location}</li>
                            <li class="list-group-item">Member since: ${user.profile.created_at}</li>
                        
                        </ul>
                    </div
                </div>
            
            </div>
            <h3>Latest repos</h3>
            <div id="repos"></div>
        `
    }

    showRepos(repos){
        //All the generated html will be appended to this variable
        let output = '';
        
        repos.forEach(function(repo){
            //Since the repos argument is an array containing all the infos about the user's repos, it's necessary to loop through it
            //Every information will be appended to the variable output
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                        <span class="badge badge-primary mb-2">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary mb-2">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success mb-2">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            
            `;
        });
        //Then it will be inserted inside of a div, which its id is "repos", to be displayed in the UI
        document.getElementById('repos').innerHTML = output;
    }

    showError(message){
        //This method will show an error message in case of a user is not found
        this.clearAlert(); //first, it will clear the previous error message, to the UI not get overwhelmed
        const errorDiv = document.createElement('div'); //A div is created, where the message will be displayed
        errorDiv.classList = 'error'; //The class "error" is inserted, in order to give a better look to the message
        errorDiv.appendChild(document.createTextNode(message)); //It will append the message, passed as an argument in the app.js, to the div
        const searchUser = document.getElementById('search-user');
        const searchCard = document.querySelector('.card-body');
        searchCard.insertBefore(errorDiv, searchUser); //And finally be inserted before the input.
        
        setTimeout(() => {
            //after 1500ms the method clearAlert() is called 
            this.clearAlert();
        }, 1500);
    }

    clearAlert(){
        //It cleans the current alert everytime it is called
        const currentAlert = document.querySelector('.error');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearProfile(){
        //in case of the input is empty, all the ui will be cleaned
        this.profile.innerHTML = ''
    }
}