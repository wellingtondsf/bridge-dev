package br.ufsc.backend.dto;

import java.util.List;

import lombok.Data;
import lombok.ToString;

import com.fasterxml.jackson.annotation.JsonProperty;

@Data
@ToString
public class RepositoryContainerDto {
	@JsonProperty("total_count")
	private Integer totalCount;

	private List<RepositoryDto> items;
}
