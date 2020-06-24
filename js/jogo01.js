var pontuacao_final;

var blockdata = [
  { selector: ".block1", name: "1", pitch: "2.5" },
  { selector: ".block2", name: "2", pitch: "5" },
  { selector: ".block3", name: "3", pitch: "6.5" },
  { selector: ".block4", name: "4", pitch: "9.5" }
];
var soundsetdata = [
  { name: "correct", sets: [2.5, 5, 6.5, 9.5] },
  { name: "wrong", sets: [2, 4, 5.5, 7] }
];
var leveldatas = [
  // "1234",
  // "12324",
  // "231234",
  // "41233412",
  // "41323134132",
  // "2342341231231423414232"
];
var Blocks = function (blockAssign, setAssign) {
  this.allOn = false;
  this.block = blockAssign.map((d, i) => ({
    name: d.name,
    el: $(d.selector),
    audio: this.getAudioObject(d.pitch)
  }));
  this.soundSets = setAssign.map((d, i) => ({
    name: d.name,
    sets: d.sets.map((pitch) => this.getAudioObject(pitch))
  }));
  this.row = 2;
  this.column = 2;
  this.nBlock = this.row * this.column;
};
Blocks.prototype.flash = function (note) {
  var block = this.block.find(function (d) {
    return d.name == note;
  });
  if (block) {
    block.audio.currentTime = 0;
    block.audio.play();
    block.el.addClass("active");
    var _this = this;
    setTimeout(function () {
      if (_this.allOn == false) {
        block.el.removeClass("active");
      }
    }, 500);
  }
};
Blocks.prototype.turnAllOn = function () {
  this.allOn = true;
  this.block.forEach(function (d) {
    d.el.addClass("active");
  });
};
Blocks.prototype.turnAllOff = function () {
  this.allOn = false;
  this.block.forEach(function (d) {
    d.el.removeClass("active");
  });
};
Blocks.prototype.playSets = function (name) {
  this.soundSets.forEach((d, i) => {
    if (name == d.name) {
      d.sets.forEach((pitch) => {
        pitch.currentTime = 0;
        pitch.play();
      });
    }
  });
};
Blocks.prototype.getAudioObject = function (pitch) {
  return new Audio(
    "https://awiclass.monoame.com/pianosound/set/" + pitch + ".wav"
  );
};
Blocks.prototype.addColumn = function () {
  this.column++;
  $(".block-row").append("<div class='block'></div>");
};

var Game = function () {
  this.blocks = new Blocks(blockdata, soundsetdata);
  this.levels = leveldatas;
  this.currentLevel = 0;
  this.playInterval = 600;
  this.mode = "waiting";
  this.userInput = "";
};
Game.prototype.startLevel = function () {
  this.blocks.turnAllOff();
  var level = "";
  for (var i = 0; i < this.currentLevel + 2; i++) {
    level += Math.floor(Math.random() * 2) + 1;
  }
  leveldatas.push(level);
  this.showMessage("Pontos: " + this.currentLevel);
  var leveldata = leveldatas[this.currentLevel];
  this.startGame(leveldata);
};
Game.prototype.showMessage = function (msg) {
  console.log(msg);
  $(".status").text(msg);
};
Game.prototype.startGame = function (answer) {
  this.mode = "gamePlay";
  this.answer = answer;
  var notes = this.answer.split("");
  this.showStatus("");
  this.timer = setInterval(() => {
    var char = notes.shift();
    this.playNote(char);
    if (!notes.length) {
      console.log("play end");
      this.startUserInput();
      clearInterval(this.timer);
    }
  }, this.playInterval);
};
Game.prototype.playNote = function (note) {
  console.log(note);
  this.blocks.flash(note);
};
Game.prototype.startUserInput = function () {
  this.userInput = "";
  this.mode = "userInput";
};
Game.prototype.userSendInput = function (inputChar) {
  if (this.mode == "userInput") {
    var tempString = this.userInput + inputChar;
    this.playNote(inputChar);
    this.showStatus(tempString);
    if (this.answer.indexOf(tempString) == 0) {
      console.log("good job");
      if (this.answer == tempString) {
        this.showMessage("Correto!");
        console.log("correct");
        this.currentLevel += 1; //pontos
        this.mode = "waiting";
        setTimeout(() => {
          this.startLevel();
        }, 2000);
      }
    } else { //fim de jogo
      this.showMessage("Errado!");
      console.log("wrong");
      //this.currentLevel = 0;
      this.mode = "waiting";
      if($.trim($( '#minutos' ).text()) < 5){
        $('#pontuacao_final').html('Trapaceou! <br/> Não fez o quiz corretamente! <br/>  ٩(ఠ益ఠ)۶');
      }
      else{
        pontuacao_final =  (($.trim($( '#pontos' ).text()) * 10) / $.trim($( '#minutos' ).text())) + this.currentLevel;
        $('#pontuacao_final').html('Sua pontuação é <br/>' + pontuacao_final.toFixed(1));
      }
      $("#pontuacao_final").css('color', 'black');
      $("#tela_jogo_p1").hide();
      $("#tela_final").show();
    }
    console.log(tempString);
    this.userInput += inputChar;
  }
};
Game.prototype.showStatus = function (tempString) {
  $(".inputStatus").html("");
  this.answer.split("").forEach((d, i) => {
    var circle = $("<div class='circle'></div>");
    if (i < tempString.length) {
      circle.addClass("correct");
    }
    $(".inputStatus").append(circle);
  });
  if (tempString == this.answer) {
    $(".inputStatus").addClass("correct");
    setTimeout(() => {
      this.blocks.turnAllOn();
      this.blocks.playSets("correct");
    }, 500);
  } else {
    $(".inputStatus").removeClass("correct");
  }
  if (this.answer.indexOf(tempString) != 0) {
    $(".inputStatus").addClass("wrong");
    leveldatas = [];
    setTimeout(() => {
      this.blocks.turnAllOn();
      this.blocks.playSets("wrong");
    }, 500);
  } else {
    $(".inputStatus").removeClass("wrong");
  }
};
var blocks = new Blocks(blockdata, soundsetdata);
var game = new Game();


$( ".bt_comecar_jogo_01" ).click(function() {
  //começar jogo
  $(".bt_comecar_jogo_01").hide();
  setTimeout(() => {
    game.startLevel();
  }, 1000);
});
