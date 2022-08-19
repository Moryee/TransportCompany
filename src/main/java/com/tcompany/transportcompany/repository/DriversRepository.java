package com.tcompany.transportcompany.repository;


import com.tcompany.transportcompany.entity.Drivers;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DriversRepository extends MongoRepository<Drivers, String> {}
