package it.iad.rubricatelefonicaunoserver.service.impl;

import it.iad.rubricatelefonicaunoserver.model.Contatto;
import it.iad.rubricatelefonicaunoserver.repository.ContattoRepository;
import it.iad.rubricatelefonicaunoserver.service.RubricaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RubricaServiceImpl implements RubricaService {

//    @Autowired
//    ContattoRepository contattoRepository;

    @Override
    public int conta() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Contatto> search(String filtro) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Contatto> cancellaRubrica(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Contatto> aggiungiRubrica(Contatto contatto) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Contatto> trovaTutti() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
