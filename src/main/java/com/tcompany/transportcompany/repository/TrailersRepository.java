package com.tcompany.transportcompany.repository;


import com.tcompany.transportcompany.entity.Trailers;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TrailersRepository extends MongoRepository<Trailers, String> {

    @Query("{'cargo': ?0}")
    List<Trailers> findByCargoId(String cargoId);

    @Query("{'truck': ?0}")
    List<Trailers> findByTruckId(String truckId);
}
