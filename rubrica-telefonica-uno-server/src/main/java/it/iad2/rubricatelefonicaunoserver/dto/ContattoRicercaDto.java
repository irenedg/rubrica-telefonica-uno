package it.iad2.rubricatelefonicaunoserver.dto;

import it.iad2.rubricatelefonicaunoserver.model.Contatto;

public class ContattoRicercaDto {

    private Contatto contatto;
    private String filtro;

    public ContattoRicercaDto() {
    }

    public ContattoRicercaDto(Contatto contatto, String filtro) {
        this.contatto = contatto;
        this.filtro = filtro;
    }

    public Contatto getContatto() {
        return contatto;
    }

    public void setContatto(Contatto contatto) {
        this.contatto = contatto;
    }

    public String getFiltro() {
        return filtro;
    }

    public void setFiltro(String filtro) {
        this.filtro = filtro;
    }

    @Override
    public String toString() {
        return "ContattoRicercaDto{" + "contatto=" + contatto + ", filtro=" + filtro + '}';
    }

}
