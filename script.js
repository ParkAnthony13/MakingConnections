var pendingNum = document.querySelector(".pending");
var totalFriendNum = document.querySelector(".totalFriends");
var pending = 2;
var totalFriend = 418;


function removeLine(n) {
    console.log(n);
    document.querySelector(".friendRequest"+n).remove();
    pending--;
    totalFriend--;
    pendingNum.innerText = pending;
    totalFriendNum.innerText = totalFriend;
}

var newName = document.querySelector("#profileName");
function setName(element) {
    console.log(element.value);
    newName.innerHTML = element.value;
}

var editButton = document.querySelector("#changeName");
var hideValue = 1;
function showInput() {
    if (hideValue == 1) {
        hideValue = 0;
        editButton.style.display = "flex";
    } else {
        hideValue = 1;
        editButton.style.display = "none";
    }
}

function showPrompt() {
    var newName2 = prompt('Please enter New Profile Name');
    newName.innerHTML = newName2;
}