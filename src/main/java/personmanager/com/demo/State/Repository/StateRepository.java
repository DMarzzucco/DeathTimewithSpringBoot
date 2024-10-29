package personmanager.com.demo.State.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import personmanager.com.demo.State.Model.State;

public interface StateRepository extends JpaRepository<State, Long> {
}
