package br.ufsc.backend.dto;

import java.util.Date;

import lombok.Data;
import lombok.ToString;

import com.fasterxml.jackson.annotation.JsonProperty;

@Data
@ToString
public class RepositoryDto {

	@Data
	@ToString
	private class Owner{
		private String login;
	}

	private Long id;

	private String repositoryName;
	private Owner owner;
	private String description;

	private Long stargazersCount;
	private Long forks;
	private Long watchers;

	private Long openIssues;
	private String language;

	private Date createdAt;

	@JsonProperty("repositoryName")
	public String getRepositoryName() {
		return repositoryName;
	}

	@JsonProperty("name")
	public void setRepositoryName(String repositoryName) {
		this.repositoryName = repositoryName;
	}


	@JsonProperty("open_issues")
	public void setOpenIssues(Long openIssues){
		this.openIssues = openIssues;
	}

	@JsonProperty("openIssues")
	public Long getOpenIssues() {
		return this.openIssues;
	}

	@JsonProperty("stargazersCount")
	public Long getStargazersCount() {
		return stargazersCount;
	}

	@JsonProperty("stargazers_count")
	public void setStargazersCount(Long stargazersCount) {
		this.stargazersCount = stargazersCount;
	}

	@JsonProperty("createdAt")
	public Date getCreatedAt() {
		return createdAt;
	}

	@JsonProperty("created_at")
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
}
