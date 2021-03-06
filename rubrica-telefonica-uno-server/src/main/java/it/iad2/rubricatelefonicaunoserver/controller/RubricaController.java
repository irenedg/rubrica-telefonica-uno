package it.iad2.rubricatelefonicaunoserver.controller;

import it.iad2.rubricatelefonicaunoserver.dto.ContattoDto;
import it.iad2.rubricatelefonicaunoserver.dto.CounterDto;
import it.iad2.rubricatelefonicaunoserver.dto.EsitoLoginDto;
import it.iad2.rubricatelefonicaunoserver.dto.FiltroDto;
import it.iad2.rubricatelefonicaunoserver.dto.IdDto;
import it.iad2.rubricatelefonicaunoserver.dto.ListaContattiDto;
import it.iad2.rubricatelefonicaunoserver.dto.UtenteDto;
import it.iad2.rubricatelefonicaunoserver.service.RubricaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin("*")
@RestController
public class RubricaController {

    @Autowired
    RubricaService rubricaService;
    
    
    @RequestMapping("/check-login")
    @ResponseBody
    public EsitoLoginDto checkLogin(@RequestBody UtenteDto dto) {
        return new EsitoLoginDto(rubricaService.checkLogin(dto));
    }
    
    @RequestMapping("/conta")
    @ResponseBody
    public CounterDto conta() {
        return new CounterDto(rubricaService.conta());
    }

    @RequestMapping("/search")
    @ResponseBody
    public ListaContattiDto search(@RequestBody FiltroDto dto) {
        return rubricaService.search(dto.getFiltro());
    }

    @RequestMapping("/cancella-rubrica")
    @ResponseBody
    public ListaContattiDto cancellaRubrica(@RequestBody IdDto dto) {
        return rubricaService.cancellaRubrica(dto.getId(), dto.getFiltro());
    }

    @RequestMapping("/modifica")
    @ResponseBody
    public ListaContattiDto modificaRubrica(@RequestBody ContattoDto dto) {
        return rubricaService.modificaRubrica(dto.getContatto());
    }

    @RequestMapping("/aggiungi-rubrica")
    @ResponseBody
    public ListaContattiDto aggiungiRubrica(@RequestBody ContattoDto dto) {
        return rubricaService.aggiungiRubrica(dto.getContatto());
    }

    @RequestMapping("/main-page")
    @ResponseBody
    public ListaContattiDto trovaTutti() {
        return rubricaService.trovaTutti();
    }

}
