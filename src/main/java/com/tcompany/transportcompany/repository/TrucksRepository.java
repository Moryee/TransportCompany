package com.tcompany.transportcompany.repository;


import com.tcompany.transportcompany.entity.Trucks;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TrucksRepository extends MongoRepository<Trucks, String> {}
