package learn.energy.domain;

import learn.energy.data.RoomRepository;

import learn.energy.models.Room;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class RoomService {

    private final RoomRepository repository;

    public RoomService(RoomRepository repository) {
        this.repository = repository;
    }

    public List<Room> findAll() {
        return repository.findAll();
    }

    public List<Room> findByHouseId(int houseId) {
        return repository.findByHouseId(houseId);
    }


}
