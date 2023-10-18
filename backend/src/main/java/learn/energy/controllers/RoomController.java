package learn.energy.controllers;
import learn.energy.domain.RoomService;
import learn.energy.models.Room;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/{houseId}")
    public List<Room> findByHouseId(@PathVariable int houseId) {
        return service.findByHouseId(houseId);
    }

}
