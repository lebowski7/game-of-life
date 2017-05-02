import gameOfLife from './gameOfLife.js';

import { arrayify } from './helpers.js';

const inputBoard = arrayify(`
  0001 1000
  0010 0100
  0100 0010
  1000 0001
  1000 0001
  0100 0010
  0010 0100
  0001 1000
`);

var table = document.getElementById("board");
var nextButton = document.getElementById("setNextStateButton");
var playButton = document.getElementById("playButton");
var stopButton = document.getElementById("stopButton");

var gameObject = new gameOfLife(inputBoard, table, nextButton, playButton, stopButton);
var boardHTML = gameObject.renderBoard();
