package learn.energy.domain;

import learn.energy.data.HouseRepository;
import learn.energy.data.RoomRepository;
import learn.energy.models.House;
import learn.energy.models.Room;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HouseService {

    private final HouseRepository repository;

    public HouseService(HouseRepository repository) {
            this.repository = repository;
        }

    public Optional<House> findByHouseId(int houseId) {
        return repository.findById(houseId);
    }
}
