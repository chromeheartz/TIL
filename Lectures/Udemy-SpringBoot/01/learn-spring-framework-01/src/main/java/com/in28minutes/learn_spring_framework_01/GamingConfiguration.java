package com.in28minutes.learn_spring_framework_01;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.in28minutes.learn_spring_framework_01.game.GameRunner;
import com.in28minutes.learn_spring_framework_01.game.GamingConsole;
import com.in28minutes.learn_spring_framework_01.game.PacManGame;

@Configuration
public class GamingConfiguration {
	@Bean
	public GamingConsole game() {
		var game = new PacManGame();
		return game;
	}
	
	@Bean
	public GameRunner gameRunner(GamingConsole game) {
		var gameRunner = new GameRunner(game);
		return gameRunner;
	}

}
