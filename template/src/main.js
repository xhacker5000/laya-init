window.onload = function(){

 	var SCREEN_WIDTH = 800;
	var SCREEN_HEIGHT = 600;

 	Laya.init(SCREEN_WIDTH, SCREEN_HEIGHT,Laya.WebGL);



	var hpLabel = new Laya.Label();
	hpLabel.fontSize = 30;
	hpLabel.color = "#FF0000";
	hpLabel.text = "Welcome Laya World";
	hpLabel.pos(20, 20);

	
	Laya.stage.addChild(hpLabel);



}