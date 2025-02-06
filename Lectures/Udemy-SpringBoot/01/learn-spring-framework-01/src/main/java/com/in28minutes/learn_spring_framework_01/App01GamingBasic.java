package com.in28minutes.learn_spring_framework_01;

import com.in28minutes.learn_spring_framework_01.game.GameRunner;
import com.in28minutes.learn_spring_framework_01.game.MarioGame;
import com.in28minutes.learn_spring_framework_01.game.PacManGame;
import com.in28minutes.learn_spring_framework_01.game.SuperContraGame;

public class App01GamingBasic {

	public static void main(String[] args) {
//		var game = new MarioGame();
//		var game = new SuperContraGame();
		var game = new PacManGame(); // 1: Object Creation
		var gameRunner = new GameRunner(game); // 2: Object Creation + Wring of Dependencies
		gameRunner.run();
	}

}
