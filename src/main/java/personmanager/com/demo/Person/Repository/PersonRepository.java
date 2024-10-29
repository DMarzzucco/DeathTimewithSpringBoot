package personmanager.com.demo.Person.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import personmanager.com.demo.Person.Model.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
