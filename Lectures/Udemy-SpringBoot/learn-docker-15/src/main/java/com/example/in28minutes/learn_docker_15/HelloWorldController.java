package com.example.in28minutes.learn_docker_15;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloWorldController {

    @GetMapping(path = "/")
    public String helloWorld() {
		// Implemented using String Templates
        return """
                { message: Hello World Java v1 }
               """;
    }
}
