var d = new Date();
var postCount = 0;
post = {
  userName:'',
  message:'',
  dateAndTime: '',
};

function newPost(postCount){
  post.userName = prompt('That is you user name?');
  post.message = prompt('What would you like to say?');
  post.dateAndTime = d;
  document.getElementById('name').innerHTML = post.userName;
  document.getElementById('message').innerHTML = post.message;
  document.getElementById('date').innerHTML = post.dateAndTime;
  postCount = postCount + 1;

  }
// counter variable
// user object
// has to have name of user[count]




totalUsers= 0;
users = {}

function createUser(name, email) {

  totalUsers += 1;
  propertyName = 'user' + totalUsers;

  users[totalUsers] = {
    name: name,
    email: email,
    id: totalUsers
    }

}
