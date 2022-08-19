package com.tcompany.transportcompany.repository;


import com.tcompany.transportcompany.entity.Trailers;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TrailersRepository extends MongoRepository<Trailers, String> {}
