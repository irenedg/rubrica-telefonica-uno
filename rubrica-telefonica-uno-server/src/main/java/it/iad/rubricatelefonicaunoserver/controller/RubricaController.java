package it.iad.rubricatelefonicaunoserver.controller;

import it.iad.rubricatelefonicaunoserver.dto.ContattoDto;
import it.iad.rubricatelefonicaunoserver.dto.CounterDto;
import it.iad.rubricatelefonicaunoserver.dto.FiltroDto;
import it.iad.rubricatelefonicaunoserver.dto.IdDto;
import it.iad.rubricatelefonicaunoserver.dto.ListaContattiDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import it.iad.rubricatelefonicaunoserver.service.RubricaService;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("*")
@RestController
public class RubricaController {

    @Autowired
    RubricaService rubricaService;

    @RequestMapping("/conta")
    @ResponseBody
    public CounterDto conta() {
        throw new UnsupportedOperationException("conta");
    }

    @RequestMapping("/search")
    @ResponseBody
    public ListaContattiDto search(@RequestBody FiltroDto dto) {
        throw new UnsupportedOperationException("search");
    }

    @RequestMapping("/cancella-rubrica")
    @ResponseBody
    public ListaContattiDto cancellaRubrica(@RequestBody IdDto dto) {
        throw new UnsupportedOperationException("cancellaRubrica");
    }

    @RequestMapping("/aggiungi-rubrica")
    @ResponseBody
    public ListaContattiDto aggiungiRubrica(@RequestBody ContattoDto dto) {

        throw new UnsupportedOperationException("aggiungiRubrica");
    }

    @RequestMapping("/main-page")
    @ResponseBody
    public ListaContattiDto trovaTutti() {

        throw new UnsupportedOperationException("trovaTutti");
    }

}
