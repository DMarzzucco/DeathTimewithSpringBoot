package personmanager.com.demo.Country.Reppository;

import org.springframework.data.jpa.repository.JpaRepository;
import personmanager.com.demo.Country.Model.Country;

public interface CountryRepository extends JpaRepository<Country, Long> {
}
