(function() {
    "use strict";

    function preload(sources)
    {
        var image;
        for (var i = 0, length = sources.length; i < length; ++i) {
            image = new Image();
            image.src = sources[i];
        }
    }

    preload(["assets/img/bridge-under-blue-dusk-221855.jpg", "assets/img/Pauley-Pavilion-ext-corner.jpg"]);

    var presentation = document.getElementById('presentation');
    var deck = bespoke.from('#presentation', {
      // Plugins:
        keys: true,
        touch: true,
        state: true,
        hash: true,
        bullets: true,
        progress: true
    });
    deck.slide();
})();
