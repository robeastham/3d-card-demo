dpdc
====

## HTML / CSS / jQuery 3D Business Card

### Pretty fancy name for a rotating rectangle.
Easy, pal. Sure, rotating a rectangle is simple -- but a rotated element is also reversed, including
its background and content. To have content on the back of the card (and so the
front doesn't show through in reverse when it's spun), I've created each card face separately and
then folded them against each other. Clever, right?

### Mildly clever. How's it work?
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
Not too many unexpected issues came up along the way, and I think that's due to the simplicity of the
site's layout and dependencies.

The most notable exception was that some browsers produce an intermittent flicker at certain points in
the "flip" animation. While most cases were a frame or two at most and not very noticable to the human
eye, the card faces sometimes flickered and bled through each other on rotation, and that looked ugly.

So, I split the rotation animation(s) into two slices, and instead
of rotating 180deg in either direction, it's now two rotations of 90deg. Then I used a callback at the
end of each animation's *first* slice to hide/show the appropriate card face. This meant
the flicker still happened sometimes but only when the card is edge-on, so the card faces are hidden
and the flicker is invisible to the user.

Even though most browsers respected the z-index hierarchy of the card faces, the hide/show triggered
during the flip animation guarantees that slow or unsupported browsers won't show the incorrect face
during or after a rotation.

### Lessons learned?
It's not always the case, but with this site I believe I avoided quite a few stumbling points
by incorporating the external transit.js library. Having core site functionality depend upon a
third-party resource is always a tricky situation, but Transit is much like jQuery itself in that the
library is just a collection of short-hand references to existing, well-documented functionality.
There's very little "background" work being done by Transit, so the errors that I encountered were
debugged in a few seconds with a little snooping around with Firebug, and I learned a few tricks about
CSS3 in the process.