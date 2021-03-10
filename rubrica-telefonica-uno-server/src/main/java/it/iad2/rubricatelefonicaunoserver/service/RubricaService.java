package it.iad2.rubricatelefonicaunoserver.service;

import it.iad2.rubricatelefonicaunoserver.dto.ListaContattiDto;
import it.iad2.rubricatelefonicaunoserver.dto.UtenteDto;
import it.iad2.rubricatelefonicaunoserver.model.Contatto;

public interface RubricaService {
   
   boolean checkLogin(UtenteDto utente);
   
   int conta();
   
   ListaContattiDto search(String filtro);
   
   ListaContattiDto cancellaRubrica(Long id);
   
   ListaContattiDto aggiungiRubrica(Contatto contatto);
   
   ListaContattiDto trovaTutti();
}
