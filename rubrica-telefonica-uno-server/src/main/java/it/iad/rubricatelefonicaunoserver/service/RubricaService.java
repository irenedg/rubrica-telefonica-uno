package it.iad.rubricatelefonicaunoserver.service;

import it.iad.rubricatelefonicaunoserver.model.Contatto;
import java.util.List;

public interface RubricaService {
   
   int conta();
   List<Contatto> search(String filtro);
   List<Contatto> cancellaRubrica(Long id);
   List<Contatto> aggiungiRubrica(Contatto contatto);
   List<Contatto> trovaTutti();
}
