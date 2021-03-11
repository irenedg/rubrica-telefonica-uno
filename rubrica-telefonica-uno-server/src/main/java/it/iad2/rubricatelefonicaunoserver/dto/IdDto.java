package it.iad2.rubricatelefonicaunoserver.dto;

public class IdDto {

    private Long id;
    private String filtro;

    public IdDto() {
    }

    public IdDto(Long id, String filtro) {
        this.id = id;
        this.filtro = filtro;
    }

    public String getFiltro() {
        return filtro;
    }

    public void setFiltro(String filtro) {
        this.filtro = filtro;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
