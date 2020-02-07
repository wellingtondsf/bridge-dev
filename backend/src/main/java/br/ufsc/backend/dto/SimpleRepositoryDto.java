package br.ufsc.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class SimpleRepositoryDto {

    private Long id;

    private String repositoryName;


    @JsonProperty("repositoryName")
    public String getRepositoryName() {
        return repositoryName;
    }

    @JsonProperty("name")
    public void setRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
    }
}
