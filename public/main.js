var userAuthorized = true;

function loggedIn(userAuthorized) {
    if (userAuthorized) {
        () => {
            // go to feed of user.
            location.href = '/pages/feed.html';
        }
    } else if (!userAuthorized) {
        alert("User is Not Authorized");
    } else {
        alert("error");
        console.log("error somethings not working!");
    }
}




