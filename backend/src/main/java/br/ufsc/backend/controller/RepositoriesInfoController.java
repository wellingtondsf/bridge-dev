package br.ufsc.backend.controller;

import br.ufsc.backend.dto.SimpleRepositoryDto;
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
	private String repoUrl;

	@Value("${userRepositories.url}")
	private String userRepoUrl;

	@GetMapping("/repositories")
	public ResponseEntity<RepositoryContainerDto> getRepositories( String name, String language,String user, Long page) {

		String nameFilter = name != "" ? name.trim() : "";
		String languageFilter = language!= "" ? "+language:" + language.trim(): "";
		String userFilter = user!= "" ? "+user:" + user.trim(): "";


		ResponseEntity<RepositoryContainerDto> forEntity = restTemplate.getForEntity(repoUrl+"?q="
				+nameFilter+languageFilter+userFilter+"&page="+page, RepositoryContainerDto.class);

		if (forEntity.getBody() != null) {
			return ResponseEntity.ok(forEntity.getBody());
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@GetMapping("/user_repositories")
	public ResponseEntity<SimpleRepositoryDto[]> getUserRepositories(@RequestParam("user") String user) {

		ResponseEntity<SimpleRepositoryDto[]> forEntity = restTemplate.getForEntity(userRepoUrl+user+"/repos", SimpleRepositoryDto[].class);

		if (forEntity.getBody() != null) {
			return ResponseEntity.ok(forEntity.getBody());
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

}
