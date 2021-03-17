package it.iad2.rubricatelefonicaunoserver.service.impl;

import it.iad2.rubricatelefonicaunoserver.dto.ListaContattiDto;
import it.iad2.rubricatelefonicaunoserver.dto.UtenteDto;
import it.iad2.rubricatelefonicaunoserver.model.Contatto;
import it.iad2.rubricatelefonicaunoserver.repository.ContattoRepository;
import it.iad2.rubricatelefonicaunoserver.service.RubricaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RubricaServiceImpl implements RubricaService {

    @Autowired
    ContattoRepository contattoRepository;

    @Override
    public boolean checkLogin(UtenteDto utente) {
        if (utente.getUser().equals("user") && utente.getPassword().equals("psw")) {
            return true;
        }
        return false;
    }

    @Override
    public int conta() {
        return (int) contattoRepository.count();
    }

    @Override
    public ListaContattiDto search(String filtro) {
        return new ListaContattiDto(contattoRepository.findByNomeContainsOrCognomeContainsOrTelefonoContains(filtro, filtro, filtro));
    }

    @Override
    public ListaContattiDto cancellaRubrica(Long id, String filtro) {
        contattoRepository.deleteById(id);
        return search(filtro);
    }

    @Override
    public ListaContattiDto modificaRubrica(Contatto contatto, String filtro) {
        contattoRepository.save(contatto);
        return search(filtro);
    }

    @Override
    public ListaContattiDto aggiungiRubrica(Contatto contatto) {
        contattoRepository.save(contatto);
        return trovaTutti();
    }

    @Override
    public ListaContattiDto trovaTutti() {
        return new ListaContattiDto(contattoRepository.findAll());
    }

}
