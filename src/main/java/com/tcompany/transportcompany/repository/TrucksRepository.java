package com.tcompany.transportcompany.repository;


import com.tcompany.transportcompany.entity.Trailers;
import com.tcompany.transportcompany.entity.Trucks;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TrucksRepository extends MongoRepository<Trucks, String> {

    @Query("{'driver': ?0}")
    List<Trucks> findByDriverId(String driverId);

}
