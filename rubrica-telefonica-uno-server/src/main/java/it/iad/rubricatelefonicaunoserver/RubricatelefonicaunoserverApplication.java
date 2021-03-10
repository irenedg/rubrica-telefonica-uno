package it.iad.rubricatelefonicaunoserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "it.iad.rubricatelefonicaunoserver.repository")
public class RubricatelefonicaunoserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(RubricatelefonicaunoserverApplication.class, args);
	}

}
