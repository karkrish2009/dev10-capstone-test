package learn.energy.controllers;

import learn.energy.data.HomeOwnerRepository;
import learn.energy.data.HouseRepository;
import learn.energy.models.Homeowner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/homeowner")
public class HomeownerController {

    @Autowired
    private HomeOwnerRepository homeOwnerRepository;

    @Autowired
    private HouseRepository houseRepository;

    @GetMapping("/{ownerId}")
    private Optional<Homeowner> findByOwnerId(@PathVariable int ownerId) {
        return homeOwnerRepository.findById(ownerId);
    }
}
