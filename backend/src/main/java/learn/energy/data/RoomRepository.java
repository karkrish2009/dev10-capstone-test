package learn.energy.data;

import learn.energy.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Integer> {
    List<Room> findByHouseId(int houseId);
}
