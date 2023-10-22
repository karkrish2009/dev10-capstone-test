package learn.energy.data;

import learn.energy.models.Homeowner;
import learn.energy.models.House;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HouseRepository extends JpaRepository<House, Integer> {
}
