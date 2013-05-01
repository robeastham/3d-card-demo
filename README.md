dpdc
====

## HTML / CSS / jQuery 3D Business Card

### Looks simple, it's just a rotating rectangle.
Rotating a rectangle is easy, but afterwards the element is reversed, including
its background and content. To have content on the back of the card (and so the
front doesn't show through in reverse), I've created each card face separately and
then folded them against each other.

### Interesting. How's it work?
The "Card" is just a wrapper around two divs called "Front" and "Back",
each representing a face of the card. Before the page finishes loading, while the
content is hidden, the Back is *folded* (CSS transform) against the Front,
so the card is able to *flip* (CSS rotate) without showing a reversed face.

### Dependencies?
I've used [transit.js](http://ricostacruz.com/jquery.transit/) to
help keep the code legible and simplify animating. The built-in queuing functionality
saved time when chaining transitions and events together, allowing for easy use
of callbacks and asynchronous animations.

Oh, and [jQuery](http://jquery.com).

### Encounter any complications?
Some browsers produce a flicker at certain points in the animation. While most
cases were intermittent and not very noticable, the card faces flickered and bled through
on rotation, and that looked ugly. So, I split the rotation animation into two slices (instead
of rotating 180deg, i split it into two rotations of 90deg). Then i used a callback at the
end of each animation's *first* slice to hide/show the appropriate card face. This meant
the flicker still happened, but the card was edge-on at the time, so it's invisible to the user.