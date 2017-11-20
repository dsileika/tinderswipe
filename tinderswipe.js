var like_button = document.getElementsByClassName('recsGamepad__button--like'); 
var nolikesmodal = document.getElementsByClassName('modalManager');

var counter = 0;
var random = 0;
var liked_profiles = 0;

(function next() {
    if(nolikesmodal) console.log("Out of likes"); return;
    //if (counter++ >= 300) return;
    setTimeout(function() {
	try {
        like_button[0].click(); 
	} catch(TypeError) {}
        next();
	console.log("Liked "+liked_profiles+" profiles")
	liked_profiles = liked_profiles + 1
    }, 200);
})();