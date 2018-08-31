var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('ytplayer', {
          videoId: 'p05yBncLFjw',
          playerVars: {
            controls: 0,
            autoplay: 0,
            disablekb: 0,
            iv_load_policy: 3,
            rel: 0,
            modestbranding: 1,
            showinfo: 0,
          },
          events: {
            'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
          }
        });

// управление шкалой воспроизведения видео
function onPlayerReady (){
  const duration = player.getDuration();

  let interval
  clearInterval(interval);
  setInterval (() =>{
    const completed = player.getCurrentTime();
    const percents =(completed/duration)*100;
    changeVideoPosition(percents);
  }, 1000)
}
$(".player__line--video").on("click", e => {
  e.preventDefault();
  const bar = $(e.currentTarget);

  const newDotPosition = e.pageX - bar.offset().left;
  const clickedPercents = (newDotPosition / bar.width()) * 100;
  changeVideoPosition(clickedPercents)
  const newPlayerTime = (player.getDuration() / 100) * clickedPercents;

  player.seekTo(newPlayerTime);
})

function changeVideoPosition (percents){
  $('.player__video-dot').css('left', `${percents}%`)
} 
// управление громкостью
$('.player__volume').on('click', e =>{
  e.preventDefault();
  if (!player.isMuted()) {
    player.mute();
  }else {player.unMute()
  }
})
}

$(".player__line--audio").on("click", e => {
  e.preventDefault();
  const volumeBar = $(e.currentTarget);

  const newVolumeDotPosition = e.pageX - volumeBar.offset().left;
  const clickedVolumePercents = (newVolumeDotPosition / volumeBar.width()) * 100;
  changeAudioPosition(clickedVolumePercents)
  const newVolume = (player.getVolume() / 100) * clickedVolumePercents;

  player.setVolume(clickedVolumePercents);
})

function changeAudioPosition (percents){
  $('.player__audio-dot').css('left', `${percents}%`)
} 

// управление play/pause
$('.player__play').on('click', e =>{
  e.preventDefault();
  var playBtn = $ (e.currentTarget);
  var playStatus = player.getPlayerState();

  if (playStatus ==1) {
    player.pauseVideo();
    $('.player__center-play').css('display', 'initial')
  } else { 
    player.playVideo();
    $('.player__center-play').css('display', 'none')
  }
})
