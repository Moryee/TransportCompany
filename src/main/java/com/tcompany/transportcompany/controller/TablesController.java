package com.tcompany.transportcompany.controller;


import com.tcompany.transportcompany.entity.Cargo;
import com.tcompany.transportcompany.links.CargoLinks;
import com.tcompany.transportcompany.repository.CargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import lombok.extern.slf4j.Slf4j;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/")
@CrossOrigin
public class TablesController {

    @Autowired
    private CargoRepository cargoRepository;

    // Cargo
    @GetMapping(path = CargoLinks.GET_CARGO)
    public ResponseEntity<?> getCargo() {
        List<Cargo> resource = cargoRepository.findAll();
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = CargoLinks.POST_CARGO)
    public ResponseEntity<?> postCargo(@RequestBody Cargo cargo) {
        Cargo resource = cargoRepository.insert(cargo);
        return ResponseEntity.ok(resource);
    }

    @PutMapping(path = CargoLinks.PUT_CARGO)
    public ResponseEntity<?> putCargo(@RequestBody Cargo newCargo) {
        Cargo cargo = cargoRepository.findById(newCargo.getId())
                .orElseThrow(() -> new RuntimeException(
                    String.format("Cannot Find Cargo by ID %s", newCargo.getId())));

        cargo.setType(newCargo.getType());
        cargo.setWeight(newCargo.getWeight());
        cargo.setLocation(newCargo.getLocation());
        cargo.setDestination(newCargo.getDestination());

        cargoRepository.save(cargo);
        return ResponseEntity.ok(cargo);
    }

    @DeleteMapping(path = CargoLinks.DELETE_CARGO)

    public ResponseEntity<?> deleteCargo(@RequestBody Cargo cargo) {
        String id = cargo.getId();
        cargoRepository.deleteById(id);
        return ResponseEntity.ok(id);
    }
}
