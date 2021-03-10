package it.iad2.rubricatelefonicaunoserver.dto;

import it.iad2.rubricatelefonicaunoserver.model.Contatto;

public class ContattoDto {
    private Contatto contatto;

    public ContattoDto() {
    }

    public ContattoDto(Contatto contatto) {
        this.contatto = contatto;
    }

    public Contatto getContatto() {
        return contatto;
    }

    public void setContatto(Contatto contatto) {
        this.contatto = contatto;
    }
    
}
