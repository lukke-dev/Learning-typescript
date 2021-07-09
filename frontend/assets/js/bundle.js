/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aula34-exerc-video.ts":
/*!***********************************!*\
  !*** ./src/aula34-exerc-video.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var VideoPlayer = (function () {
    function VideoPlayer(video) {
        this.videoPlayer = video.videoPlayer;
        this.playButton = video.playButton;
        this.stopButton = video.stopButton;
    }
    VideoPlayer.prototype.init = function () {
        var _this = this;
        this.playButton.addEventListener('click', function () {
            console.log('clicou no play');
            _this.playToggle();
        });
        this.stopButton.addEventListener('click', function () {
            console.log('clicou no pause');
            _this.videoPlayer.pause();
            _this.videoPlayer.currentTime = 0;
            _this.playButton.innerText = 'Play';
        });
    };
    VideoPlayer.prototype.playToggle = function () {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = 'Pause';
        }
        else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    };
    VideoPlayer.prototype.stop = function () {
        throw new Error('Method not implemented.');
    };
    return VideoPlayer;
}());
exports.default = VideoPlayer;
var videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.pause1'),
});
videoPlayer.init();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***************************************!*\
  !*** ./src/aula19-exercicio/index.ts ***!
  \***************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../aula34-exerc-video */ "./src/aula34-exerc-video.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map