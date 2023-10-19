package learn.energy.controllers;
import learn.energy.domain.RoomService;
import learn.energy.models.Room;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/room")
public class RoomController {

    private final RoomService service;

    public RoomController(RoomService service) {
        this.service = service;
    }

    @GetMapping
    public List<Room> findAll() {
        return service.findAll();
    }

    @GetMapping("/{roomId}")
    public Room findByRoomId(@PathVariable int roomId) {
        Optional<Room> returnVal = service.findByRoomId(roomId);
        System.out.println(returnVal);
        return returnVal.orElse(null);

    }

}
