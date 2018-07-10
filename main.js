totalUsers= 0;
users = {}

var d = new Date();
var postCount = 0;
post = {
  userName:'',
  message:'',
  dateAndTime: '',
};

function newDiv() {
  var name = prompt('What is your User name?');
  var email = prompt('What is your Email?')
  var bio = prompt('Tell us more about you')
  totalUsers += 1;
  propertyName = 'user' + totalUsers;

  users[totalUsers] = {
    name: name,
    email: email,
    bio : bio,
    id: totalUsers
    }

  post.message = prompt('What would you like to say?');
  post.dateAndTime = d;
  var div = document.createElement('div');
  div.className = 'post-content';
  var h = document.createElement('h3');
  h.innerHTML = users[totalUsers].name;
  div.appendChild(h);
  var p = document.createElement('p');
  p.innerHTML = post.message;
  div.appendChild(p);
  var date = document.createElement('small');
  date.innerHTML = post.dateAndTime;
  div.appendChild(date);
  var space = document.createElement('hr');
  div.appendChild(space);
  document.getElementById('post-display').appendChild(div);
}
