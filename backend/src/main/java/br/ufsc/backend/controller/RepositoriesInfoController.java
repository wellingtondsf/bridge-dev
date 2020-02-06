package br.ufsc.backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import br.ufsc.backend.dto.RepositoryContainerDto;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class RepositoriesInfoController {

	private final RestTemplate restTemplate = new RestTemplate();

	@Value("${repositories.url}")
	private String url;

	@GetMapping("/repositories")
	public ResponseEntity<RepositoryContainerDto> getRepositories(@RequestParam("name") String name) {

		ResponseEntity<RepositoryContainerDto> forEntity = restTemplate.getForEntity(url+"?q="+name, RepositoryContainerDto.class);

		if (forEntity.getBody() != null) {
			return ResponseEntity.ok(forEntity.getBody());
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

}
