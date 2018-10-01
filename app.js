const github = new Github(); //Instantiate an object type Github
const ui = new UI(); //Instantiate an object type UI
//Grab the data from the input
const searchUser = document.getElementById('search-user');

//Everytime a key is released, this event will be fired
searchUser.addEventListener('keyup', (e) => {
    const userText = searchUser.value; 
    if(userText !== ''){
        //If the form is not empty it will pass what as typed as an agument to "github.get()"
       github.get(userText)
       .then(data => {
           //Once the data is fetch, it will be check if the user was found, if it's not, the program will display an error message
          if(data.profile.message === 'Not Found'){
               ui.showError('User not found!'); //Passing the error message as an argument
            }else{
                //If the user is found, then the data will be passed, which contains the profile info and the repos
                ui.getProfile(data);
                ui.showRepos(data.repos);
                
            }
       })
    }else{
       //If the input is empty, no profile will be displayed 
        ui.clearProfile();
    }
});