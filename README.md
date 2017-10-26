# TinderSwipe
A Tinder autoswipe script

How to use:

1) Go to the page where you can like/dislike people profiles (the one with the heart).

2) On Chrome/Firefox press F12 and go to the "console" tab.

3) Copy and Paste the code from tinderswipe.js directly into the console. If you cant paste it press to the right of the >.

4) Press enter.

5) Profit?

~ Note: you may now close the console tab, or if wanted you can minimize chrome, it will still like. I've tried this only on chrome so far.


May work on other browsers tried it on chrome, firefox only so far.


Advanced Section (No noobs!):

Modifying the delay between likes: Change the value near the bottom of the code from 200 to what ever you want.
(The delay is in milliseconds).

What's the try and catch for: It's so that if theres an issue for some reason liking the profile it wont stop working.

What's like_button[0]. It gets the first instance of the like button.

How does it know what button to press? At the top of the code you can see the button's class is defined. We then use .click() to simulate a click.
 