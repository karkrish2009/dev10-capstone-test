package learn.energy.data;

import learn.energy.models.Homeowner;
import learn.energy.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HomeOwnerRepository  extends JpaRepository<Homeowner, Integer> {
}
