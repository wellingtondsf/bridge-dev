package br.ufsc.backend.dto;

import java.util.List;

import lombok.Data;
import lombok.ToString;

import com.fasterxml.jackson.annotation.JsonProperty;

@Data
@ToString
public class RepositoryContainerDto {
	private Integer totalCount;

	private List<RepositoryDto> items;

	@JsonProperty("totalCount")
	public Integer getTotalCount() {
		return totalCount;
	}

	@JsonProperty("total_count")
	public void setTotalCount(Integer totalCount) {
		this.totalCount = totalCount;
	}
}
