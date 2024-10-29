package personmanager.com.demo.State.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import personmanager.com.demo.State.Model.State;
import personmanager.com.demo.State.Service.StateService;

import java.util.List;

@RestController
@RequestMapping("/states")
public class StateController {
    @Autowired
    private StateService service;

    @GetMapping("{id}")
    public ResponseEntity<List<State>> getAllStateByCountry (@PathVariable("id") Long idCountry) {
        return ResponseEntity.ok(service.findAllStateByCountry(idCountry));
    }
}
