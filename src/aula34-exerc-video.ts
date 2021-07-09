interface VideoPlayelements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocols {
  playToggle(): void;
  stop(): void;
  init(): void;
}

export default class VideoPlayer implements VideoPlayerProtocols {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(video: VideoPlayelements) {
    this.videoPlayer = video.videoPlayer;
    this.playButton = video.playButton;
    this.stopButton = video.stopButton;
  }

  init(): void {
    this.playButton.addEventListener('click', () => {
      console.log('clicou no play');
      this.playToggle();
    });

    this.stopButton.addEventListener('click', () => {
      console.log('clicou no pause');
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.playButton.innerText = 'Play';
    });
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }

  stop(): void {
    throw new Error('Method not implemented.');
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.pause1') as HTMLButtonElement,
});

videoPlayer.init();
