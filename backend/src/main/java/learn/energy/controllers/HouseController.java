package learn.energy.controllers;

import learn.energy.data.HomeOwnerRepository;
import learn.energy.data.HouseRepository;
import learn.energy.data.RoomRepository;
import learn.energy.domain.HouseService;
import learn.energy.domain.RoomService;
import learn.energy.models.Homeowner;
import learn.energy.models.House;
import learn.energy.models.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/house")
public class HouseController {

    private final HouseService service;

    public HouseController(HouseService service) {
        this.service = service;
    }

    @Autowired
    private HouseRepository houseRepository;

    @Autowired
    private RoomRepository roomRepository;

    @GetMapping("/{houseId}")
    public House findByHouseId(@PathVariable int houseId) {
        Optional<House> returnVal = service.findByHouseId(houseId);
        System.out.println(returnVal);
        return returnVal.orElse(null);
    }
}
