package com.tcompany.transportcompany.controller;


import com.tcompany.transportcompany.entity.*;
import com.tcompany.transportcompany.links.*;
import com.tcompany.transportcompany.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import lombok.extern.slf4j.Slf4j;

import java.util.List;
import java.util.Locale;

@Slf4j
@RestController
@RequestMapping("/api/")
@CrossOrigin
public class TablesController {

    @Autowired
    private CargoRepository cargoRepository;
    @Autowired
    private DriversRepository driversRepository;
    @Autowired
    private TrucksRepository trucksRepository;
    @Autowired
    private TrailersRepository trailersRepository;
    @Autowired
    private UsersRepository usersRepository;

    private void logInfo(String method, String tableName) {
        log.info("TablesController: " + method.toUpperCase(Locale.ROOT) + " " + tableName);
    }

    // Cargo
    @GetMapping(path = CargoLinks.GET_CARGO)
    public ResponseEntity<?> getCargo() {
        logInfo("get", "cargo");
        List<Cargo> resource = cargoRepository.findAll();
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = CargoLinks.POST_CARGO)
    public ResponseEntity<?> postCargo(@RequestBody Cargo cargo) {
        logInfo("post", "cargo");
        Cargo resource = cargoRepository.insert(cargo);
        return ResponseEntity.ok(resource);
    }

    @PutMapping(path = CargoLinks.PUT_CARGO)
    public ResponseEntity<?> putCargo(@RequestBody Cargo newCargo) {
        logInfo("put", "cargo");
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
        logInfo("delete", "cargo");
        String id = cargo.getId();
        cargoRepository.deleteById(id);

        try {
            Trailers updTrailer = trailersRepository.findByCargoId(id).get(0);
            updTrailer.setCargo(null);
            trailersRepository.save(updTrailer);
        }
        catch (IndexOutOfBoundsException e) {
            log.info("Method deleteCargo didn't find any relation");
        }

        return ResponseEntity.ok(id);
    }

    // Drivers
    @GetMapping(path = DriversLinks.GET_DRIVERS)
    public ResponseEntity<?> getDrivers() {
        logInfo("get", "drivers");
        List<Drivers> resource = driversRepository.findAll();
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = DriversLinks.POST_DRIVER)
    public ResponseEntity<?> postDriver(@RequestBody Drivers driver) {
        logInfo("post", "drivers");
        Drivers resource = driversRepository.insert(driver);
        return ResponseEntity.ok(resource);
    }

    @PutMapping(path = DriversLinks.PUT_DRIVER)
    public ResponseEntity<?> putDriver(@RequestBody Drivers newDriver) {
        logInfo("put", "drivers");
        Drivers driver = driversRepository.findById(newDriver.getId())
                .orElseThrow(() -> new RuntimeException(
                        String.format("Cannot Find Driver by ID %s", newDriver.getId())));

        driver.setName(newDriver.getName());
        driver.setSurname(newDriver.getSurname());

        driversRepository.save(driver);
        return ResponseEntity.ok(driver);
    }

    @DeleteMapping(path = DriversLinks.DELETE_DRIVER)
    public ResponseEntity<?> deleteDriver(@RequestBody Drivers driver) {
        logInfo("delete", "drivers");
        String id = driver.getId();
        driversRepository.deleteById(id);

        try {
            Trucks updTruck = trucksRepository.findByDriverId(id).get(0);
            updTruck.setDriver(null);
            trucksRepository.save(updTruck);
        }
        catch (IndexOutOfBoundsException e) {
            log.info("Method deleteDriver didn't find any relation");
        }

        return ResponseEntity.ok(id);
    }

    // Trucks
    @GetMapping(path = TrucksLinks.GET_TRUCKS)
    public ResponseEntity<?> getTrucks() {
        logInfo("get", "trucks");
        List<Trucks> resource = trucksRepository.findAll();
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = TrucksLinks.POST_TRUCK)
    public ResponseEntity<?> postTruck(@RequestBody Trucks truck) {
        logInfo("post", "trucks");

        if (!trucksRepository.findByDriverId(truck.getDriver()).isEmpty()) {
            log.warn("trucks already contain this DriverId");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Trucks resource = trucksRepository.insert(truck);
        return ResponseEntity.ok(resource);
    }

    @PutMapping(path = TrucksLinks.PUT_TRUCK)
    public ResponseEntity<?> putTruck(@RequestBody Trucks newTruck) {
        logInfo("put", "trucks");
        Trucks truck = trucksRepository.findById(newTruck.getId())
                .orElseThrow(() -> new RuntimeException(
                        String.format("Cannot Find Truck by ID %s", newTruck.getId())));

        truck.setModel(newTruck.getModel());
        truck.setDriver(newTruck.getDriver());
        truck.setLocation(newTruck.getLocation());

        trucksRepository.save(truck);
        return ResponseEntity.ok(truck);
    }

    @DeleteMapping(path = TrucksLinks.DELETE_TRUCK)
    public ResponseEntity<?> deleteTruck(@RequestBody Trucks truck) {
        logInfo("delete", "trucks");
        String id = truck.getId();
        trucksRepository.deleteById(id);

        try {
            Trailers updTrailer = trailersRepository.findByTruckId(id).get(0);
            updTrailer.setTruck(null);
            trailersRepository.save(updTrailer);
        }
        catch (IndexOutOfBoundsException e) {
            log.info("Method deleteTruck didn't find any relation");
        }

        return ResponseEntity.ok(id);
    }

    // Trailers
    @GetMapping(path = TrailersLinks.GET_TRAILERS)
    public ResponseEntity<?> getTrailers() {
        logInfo("get", "trailers");
        List<Trailers> resource = trailersRepository.findAll();
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = TrailersLinks.POST_TRAILER)
    public ResponseEntity<?> postTrailer(@RequestBody Trailers trailer) {
        logInfo("post", "trailers");

        if (!trailersRepository.findByCargoId(trailer.getCargo()).isEmpty() ||
            !trailersRepository.findByTruckId(trailer.getTruck()).isEmpty()) {
            log.warn("trailers already contain this CargoId or TruckId");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Trailers resource = trailersRepository.insert(trailer);
        return ResponseEntity.ok(resource);
    }

    @PutMapping(path = TrailersLinks.PUT_TRAILER)
    public ResponseEntity<?> putTrailer(@RequestBody Trailers newTrailer) {
        logInfo("put", "trailers");
        Trailers trailer = trailersRepository.findById(newTrailer.getId())
                .orElseThrow(() -> new RuntimeException(
                        String.format("Cannot Find Trailer by ID %s", newTrailer.getId())));

        trailer.setTruck(newTrailer.getTruck());
        trailer.setCargo(newTrailer.getCargo());
        trailer.setLocation(newTrailer.getLocation());

        trailersRepository.save(trailer);
        return ResponseEntity.ok(trailer);
    }

    @DeleteMapping(path = TrailersLinks.DELETE_TRAILER)
    public ResponseEntity<?> deleteTrailer(@RequestBody Trailers trailer) {
        logInfo("delete", "trailers");
        String id = trailer.getId();
        trailersRepository.deleteById(id);
        return ResponseEntity.ok(id);
    }

    // users
    @GetMapping(path = UsersLinks.GET_USERS)
    public ResponseEntity<?> getUsers() {
        logInfo("get", "users");
        List<Users> resource = usersRepository.findAll();
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = UsersLinks.POST_USERS)
    public ResponseEntity<?> postUser(@RequestBody Users user) {
        logInfo("post", "users");

        if (!usersRepository.findByUsername(user.getUsername()).isEmpty()) {
            log.warn("user with this username already exists");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Users resource = usersRepository.insert(user);
        return ResponseEntity.ok(resource);
    }

    @PutMapping(path = UsersLinks.PUT_USER)
    public ResponseEntity<?> putUser(@RequestBody Users newUser) {
        logInfo("put", "users");
        Users user = usersRepository.findById(newUser.getId())
                .orElseThrow(() -> new RuntimeException(
                        String.format("Cannot Find User by ID %s", newUser.getId())));

        user.setUsername(newUser.getUsername());
        user.setPassword(newUser.getPassword());
        user.setAccess_right(newUser.getAccess_right());

        usersRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping(path = UsersLinks.DELETE_USER)
    public ResponseEntity<?> deleteUser(@RequestBody Users user) {
        logInfo("delete", "users");
        String id = user.getId();
        usersRepository.deleteById(id);
        return ResponseEntity.ok(id);
    }
}
