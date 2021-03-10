package it.iad.rubricatelefonicaunoserver.dto;

import it.iad.rubricatelefonicaunoserver.model.Contatto;

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
