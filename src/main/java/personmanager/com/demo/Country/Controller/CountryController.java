package personmanager.com.demo.Country.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import personmanager.com.demo.Country.Model.Country;
import personmanager.com.demo.Country.Service.CountryService;

import java.util.List;

@RestController
@RequestMapping("/country")
public class CountryController {

    @Autowired
    private CountryService service;

    @GetMapping
    private ResponseEntity<List<Country>> getAllCountry() {
        return ResponseEntity.ok(service.findAll());
    }
}
