package com.tcompany.transportcompany.repository;


import com.tcompany.transportcompany.entity.Users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsersRepository extends MongoRepository<Users, String> {

    @Query("{'username': ?0}")
    List<Users> findByUsername(String username);

}
