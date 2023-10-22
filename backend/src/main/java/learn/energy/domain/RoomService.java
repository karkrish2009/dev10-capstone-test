package learn.energy.domain;

import learn.energy.data.RoomRepository;

import learn.energy.models.Room;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    private final RoomRepository repository;

    public RoomService(RoomRepository repository) {
        this.repository = repository;
    }

    public List<Room> findAll() {
        return repository.findAll();
    }


    public Optional<Room> findByRoomId(int roomId) {
        return repository.findById(roomId);
    }

}
