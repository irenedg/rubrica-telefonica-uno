package it.iad2.rubricatelefonicaunoserver.service.impl;

import it.iad2.rubricatelefonicaunoserver.dto.ListaContattiDto;
import it.iad2.rubricatelefonicaunoserver.dto.UtenteDto;
import it.iad2.rubricatelefonicaunoserver.model.Contatto;
import it.iad2.rubricatelefonicaunoserver.repository.ContattoRepository;
import it.iad2.rubricatelefonicaunoserver.service.RubricaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RubricaServiceImpl implements RubricaService{

    @Autowired
    ContattoRepository contattoRepository;

    @Override
    public boolean checkLogin(UtenteDto utente) {
        if(utente.getUser().equals("user") && utente.getPassword().equals("psw")){
            return true;
        }
        return false;
    }
    
    @Override
    public int conta() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ListaContattiDto search(String filtro) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ListaContattiDto cancellaRubrica(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ListaContattiDto aggiungiRubrica(Contatto contatto) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ListaContattiDto trovaTutti() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    
}
