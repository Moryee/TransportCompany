package com.tcompany.transportcompany.repository;


import com.tcompany.transportcompany.entity.Cargo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

//@RepositoryRestResource()
@Repository
public interface CargoRepository extends MongoRepository<Cargo, String> {}
