package it.iad2.rubricatelefonicaunoserver.dto;

import it.iad2.rubricatelefonicaunoserver.model.Contatto;
import java.util.List;


public class ListaContattiDto {
    private List<Contatto> listContatto;

    public ListaContattiDto() {
    }

    public ListaContattiDto(List<Contatto> listContatto) {
        this.listContatto = listContatto;
    }

    public List<Contatto> getListContatto() {
        return listContatto;
    }

    public void setListContatto(List<Contatto> listContatto) {
        this.listContatto = listContatto;
    }
    
    
}
