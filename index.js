Amplitude.init({
  bindings: {
    37: "prev",
    39: "next",
    32: "play_pause"
  },
  songs: [
    {
      name: "bibia shunno cover",
      artist: "Rummon vibes",
      url: "/bibia-shunno-cover.mp3",
      cover_art_url: "/cover_for_rummon.jpg"
    },
    {
      name: "dreams cover",
      artist: "Rummon vibes",
      url: "/dreams-cover.m4a",
      cover_art_url: "/cover_for_rummon.jpg"
    }
  ]
});

window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document
  .getElementById("song-played-progress")
  .addEventListener("click", function (e) {
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage(
      (parseFloat(x) / parseFloat(this.offsetWidth)) * 100
    );
  });

document
  .getElementById("song-played-progress-2")
  .addEventListener("click", function (e) {
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage(
      (parseFloat(x) / parseFloat(this.offsetWidth)) * 100
    );
  });
